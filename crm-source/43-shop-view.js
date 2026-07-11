const SHOP_TABS = [
  { id: 'orders', label: 'Заказы' },
  { id: 'products', label: 'Товары' },
  { id: 'stock', label: 'Склад' },
  { id: 'categories', label: 'Категории' },
  { id: 'settings', label: 'Настройки' },
];

const SHOP_ORDER_STATUS_LABELS = {
  new: 'Новый',
  processing: 'В обработке',
  ready: 'Готов к выдаче',
  issued: 'Выдан',
  cancelled: 'Отменён',
};

const SHOP_ORDER_STATUS_TONES = {
  new: 'bg-blue-500/15 text-blue-300',
  processing: 'bg-yellow-500/15 text-yellow-300',
  ready: 'bg-emerald-500/15 text-emerald-300',
  issued: 'bg-[color:var(--crm-primary-container)] text-[color:var(--crm-primary)]',
  cancelled: 'bg-rose-500/15 text-rose-300',
};

const ShopView = ({
  apiRequest,
  role,
  currentBarber,
  onRequestConfirm,
  barbers = [],
  uploadAvatar,
}) => {
  const isOwner = role === ROLE_OWNER;
  const [activeTab, setActiveTab] = useState('orders');
  const { trackRef, setItemRef, indicatorStyle } = useMovingNavIndicator(activeTab);
  const [dragOverId, setDragOverId] = useState(null);

  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [orderStatusFilter, setOrderStatusFilter] = useState('');

  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productDraft, setProductDraft] = useState(null);
  const [productSaving, setProductSaving] = useState(false);
  const [productImageUploading, setProductImageUploading] = useState(false);
  const productImageInputRef = useRef(null);

  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoryDraft, setCategoryDraft] = useState(null);

  const [stockProducts, setStockProducts] = useState([]);
  const [stockLoading, setStockLoading] = useState(false);
  const [stockAudit, setStockAudit] = useState([]);
  const [stockAuditLoading, setStockAuditLoading] = useState(false);
  const [stockAdjustDraft, setStockAdjustDraft] = useState(null);

  const [settings, setSettings] = useState(null);
  const [settingsLoading, setSettingsLoading] = useState(false);
  const [settingsSaving, setSettingsSaving] = useState(false);

  const [scanQrValue, setScanQrValue] = useState('');
  const [scanResult, setScanResult] = useState(null);
  const [scanError, setScanError] = useState('');
  const [scannerActive, setScannerActive] = useState(false);
  const scannerStreamRef = useRef(null);
  const scannerSessionRef = useRef(0);

  const [selectedOrder, setSelectedOrder] = useState(null);

  // ── Data loading ──

  const loadOrders = useCallback(async () => {
    setOrdersLoading(true);
    try {
      const params = new URLSearchParams();
      if (orderStatusFilter) params.set('status', orderStatusFilter);
      const result = await apiRequest(`/shop/panel/orders?${params.toString()}`);
      if (result?.success) setOrders(result.orders || []);
    } catch (e) {
      console.error('Failed to load shop orders:', e);
    } finally {
      setOrdersLoading(false);
    }
  }, [apiRequest, orderStatusFilter]);

  const loadProducts = useCallback(async () => {
    setProductsLoading(true);
    try {
      const result = await apiRequest('/shop/panel/products');
      if (result?.success) setProducts(result.products || []);
    } catch (e) {
      console.error('Failed to load shop products:', e);
    } finally {
      setProductsLoading(false);
    }
  }, [apiRequest]);

  const loadCategories = useCallback(async () => {
    setCategoriesLoading(true);
    try {
      const result = await apiRequest('/shop/panel/categories');
      if (result?.success) setCategories(result.categories || []);
    } catch (e) {
      console.error('Failed to load shop categories:', e);
    } finally {
      setCategoriesLoading(false);
    }
  }, [apiRequest]);

  const loadStock = useCallback(async () => {
    setStockLoading(true);
    try {
      const result = await apiRequest('/shop/panel/stock');
      if (result?.success) setStockProducts(result.products || []);
    } catch (e) {
      console.error('Failed to load stock:', e);
    } finally {
      setStockLoading(false);
    }
  }, [apiRequest]);

  const loadStockAudit = useCallback(async () => {
    setStockAuditLoading(true);
    try {
      const result = await apiRequest('/shop/panel/stock/audit');
      if (result?.success) setStockAudit(result.audit || []);
    } catch (e) {
      console.error('Failed to load stock audit:', e);
    } finally {
      setStockAuditLoading(false);
    }
  }, [apiRequest]);

  const loadSettings = useCallback(async () => {
    setSettingsLoading(true);
    try {
      const result = await apiRequest('/shop/panel/settings');
      if (result?.success) setSettings(result.settings || {});
    } catch (e) {
      console.error('Failed to load shop settings:', e);
    } finally {
      setSettingsLoading(false);
    }
  }, [apiRequest]);

  useEffect(() => {
    if (activeTab === 'orders') loadOrders();
    if (activeTab === 'products') loadProducts();
    if (activeTab === 'stock') { loadStock(); loadStockAudit(); }
    if (activeTab === 'categories') loadCategories();
    if (activeTab === 'settings' && isOwner) loadSettings();
  }, [activeTab]);

  const handleDragStart = (e, productId) => {
    e.dataTransfer.setData('text/plain', productId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, productId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverId(productId);
  };

  const handleDragLeave = () => {
    setDragOverId(null);
  };

  const handleDrop = async (e, targetId) => {
    e.preventDefault();
    setDragOverId(null);
    const sourceId = e.dataTransfer.getData('text/plain');
    if (!sourceId || sourceId === targetId) return;
    const currentIds = products.map((p) => p.id);
    const sourceIdx = currentIds.indexOf(sourceId);
    const targetIdx = currentIds.indexOf(targetId);
    if (sourceIdx < 0 || targetIdx < 0) return;
    const newIds = [...currentIds];
    newIds.splice(sourceIdx, 1);
    newIds.splice(targetIdx, 0, sourceId);
    setProducts(newIds.map((id) => products.find((p) => p.id === id)).filter(Boolean));
    try {
      await apiRequest('/shop/panel/products/reorder', {
        method: 'POST',
        body: JSON.stringify({ orderedIds: newIds }),
      });
    } catch (err) {
      console.error('Reorder failed:', err);
      loadProducts();
    }
  };

  // ── Order actions ──

  const handleOrderStatus = async (orderId, status) => {
    try {
      await apiRequest(`/shop/panel/orders/${orderId}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
      loadOrders();
      setSelectedOrder(null);
    } catch (e) {
      console.error('Failed to update order status:', e);
    }
  };

  const handleOrderIssue = async (orderId) => {
    try {
      await apiRequest(`/shop/panel/orders/${orderId}/issue`, { method: 'POST' });
      loadOrders();
      setSelectedOrder(null);
    } catch (e) {
      console.error('Failed to issue order:', e);
    }
  };

  const handleOrderCancel = async (orderId) => {
    if (!onRequestConfirm) return;
    const confirmed = await onRequestConfirm({
      title: 'Отменить заказ?',
      message: 'Товары будут возвращены на склад.',
      confirmLabel: 'Отменить заказ',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest(`/shop/panel/orders/${orderId}/cancel`, { method: 'POST' });
      loadOrders();
      setSelectedOrder(null);
    } catch (e) {
      console.error('Failed to cancel order:', e);
    }
  };

  // ── QR Scanner ──

  const stopScanner = () => {
    scannerSessionRef.current += 1;
    if (scannerStreamRef.current) {
      scannerStreamRef.current.getTracks().forEach((t) => t.stop());
      scannerStreamRef.current = null;
    }
    setScannerActive(false);
  };

  const startScanner = async () => {
    setScanResult(null);
    setScanError('');
    setScannerActive(true);
    const session = scannerSessionRef.current + 1;
    scannerSessionRef.current = session;

    if (!('BarcodeDetector' in window)) {
      setScanError('QR-сканер не поддерживается в этом браузере. Введите код вручную.');
      setScannerActive(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      if (scannerSessionRef.current !== session) { stream.getTracks().forEach((t) => t.stop()); return; }
      scannerStreamRef.current = stream;
      const video = document.getElementById('shop-scanner-video');
      if (!video) { stream.getTracks().forEach((t) => t.stop()); return; }
      video.srcObject = stream;
      await video.play().catch(() => {});
      const detector = new BarcodeDetector({ formats: ['qr_code'] });
      const scanLoop = async () => {
        if (scannerSessionRef.current !== session) return;
        try {
          const detected = await detector.detect(video);
          if (detected.length > 0) {
            const code = detected[0].rawValue;
            stopScanner();
            setScanQrValue(code);
            handleQrLookup(code);
            return;
          }
        } catch {}
        requestAnimationFrame(scanLoop);
      };
      requestAnimationFrame(scanLoop);
    } catch (e) {
      setScanError('Не удалось открыть камеру. Введите QR-код вручную.');
      setScannerActive(false);
    }
  };

  const handleQrLookup = async (qrCode) => {
    setScanError('');
    setScanResult(null);
    try {
      const result = await apiRequest(`/shop/orders/${qrCode}`);
      if (result?.success && result.order) {
        setScanResult(result.order);
      } else {
        setScanError('Заказ не найден.');
      }
    } catch (e) {
      setScanError('Заказ не найден.');
    }
  };

  // ── Product CRUD ──

  const handleProductImageUpload = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file || !productDraft) return;
    if (!file.type.startsWith('image/')) {
      alert('Файл должен быть изображением.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Файл больше 5 МБ.');
      return;
    }
    setProductImageUploading(true);
    try {
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      const result = await uploadAvatar({ name: file.name, data: dataUrl });
      if (result?.success && result?.path) {
        setProductDraft({ ...productDraft, imageUrl: result.path });
      }
    } catch (e) {
      console.error('Failed to upload product image:', e);
      alert('Не удалось загрузить изображение.');
    } finally {
      setProductImageUploading(false);
    }
  };

  const handleSaveProduct = async () => {
    if (!productDraft) return;
    setProductSaving(true);
    try {
      if (productDraft.id) {
        await apiRequest(`/shop/panel/products/${productDraft.id}`, {
          method: 'PUT',
          body: JSON.stringify(productDraft),
        });
      } else {
        await apiRequest('/shop/panel/products', {
          method: 'POST',
          body: JSON.stringify(productDraft),
        });
      }
      setProductDraft(null);
      loadProducts();
    } catch (e) {
      console.error('Failed to save product:', e);
    } finally {
      setProductSaving(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!onRequestConfirm) return;
    const confirmed = await onRequestConfirm({
      title: 'Удалить товар?',
      message: 'Действие необратимо.',
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest(`/shop/panel/products/${id}`, { method: 'DELETE' });
      loadProducts();
    } catch (e) {
      console.error('Failed to delete product:', e);
    }
  };

  // ── Category CRUD ──

  const handleToggleCategoryActive = async (id, isActive) => {
    try {
      await apiRequest(`/shop/panel/categories/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ isActive }),
      });
      loadCategories();
    } catch (e) {
      console.error('Failed to toggle category:', e);
    }
  };

  const handleSaveCategory = async () => {
    if (!categoryDraft) return;
    try {
      if (categoryDraft.id) {
        await apiRequest(`/shop/panel/categories/${categoryDraft.id}`, {
          method: 'PUT',
          body: JSON.stringify(categoryDraft),
        });
      } else {
        await apiRequest('/shop/panel/categories', {
          method: 'POST',
          body: JSON.stringify(categoryDraft),
        });
      }
      setCategoryDraft(null);
      loadCategories();
    } catch (e) {
      console.error('Failed to save category:', e);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!onRequestConfirm) return;
    const confirmed = await onRequestConfirm({
      title: 'Удалить категорию?',
      message: 'Товары будут отвязаны от категории.',
      confirmLabel: 'Удалить',
      tone: 'danger',
    });
    if (!confirmed) return;
    try {
      await apiRequest(`/shop/panel/categories/${id}`, { method: 'DELETE' });
      loadCategories();
    } catch (e) {
      console.error('Failed to delete category:', e);
    }
  };

  // ── Stock adjust ──

  const handleStockAdjust = async () => {
    if (!stockAdjustDraft) return;
    try {
      await apiRequest('/shop/panel/stock', {
        method: 'POST',
        body: JSON.stringify(stockAdjustDraft),
      });
      setStockAdjustDraft(null);
      loadStock();
      loadStockAudit();
    } catch (e) {
      console.error('Failed to adjust stock:', e);
    }
  };

  // ── Settings ──

  const handleSaveSettings = async () => {
    if (!settings) return;
    setSettingsSaving(true);
    try {
      await apiRequest('/shop/panel/settings', {
        method: 'PATCH',
        body: JSON.stringify(settings),
      });
    } catch (e) {
      console.error('Failed to save settings:', e);
    } finally {
      setSettingsSaving(false);
    }
  };

  const toggleRestrictedIssuer = (barberId) => {
    const restricted = Array.isArray(settings?.restrictedIssuers) ? [...settings.restrictedIssuers] : [];
    const idx = restricted.indexOf(barberId);
    if (idx >= 0) restricted.splice(idx, 1);
    else restricted.push(barberId);
    setSettings({ ...settings, restrictedIssuers: restricted });
  };

  // ── Cleanup scanner on unmount ──
  useEffect(() => () => stopScanner(), []);

  // ── Render tabs ──

  const renderOrdersTab = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <label className="text-sm text-[var(--crm-muted)]">Статус:</label>
        <select
          value={orderStatusFilter}
          onChange={(e) => setOrderStatusFilter(e.target.value)}
          className="rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2 text-sm text-white"
        >
          <option value="">Все</option>
          {Object.entries(SHOP_ORDER_STATUS_LABELS).map(([id, label]) => (
            <option key={id} value={id}>{label}</option>
          ))}
        </select>
      </div>

      {/* QR Scanner */}
      <SectionCard title="Сканировать QR клиента">
        <div className="space-y-3">
          {scannerActive && (
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-xl bg-black">
              <video id="shop-scanner-video" className="w-full" autoPlay playsInline muted />
              <button
                type="button"
                onClick={stopScanner}
                className="crm-ghost-btn absolute right-2 top-2 h-8 w-8 p-0 text-xs"
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>
          )}
          <div className="flex flex-col gap-2 sm:flex-row">
            {!scannerActive ? (
              <button type="button" onClick={startScanner} className="crm-tonal-btn px-4 py-2 text-sm font-semibold">
                Открыть камеру
              </button>
            ) : null}
            <input
              value={scanQrValue}
              onChange={(e) => setScanQrValue(e.target.value)}
              placeholder="Или введите QR-код вручную"
              className="flex-1 rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2 text-sm text-white placeholder:text-[var(--crm-muted)]"
            />
            <button
              type="button"
              onClick={() => handleQrLookup(scanQrValue)}
              disabled={!scanQrValue.trim()}
              className="crm-action-btn px-4 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Найти
            </button>
          </div>
          {scanError && <ErrorBanner message={scanError} />}
          {scanResult && (
            <div className="crm-inline-panel space-y-3 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Заказ #{(scanResult.id || '').slice(0, 8)}</p>
                  <p className="text-xs text-[var(--crm-muted)]">{scanResult.customerName || 'Без имени'} · {scanResult.customerPhone || ''}</p>
                </div>
                <span className={classNames('self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider', SHOP_ORDER_STATUS_TONES[scanResult.status] || '')}>
                  {SHOP_ORDER_STATUS_LABELS[scanResult.status] || scanResult.status}
                </span>
              </div>
              <div className="text-xs text-[var(--crm-text)]">
                {(scanResult.items || []).map((item, i) => (
                  <div key={i} className="flex justify-between py-1">
                    <span className="min-w-0 flex-1 truncate">{item.name} × {item.quantity}</span>
                    <span className="flex-shrink-0 pl-2">{formatCurrencyValue(item.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="mt-2 flex justify-between border-t border-white/10 pt-2 font-semibold">
                  <span>Итого</span>
                  <span>{formatCurrencyValue(scanResult.totalAmount)}</span>
                </div>
              </div>
              {scanResult.status !== 'issued' && (
                <button
                  type="button"
                  onClick={() => handleOrderIssue(scanResult.id)}
                  className="crm-action-btn w-full py-2.5 text-sm font-semibold"
                >
                  Выдать заказ
                </button>
              )}
              {scanResult.status === 'issued' && (
                <p className="text-xs text-center text-[var(--crm-muted)]">
                  Выдан: {scanResult.issuedByName || '—'} · {scanResult.issuedAt ? new Date(scanResult.issuedAt).toLocaleString('ru-RU') : ''}
                </p>
              )}
            </div>
          )}
        </div>
      </SectionCard>

      {/* Orders list */}
      {ordersLoading ? (
        <LoadingState />
      ) : (
        <div className="space-y-2">
          {orders.length === 0 && <p className="text-sm text-[var(--crm-muted)]">Заказов нет.</p>}
          {orders.map((order) => (
            <div
              key={order.id}
              className="crm-inline-panel cursor-pointer p-4 transition hover:bg-[color:var(--crm-surface-5)]"
              onClick={() => setSelectedOrder(selectedOrder?.id === order.id ? null : order)}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">
                    #{(order.id || '').slice(0, 8)} · {order.customerName || 'Без имени'}
                  </p>
                  <p className="text-xs text-[var(--crm-muted)]">
                    {order.customerPhone || '—'} · {new Date(order.createdAt).toLocaleString('ru-RU')}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-sm font-semibold text-white">{formatCurrencyValue(order.totalAmount)}</span>
                  <span className={classNames('rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider', SHOP_ORDER_STATUS_TONES[order.status] || '')}>
                    {SHOP_ORDER_STATUS_LABELS[order.status] || order.status}
                  </span>
                </div>
              </div>
              {selectedOrder?.id === order.id && (
                <div className="mt-3 space-y-2 border-t border-white/5 pt-3">
                  <div className="text-xs text-[var(--crm-text)]">
                    {(order.items || []).map((item, i) => (
                      <div key={i} className="flex justify-between py-0.5">
                        <span>{item.name} × {item.quantity}</span>
                        <span>{formatCurrencyValue(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  {order.comment && <p className="text-xs text-[var(--crm-muted)]">Комментарий: {order.comment}</p>}
                  {order.issuedByName && (
                    <p className="text-xs text-[var(--crm-muted)]">
                      Выдал: {order.issuedByName} · {order.issuedAt ? new Date(order.issuedAt).toLocaleString('ru-RU') : ''}
                    </p>
                  )}
                  {isOwner && order.status !== 'issued' && order.status !== 'cancelled' && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {order.status === 'new' && (
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); handleOrderStatus(order.id, 'processing'); }}
                          className="crm-ghost-btn px-3 py-1.5 text-xs"
                        >
                          В обработку
                        </button>
                      )}
                      {(order.status === 'new' || order.status === 'processing') && (
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); handleOrderStatus(order.id, 'ready'); }}
                          className="crm-ghost-btn px-3 py-1.5 text-xs"
                        >
                          Готов к выдаче
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleOrderIssue(order.id); }}
                        className="crm-action-btn px-3 py-1.5 text-xs"
                      >
                        Выдать
                      </button>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleOrderCancel(order.id); }}
                        className="crm-danger-btn px-3 py-1.5 text-xs"
                      >
                        Отменить
                      </button>
                    </div>
                  )}
                  {!isOwner && order.status !== 'issued' && order.status !== 'cancelled' && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleOrderIssue(order.id); }}
                        className="crm-action-btn px-3 py-1.5 text-xs"
                      >
                        Выдать
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderProductsTab = () => (
    <div className="space-y-4">
      {isOwner && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setProductDraft({ name: '', description: '', price: 0, imageUrl: '', categoryId: '', stock: 0 })}
            className="crm-action-btn px-4 py-2 text-sm font-semibold"
          >
            <IconPlus className="mr-1 inline h-4 w-4" />
            Добавить товар
          </button>
        </div>
      )}

      {productsLoading ? (
        <LoadingState />
      ) : (
        <div className="space-y-2">
          {products.length === 0 && <p className="text-sm text-[var(--crm-muted)]">Товаров нет.</p>}
          {products.map((product) => {
            const isDragOver = dragOverId === product.id;
            return (
              <div
                key={product.id}
                draggable={isOwner}
                onDragStart={(e) => handleDragStart(e, product.id)}
                onDragOver={(e) => handleDragOver(e, product.id)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, product.id)}
                className={classNames(
                  'crm-inline-panel flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 transition-all',
                  isOwner && 'cursor-grab active:cursor-grabbing',
                  isDragOver && 'ring-2 ring-[color:var(--crm-primary)] ring-offset-2 ring-offset-[color:var(--crm-surface)]'
                )}
              >
                {isOwner && (
                  <div className="hidden sm:flex items-center text-[var(--crm-muted)]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg>
                  </div>
                )}
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="h-12 w-12 flex-shrink-0 rounded-xl object-cover sm:h-14 sm:w-14" />
                  ) : (
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--crm-surface-4)] text-[var(--crm-muted)] sm:h-14 sm:w-14">
                      <IconDots className="h-5 w-5" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{product.name}</p>
                    <p className="text-xs text-[var(--crm-muted)]">{product.category?.name || 'Без категории'} · Остаток: {product.stock}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 sm:justify-end">
                  <span className="text-sm font-semibold text-white">{formatCurrencyValue(product.price)}</span>
                  {isOwner && (
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setProductDraft(product)} className="crm-ghost-btn h-8 w-8 p-0 flex items-center justify-center" style={{ borderRadius: '50%' }}>
                        <IconEdit className="h-4 w-4" />
                      </button>
                      <button type="button" onClick={() => handleDeleteProduct(product.id)} className="crm-ghost-btn h-8 w-8 p-0 flex items-center justify-center text-rose-400" style={{ borderRadius: '50%' }}>
                        <IconTrash className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Modal
        isOpen={!!productDraft}
        title={productDraft?.id ? 'Редактировать товар' : 'Новый товар'}
        onClose={() => setProductDraft(null)}
        footer={
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setProductDraft(null)} className="crm-ghost-btn px-4 py-2 text-sm">Отмена</button>
            <button
              type="button"
              onClick={handleSaveProduct}
              disabled={productSaving || !productDraft?.name?.trim()}
              className="crm-action-btn px-4 py-2 text-sm font-semibold disabled:opacity-40"
            >
              {productSaving ? 'Сохранение...' : 'Сохранить'}
            </button>
          </div>
        }
      >
        {productDraft && (
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1 text-sm">
              <span className="text-[var(--crm-text)]">Название *</span>
              <input
                value={productDraft.name}
                onChange={(e) => setProductDraft({ ...productDraft, name: e.target.value })}
                className="w-full rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2.5 text-sm text-white"
              />
            </label>
            <label className="space-y-1 text-sm">
              <span className="text-[var(--crm-text)]">Цена (₽)</span>
              <input
                type="number"
                value={productDraft.price}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setProductDraft({ ...productDraft, price: Number(e.target.value) })}
                className="w-full rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2.5 text-sm text-white"
              />
            </label>
            <label className="space-y-1 text-sm sm:col-span-2">
              <span className="text-[var(--crm-text)]">Описание</span>
              <textarea
                value={productDraft.description}
                onChange={(e) => setProductDraft({ ...productDraft, description: e.target.value })}
                rows={2}
                className="w-full rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2.5 text-sm text-white"
              />
            </label>
            <label className="space-y-1 text-sm sm:col-span-2">
              <span className="text-[var(--crm-text)]">Фото товара</span>
              <div className="flex items-center gap-3">
                {productDraft.imageUrl ? (
                  <img src={productDraft.imageUrl} alt="Фото товара" className="h-16 w-16 rounded-xl object-cover" />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[color:var(--crm-surface-4)] text-[var(--crm-muted)]">
                    <IconDots className="h-5 w-5" />
                  </div>
                )}
                <div className="flex-1">
                  <input
                    ref={productImageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleProductImageUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => productImageInputRef.current?.click()}
                    disabled={productImageUploading}
                    className="crm-ghost-btn px-4 py-2 text-sm"
                  >
                    {productImageUploading ? 'Загрузка...' : productDraft.imageUrl ? 'Заменить фото' : 'Загрузить фото'}
                  </button>
                  {productDraft.imageUrl && (
                    <button
                      type="button"
                      onClick={() => setProductDraft({ ...productDraft, imageUrl: '' })}
                      className="crm-ghost-btn ml-2 px-3 py-2 text-xs text-rose-400"
                    >
                      Удалить
                    </button>
                  )}
                </div>
              </div>
            </label>
            <label className="space-y-1 text-sm">
              <span className="text-[var(--crm-text)]">Категория</span>
              <select
                value={productDraft.categoryId || ''}
                onChange={(e) => setProductDraft({ ...productDraft, categoryId: e.target.value || null })}
                className="w-full rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2.5 text-sm text-white"
              >
                <option value="">Без категории</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </label>
            <label className="space-y-1 text-sm">
              <span className="text-[var(--crm-text)]">Остаток</span>
              <input
                type="number"
                value={productDraft.stock}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setProductDraft({ ...productDraft, stock: Math.max(0, Number(e.target.value)) })}
                className="w-full rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2.5 text-sm text-white"
              />
            </label>
          </div>
        )}
      </Modal>
    </div>
  );

  const renderStockTab = () => (
    <div className="space-y-4">
      {isOwner && (
        <SectionCard title="Изменить остаток">
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
            <label className="space-y-1 text-sm sm:col-span-2">
              <span className="text-[var(--crm-text)]">Товар</span>
              <select
                value={stockAdjustDraft?.productId || ''}
                onChange={(e) => setStockAdjustDraft({ ...stockAdjustDraft, productId: e.target.value })}
                className="w-full rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2.5 text-sm text-white"
              >
                <option value="">Выберите товар</option>
                {stockProducts.map((p) => (
                  <option key={p.id} value={p.id}>{p.name} (остаток: {p.stock})</option>
                ))}
              </select>
            </label>
            <label className="space-y-1 text-sm">
              <span className="text-[var(--crm-text)]">Изменение (+ приход, - списание)</span>
              <input
                type="number"
                value={stockAdjustDraft?.delta || ''}
                onChange={(e) => setStockAdjustDraft({ ...stockAdjustDraft, delta: Number(e.target.value) })}
                className="w-full rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2.5 text-sm text-white"
              />
            </label>
            <label className="space-y-1 text-sm sm:col-span-3">
              <span className="text-[var(--crm-text)]">Причина</span>
              <input
                value={stockAdjustDraft?.reason || ''}
                onChange={(e) => setStockAdjustDraft({ ...stockAdjustDraft, reason: e.target.value })}
                placeholder="Поступление, ревизия, порча..."
                className="w-full rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2.5 text-sm text-white"
              />
            </label>
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={handleStockAdjust}
              disabled={!stockAdjustDraft?.productId || !stockAdjustDraft?.delta}
              className="crm-action-btn px-4 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Применить
            </button>
          </div>
        </SectionCard>
      )}

      <SectionCard title="Остатки на складе">
        {stockLoading ? <LoadingState /> : (
          <div className="space-y-1">
            {stockProducts.length === 0 && <p className="text-sm text-[var(--crm-muted)]">Товаров нет.</p>}
            {stockProducts.map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm hover:bg-[color:var(--crm-surface-5)]">
                <span className="text-white">{p.name}</span>
                <span className={classNames('font-semibold', p.stock <= 0 ? 'text-rose-400' : 'text-white')}>{p.stock} шт.</span>
              </div>
            ))}
          </div>
        )}
      </SectionCard>

      <SectionCard title="Ведомость ревизии">
        {stockAuditLoading ? <LoadingState /> : (
          <div className="space-y-1">
            {stockAudit.length === 0 && <p className="text-sm text-[var(--crm-muted)]">Записей нет.</p>}
            {stockAudit.map((entry) => (
              <div key={entry.id} className="rounded-xl px-4 py-2 text-xs hover:bg-[color:var(--crm-surface-5)]">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <span className="font-semibold text-white">{entry.productName}</span>
                    {entry.reason && <span className="ml-2 text-[var(--crm-muted)]">· {entry.reason}</span>}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 sm:gap-3">
                    <span className={classNames('font-semibold', entry.delta > 0 ? 'text-emerald-400' : 'text-rose-400')}>
                      {entry.delta > 0 ? '+' : ''}{entry.delta}
                    </span>
                    <span className="text-[var(--crm-muted)]">{entry.editorName || 'Система'}</span>
                    <span className="text-[var(--crm-muted)]">{new Date(entry.createdAt).toLocaleString('ru-RU')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionCard>
    </div>
  );

  const renderCategoriesTab = () => (
    <div className="space-y-4">
      {isOwner && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setCategoryDraft({ name: '' })}
            className="crm-action-btn px-4 py-2 text-sm font-semibold"
          >
            <IconPlus className="mr-1 inline h-4 w-4" />
            Добавить категорию
          </button>
        </div>
      )}

      {categoryDraft && (
        <SectionCard title={categoryDraft.id ? 'Редактировать категорию' : 'Новая категория'}>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              value={categoryDraft.name}
              onChange={(e) => setCategoryDraft({ ...categoryDraft, name: e.target.value })}
              placeholder="Название категории"
              className="flex-1 rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2.5 text-sm text-white"
            />
            <div className="flex gap-2">
              <button type="button" onClick={() => setCategoryDraft(null)} className="crm-ghost-btn flex-1 px-4 py-2 text-sm sm:flex-none">Отмена</button>
              <button
                type="button"
                onClick={handleSaveCategory}
                disabled={!categoryDraft.name.trim()}
                className="crm-action-btn flex-1 px-4 py-2 text-sm font-semibold disabled:opacity-40 sm:flex-none"
              >
                Сохранить
              </button>
            </div>
          </div>
        </SectionCard>
      )}

      {categoriesLoading ? (
        <LoadingState />
      ) : (
        <div className="space-y-2">
          {categories.length === 0 && <p className="text-sm text-[var(--crm-muted)]">Категорий нет.</p>}
          {categories.map((cat) => (
            <div key={cat.id} className="crm-inline-panel flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{cat.name}</p>
                <p className="text-xs text-[var(--crm-muted)]">{cat.isActive ? 'Активна' : 'Скрыта'}</p>
              </div>
              {isOwner && (
                <div className="flex gap-1 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => handleToggleCategoryActive(cat.id, !cat.isActive)}
                    className="crm-ghost-btn flex-1 h-8 px-3 text-xs sm:flex-none"
                  >
                    {cat.isActive ? 'Скрыть' : 'Показать'}
                  </button>
                  <button type="button" onClick={() => setCategoryDraft(cat)} className="crm-ghost-btn h-8 w-8 p-0">
                    <IconEdit className="h-4 w-4" />
                  </button>
                  <button type="button" onClick={() => handleDeleteCategory(cat.id)} className="crm-ghost-btn h-8 w-8 p-0 text-rose-400">
                    <IconTrash className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderSettingsTab = () => {
    if (!isOwner) {
      return <SectionCard title="Настройки"><p className="text-sm text-[var(--crm-muted)]">Настройки доступны только владельцу.</p></SectionCard>;
    }
    if (settingsLoading) return <LoadingState />;
    return (
      <div className="space-y-4">
        <SectionCard title="Категории">
          <label className="flex items-center gap-3 text-sm text-[var(--crm-text)]">
            <input
              type="checkbox"
              checked={settings?.categoriesEnabled || false}
              onChange={(e) => setSettings({ ...settings, categoriesEnabled: e.target.checked })}
              className="h-4 w-4 rounded"
            />
            Включить категории в каталоге
          </label>
        </SectionCard>

        <SectionCard title="Ограничение выдачи">
          <p className="text-xs text-[var(--crm-muted)] mb-3">Выберите сотрудников, которым запрещено выдавать заказы:</p>
          <div className="space-y-2">
            {barbers.filter((b) => b.role === ROLE_STAFF).map((b) => (
              <label key={b.id} className="flex items-center gap-3 text-sm text-[var(--crm-text)]">
                <input
                  type="checkbox"
                  checked={Array.isArray(settings?.restrictedIssuers) && settings.restrictedIssuers.includes(b.id)}
                  onChange={() => toggleRestrictedIssuer(b.id)}
                  className="h-4 w-4 rounded"
                />
                {b.name}
              </label>
            ))}
            {barbers.filter((b) => b.role === ROLE_STAFF).length === 0 && (
              <p className="text-xs text-[var(--crm-muted)]">Нет сотрудников для настройки.</p>
            )}
          </div>
        </SectionCard>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSaveSettings}
            disabled={settingsSaving}
            className="crm-action-btn px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
          >
            {settingsSaving ? 'Сохранение...' : 'Сохранить настройки'}
          </button>
        </div>
      </div>
    );
  };

  const tabContent = {
    orders: renderOrdersTab,
    products: renderProductsTab,
    stock: renderStockTab,
    categories: renderCategoriesTab,
    settings: renderSettingsTab,
  };

  return (
    <div className="space-y-4">
      <div className="crm-inline-panel flex gap-2 overflow-x-auto p-2" ref={trackRef}>
        <div aria-hidden="true" className="crm-nav-indicator" style={indicatorStyle} />
        {SHOP_TABS.map((tab) => {
          if (tab.id === 'settings' && !isOwner) return null;
          return (
            <button
              key={tab.id}
              type="button"
              ref={setItemRef(tab.id)}
              onClick={() => setActiveTab(tab.id)}
              className={classNames(
                'crm-subnav-pill crm-nav-item flex-shrink-0 px-4 py-2 text-sm font-semibold',
                activeTab === tab.id && 'crm-subnav-pill-active'
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabContent[activeTab] ? tabContent[activeTab]() : null}
    </div>
  );
};
