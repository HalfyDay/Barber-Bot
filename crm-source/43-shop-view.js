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
  liveShopOrders = null,
  liveUpdatedAt = null,
  liveStatus = 'unknown',
  clients = [],
  addToast = null,
}) => {
  const isOwner = role === ROLE_OWNER;

  // ── Client avatar lookup (same pattern as dashboard) ──
  const clientAvatarLookup = useMemo(() => {
    const lookup = new Map();
    (Array.isArray(clients) ? clients : []).forEach((client) => {
      const avatarUrl = client?.avatarUrl || client?.AvatarURL || '';
      if (!avatarUrl) return;
      [client?.id, client?.telegramId, client?.TelegramID,
       client?.phone, client?.Phone, client?.name, client?.Name]
        .map((v) => normalizeText(v).toLowerCase())
        .filter(Boolean)
        .forEach((key) => { if (!lookup.has(key)) lookup.set(key, avatarUrl); });
    });
    return lookup;
  }, [clients]);

  const getOrderAvatarSrc = useCallback((order) => {
    return clientAvatarLookup.get(normalizeText(order?.userId).toLowerCase()) ||
           clientAvatarLookup.get(normalizeText(order?.customerPhone).toLowerCase()) ||
           clientAvatarLookup.get(normalizeText(order?.customerName).toLowerCase()) ||
           '';
  }, [clientAvatarLookup]);
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
  const [stockAdjustMode, setStockAdjustMode] = useState('increase');

  const [settings, setSettings] = useState(null);
  const [settingsLoading, setSettingsLoading] = useState(false);
  const [settingsSaving, setSettingsSaving] = useState(false);

  const [scanQrValue, setScanQrValue] = useState('');
  const [scanResult, setScanResult] = useState(null);
  const [scanResults, setScanResults] = useState([]);
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
  }, [activeTab, loadOrders]);

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
    const query = (qrCode || '').replace(/^#/, '').trim();
    setScanError('');
    setScanResult(null);
    setScanResults([]);
    if (!query) return;
    try {
      const result = await apiRequest(`/shop/orders/search?q=${encodeURIComponent(query)}`);
      if (result?.success && result.orders?.length) {
        if (result.orders.length === 1) {
          setScanResult(result.orders[0]);
        } else {
          setScanResults(result.orders);
        }
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
      const message = e?.message || 'Не удалось удалить товар';
      if (typeof addToast === 'function') {
        addToast(message, 'error');
      } else {
        console.error('Failed to delete product:', e);
      }
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
    if (!stockAdjustDraft?.productId || !stockAdjustDraft?.delta) return;
    const quantity = Math.abs(Number(stockAdjustDraft.delta) || 0);
    if (!quantity) return;
    let computedDelta;
    if (stockAdjustMode === 'increase') {
      computedDelta = quantity;
    } else if (stockAdjustMode === 'decrease') {
      computedDelta = -quantity;
    } else {
      // 'set' — compute delta from current stock
      const product = stockProducts.find((p) => p.id === stockAdjustDraft.productId);
      const currentStock = product?.stock || 0;
      computedDelta = quantity - currentStock;
    }
    try {
      await apiRequest('/shop/panel/stock', {
        method: 'POST',
        body: JSON.stringify({ productId: stockAdjustDraft.productId, delta: computedDelta, reason: stockAdjustDraft.reason || '' }),
      });
      setStockAdjustDraft(null);
      setStockAdjustMode('increase');
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

  const buildOrderGroups = (orderList = [], sortDirection = 'desc') => {
    const buckets = new Map();
    orderList.forEach((order) => {
      const key = new Date(order.createdAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
      const bucket = buckets.get(key) || [];
      bucket.push(order);
      buckets.set(key, bucket);
    });
    return Array.from(buckets.entries()).map(([key, items]) => ({
      key,
      label: key,
      rows: items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      sortValue: new Date(items[0].createdAt).getTime(),
    })).sort((a, b) => (sortDirection === 'asc' ? a.sortValue - b.sortValue : b.sortValue - a.sortValue));
  };

  const renderOrdersTab = () => {
    const orderStatusOptions = [
      { value: '', label: 'Все' },
      ...Object.entries(SHOP_ORDER_STATUS_LABELS).map(([id, label]) => ({ value: id, label })),
    ];
    const rawOrders = (Array.isArray(liveShopOrders) && liveShopOrders.length > 0) ? liveShopOrders : orders;
    const searchQuery = scanQrValue.replace(/^#/, '').trim().toLowerCase();
    let displayOrders = rawOrders;
    if (orderStatusFilter) {
      displayOrders = displayOrders.filter((o) => o.status === orderStatusFilter);
    }
    if (searchQuery.length >= 3) {
      displayOrders = displayOrders.filter((o) => {
        const id = (o.id || '').toLowerCase();
        const name = (o.customerName || '').toLowerCase();
        const phone = (o.customerPhone || '').toLowerCase();
        return id.includes(searchQuery) || name.includes(searchQuery) || phone.includes(searchQuery);
      });
    }
    const grouped = buildOrderGroups(displayOrders);

    return (
      <div className="space-y-4">
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
            <div className="flex items-center gap-2">
              {!scannerActive ? (
                <button type="button" onClick={startScanner} className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--crm-surface-4)] transition-colors hover:bg-[color:var(--crm-surface-5)]" title="Открыть камеру">
                  <svg className="h-5 w-5 text-[var(--crm-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </button>
              ) : null}
              <input
                value={scanQrValue}
                onChange={(e) => {
                  setScanQrValue(e.target.value);
                  setScanResult(null);
                  setScanResults([]);
                  setScanError('');
                }}
                placeholder="Поиск по коду, имени или телефону"
                className="flex-1 rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-2.5 text-sm text-white placeholder:text-[var(--crm-muted)]"
              />
            </div>
            {scanError && <ErrorBanner message={scanError} />}
          </div>
        </SectionCard>

        {/* Orders filter panel */}
        <div className="flex items-center justify-between rounded-2xl px-4 py-2.5" style={{ background: 'var(--crm-surface-2)' }}>
          <div className="flex items-center gap-2.5">
            <svg className="h-4 w-4 text-[var(--crm-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="text-sm text-[var(--crm-muted)]">{displayOrders.length} заказ{displayOrders.length === 1 ? '' : displayOrders.length < 5 ? 'а' : 'ов'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[var(--crm-muted)]">Статус:</span>
            <div className="w-36">
              <CustomSelect
                value={orderStatusFilter}
                onChange={(val) => setOrderStatusFilter(val)}
                options={orderStatusOptions}
                placeholder="Все"
                portalMenu
              />
            </div>
          </div>
        </div>

        {/* Orders list grouped by date */}
        {ordersLoading && !liveShopOrders ? (
          <LoadingState />
        ) : (
          <div className="space-y-5">
            {grouped.length === 0 && <p className="text-sm text-[var(--crm-muted)]">Заказов нет.</p>}
            {grouped.map((group) => (
              <section key={group.key} className="space-y-3">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--crm-muted)]">
                  <span className="h-px flex-1 bg-[color:var(--crm-outline)]" />
                  {group.label}
                  <span className="h-px flex-1 bg-[color:var(--crm-outline)]" />
                </div>
                <div className="grid gap-3 lg:grid-cols-2">
                  {group.rows.map((order) => {
                    const orderTime = new Date(order.createdAt).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
                    const itemsSummary = (order.items || []).map((item) => item.name).join(', ');
                    return (
                      <div
                        key={order.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedOrder(order)}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedOrder(order)}
                        className="crm-soft-panel relative flex h-full cursor-pointer flex-col overflow-hidden p-3 text-left transition hover:-translate-y-0.5 hover:bg-[color:var(--crm-surface-5)] focus:outline-none sm:p-4"
                      >
                        <div className="flex items-start gap-3">
                          {(() => {
                            const avatarSrc = getOrderAvatarSrc(order);
                            return avatarSrc ? (
                              <img src={avatarSrc} alt={order.customerName || 'Клиент'} className="h-12 w-12 flex-shrink-0 rounded-full object-cover" />
                            ) : (
                              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--crm-surface-3)] text-[var(--crm-muted)]">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                  <circle cx="12" cy="7" r="4" />
                                </svg>
                              </div>
                            );
                          })()}
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-semibold text-white">{order.customerName || 'Без имени'}</p>
                            <p className="truncate text-xs text-[var(--crm-muted)]">{order.customerPhone || '—'}</p>
                            {order.id && <p className="text-xs font-mono text-[var(--crm-muted)] mt-0.5">{(order.id || '').slice(0, 8)}</p>}
                          </div>
                          <span className={classNames('inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide', SHOP_ORDER_STATUS_TONES[order.status] || '')}>
                            {SHOP_ORDER_STATUS_LABELS[order.status] || order.status}
                          </span>
                        </div>
                        <div className="mt-2.5 flex items-center justify-between text-xs text-[var(--crm-text)]">
                          <span className="text-[var(--crm-muted)]">{orderTime}{itemsSummary ? ` · ${itemsSummary}` : ''}</span>
                          <span className="font-semibold text-white">
                            {order.bsAmount > 0 ? (
                              <>{formatCurrencyValue(order.totalAmount - order.bsAmount)} <span className="text-[var(--crm-muted)] line-through">{formatCurrencyValue(order.totalAmount)}</span></>
                            ) : formatCurrencyValue(order.totalAmount)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Order Details Sheet */}
        <Modal
          isOpen={Boolean(selectedOrder)}
          onClose={() => setSelectedOrder(null)}
          title={selectedOrder ? `Заказ ${(selectedOrder.id || '').slice(0, 8)}` : ''}
        >
          {selectedOrder && (
            <div className="space-y-5 p-4">
              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {(() => {
                  const avatarSrc = getOrderAvatarSrc(selectedOrder);
                  return avatarSrc ? (
                    <img src={avatarSrc} alt={selectedOrder.customerName || 'Клиент'} className="h-16 w-16 flex-shrink-0 rounded-full object-cover" />
                  ) : (
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--crm-surface-3)] text-[var(--crm-muted)]">
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  );
                })()}
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-semibold text-white">{selectedOrder.customerName || 'Без имени'}</p>
                  {selectedOrder.customerPhone && (
                    <button
                      type="button"
                      onClick={() => {
                        if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                          window.location.href = `tel:${selectedOrder.customerPhone}`;
                        } else {
                          navigator.clipboard?.writeText(selectedOrder.customerPhone);
                          addToast?.('Номер скопирован', 'success');
                        }
                      }}
                      className="text-sm text-[var(--crm-primary)] hover:underline cursor-pointer"
                    >
                      {selectedOrder.customerPhone}
                    </button>
                  )}
                </div>
                <span className={classNames('rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider', SHOP_ORDER_STATUS_TONES[selectedOrder.status] || '')}>
                  {SHOP_ORDER_STATUS_LABELS[selectedOrder.status] || selectedOrder.status}
                </span>
              </div>

              {/* Order ID */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[var(--crm-muted)]">Заказ:</span>
                <button
                  type="button"
                  onClick={() => { navigator.clipboard?.writeText(selectedOrder.id || ''); addToast?.('Скопировано', 'success'); }}
                  className="font-mono text-[var(--crm-primary)] hover:underline cursor-pointer"
                >
                  {(selectedOrder.id || '').slice(0, 8)}
                </button>
              </div>

              {/* Order Items */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crm-muted)]">Товары</p>
                <div className="space-y-2">
                  {(selectedOrder.items || []).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl bg-[color:var(--crm-surface-3)] p-3">
                      {item.product?.imageUrl ? (
                        <img src={item.product.imageUrl} alt={item.name} className="h-12 w-12 flex-shrink-0 rounded-lg object-cover" />
                      ) : (
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--crm-surface-4)] text-[var(--crm-muted)]">
                          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-white truncate">{item.name}</p>
                        <p className="text-xs text-[var(--crm-muted)]">{item.quantity} × {formatCurrencyValue(item.price)}</p>
                      </div>
                      <span className="text-sm font-semibold text-white">{formatCurrencyValue(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 rounded-xl bg-[color:var(--crm-surface-3)] p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--crm-muted)]">Сумма</span>
                  <span className="text-white">{formatCurrencyValue(selectedOrder.totalAmount)}</span>
                </div>
                {selectedOrder.bsAmount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--crm-primary)]">Бонусы</span>
                    <span className="text-[var(--crm-primary)]">-{formatCurrencyValue(selectedOrder.bsAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-white/10 pt-2 text-base font-semibold">
                  <span className="text-white">Итого</span>
                  <span className="text-white">{formatCurrencyValue(selectedOrder.totalAmount - (selectedOrder.bsAmount || 0))}</span>
                </div>
              </div>

              {/* Comment */}
              {selectedOrder.comment && (
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crm-muted)]">Комментарий</p>
                  <p className="text-sm text-[var(--crm-text)]">{selectedOrder.comment}</p>
                </div>
              )}

              {/* Issued Info */}
              {selectedOrder.issuedByName && (
                <div className="text-xs text-[var(--crm-muted)]">
                  Выдал: {selectedOrder.issuedByName} · {selectedOrder.issuedAt ? new Date(selectedOrder.issuedAt).toLocaleString('ru-RU') : ''}
                </div>
              )}

              {/* Action Buttons */}
              {selectedOrder.status !== 'issued' && selectedOrder.status !== 'cancelled' && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {isOwner && selectedOrder.status === 'new' && (
                    <button
                      type="button"
                      onClick={() => { handleOrderStatus(selectedOrder.id, 'processing'); setSelectedOrder(null); }}
                      className="crm-ghost-btn flex-1 px-4 py-2.5 text-sm font-semibold"
                    >
                      В обработку
                    </button>
                  )}
                  {isOwner && (selectedOrder.status === 'new' || selectedOrder.status === 'processing') && (
                    <button
                      type="button"
                      onClick={() => { handleOrderStatus(selectedOrder.id, 'ready'); setSelectedOrder(null); }}
                      className="crm-ghost-btn flex-1 px-4 py-2.5 text-sm font-semibold"
                    >
                      Готов к выдаче
                    </button>
                  )}
                  {!isOwner && selectedOrder.status === 'new' && (
                    <button
                      type="button"
                      onClick={() => { handleOrderStatus(selectedOrder.id, 'processing'); setSelectedOrder(null); }}
                      className="crm-action-btn flex-1 px-4 py-2.5 text-sm font-semibold"
                    >
                      В обработку
                    </button>
                  )}
                  {!isOwner && (selectedOrder.status === 'new' || selectedOrder.status === 'processing') && (
                    <button
                      type="button"
                      onClick={() => { handleOrderStatus(selectedOrder.id, 'ready'); setSelectedOrder(null); }}
                      className="crm-action-btn flex-1 px-4 py-2.5 text-sm font-semibold"
                    >
                      Готов к выдаче
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => { handleOrderIssue(selectedOrder.id); setSelectedOrder(null); }}
                    className="crm-action-btn flex-1 px-4 py-2.5 text-sm font-semibold"
                  >
                    Выдать
                  </button>
                  <button
                    type="button"
                    onClick={() => { handleOrderCancel(selectedOrder.id); setSelectedOrder(null); }}
                    className="crm-danger-btn flex-1 px-4 py-2.5 text-sm font-semibold"
                  >
                    Отменить
                  </button>
                </div>
              )}
            </div>
          )}
        </Modal>
      </div>
    );
  };

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
                  'crm-soft-panel transition-all',
                  isOwner && 'cursor-grab active:cursor-grabbing',
                  isDragOver && 'ring-2 ring-[color:var(--crm-primary)] ring-offset-2 ring-offset-[color:var(--crm-surface)]',
                  'p-3 sm:p-4'
                )}
              >
                {/* Mobile: compact card */}
                <div className="flex items-center gap-3 sm:hidden">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="h-14 w-14 flex-shrink-0 rounded-xl object-cover" />
                  ) : (
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--crm-surface-4)] text-[var(--crm-muted)]">
                      <IconDots className="h-5 w-5" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{product.name}</p>
                    <p className="text-xs text-[var(--crm-muted)]">{product.category?.name || 'Без категории'}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">{formatCurrencyValue(product.price)}</span>
                      <span className={classNames('text-xs', product.stock <= 0 ? 'text-rose-400' : 'text-[var(--crm-muted)]')}>
                        · {product.stock} шт.
                      </span>
                    </div>
                  </div>
                  {isOwner && (
                    <div className="flex flex-row gap-2">
                      <button type="button" onClick={() => setProductDraft(product)} className="crm-ghost-btn h-9 w-9 p-0 flex items-center justify-center" style={{ borderRadius: '50%', minHeight: 0 }}>
                        <IconEdit className="h-4 w-4" />
                      </button>
                      <button type="button" onClick={() => handleDeleteProduct(product.id)} className="crm-ghost-btn h-9 w-9 p-0 flex items-center justify-center text-rose-400" style={{ borderRadius: '50%', minHeight: 0 }}>
                        <IconTrash className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Desktop: original row layout */}
                <div className="hidden sm:flex sm:items-center sm:gap-4">
                  {isOwner && (
                    <div className="flex items-center text-[var(--crm-muted)]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg>
                    </div>
                  )}
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {product.imageUrl ? (
                      <img src={product.imageUrl} alt={product.name} className="h-14 w-14 flex-shrink-0 rounded-xl object-cover" />
                    ) : (
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--crm-surface-4)] text-[var(--crm-muted)]">
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
                        <button type="button" onClick={() => setProductDraft(product)} className="crm-ghost-btn h-10 w-10 p-0 flex items-center justify-center" style={{ borderRadius: '50%', minHeight: 0 }}>
                          <IconEdit className="h-5 w-5" />
                        </button>
                        <button type="button" onClick={() => handleDeleteProduct(product.id)} className="crm-ghost-btn h-10 w-10 p-0 flex items-center justify-center text-rose-400" style={{ borderRadius: '50%', minHeight: 0 }}>
                          <IconTrash className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                  </div>
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
              <CustomSelect
                value={productDraft.categoryId || ''}
                onChange={(val) => setProductDraft({ ...productDraft, categoryId: val || null })}
                options={[{ value: '', label: 'Без категории' }, ...categories.map((cat) => ({ value: cat.id, label: cat.name }))]}
                placeholder="Категория"
                portalMenu
              />
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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1 min-w-0">
              <label className="space-y-1 text-sm">
                <span className="text-[var(--crm-text)]">Товар</span>
                <CustomSelect
                  value={stockAdjustDraft?.productId || ''}
                  onChange={(val) => setStockAdjustDraft({ ...stockAdjustDraft, productId: val })}
                  options={[{ value: '', label: 'Выберите товар' }, ...stockProducts.map((p) => ({ value: p.id, label: `${p.name} (${p.stock})` }))]}
                  placeholder="Товар"
                  portalMenu
                />
              </label>
            </div>
            <div className="w-full sm:w-44">
              <label className="space-y-1 text-sm">
                <span className="text-[var(--crm-text)]">Операция</span>
                <CustomSelect
                  value={stockAdjustMode}
                  onChange={(val) => setStockAdjustMode(val)}
                  options={[
                    { value: 'increase', label: 'Пополнение' },
                    { value: 'decrease', label: 'Списание' },
                    { value: 'set', label: 'Установить' },
                  ]}
                  placeholder="Операция"
                  portalMenu
                />
              </label>
            </div>
            <div className="w-full sm:w-28">
              <label className="space-y-1 text-sm">
                <span className="text-[var(--crm-text)]">{stockAdjustMode === 'set' ? 'Значение' : 'Кол-во'}</span>
                <input
                  type="number"
                  min="0"
                  value={stockAdjustDraft?.delta || ''}
                  onChange={(e) => setStockAdjustDraft({ ...stockAdjustDraft, delta: Math.max(0, Number(e.target.value)) })}
                  className="w-full rounded-xl bg-[color:var(--crm-surface-4)] px-3 py-2.5 text-sm text-white"
                />
              </label>
            </div>
            <div className="w-full sm:w-44">
              <label className="space-y-1 text-sm">
                <span className="text-[var(--crm-text)]">Причина</span>
                <input
                  value={stockAdjustDraft?.reason || ''}
                  onChange={(e) => setStockAdjustDraft({ ...stockAdjustDraft, reason: e.target.value })}
                  placeholder="Поступление, ревизия..."
                  className="w-full rounded-xl bg-[color:var(--crm-surface-4)] px-3 py-2.5 text-sm text-white"
                />
              </label>
            </div>
            <button
              type="button"
              onClick={handleStockAdjust}
              disabled={!stockAdjustDraft?.productId || !stockAdjustDraft?.delta}
              className="crm-action-btn shrink-0 px-4 py-2.5 text-sm font-semibold disabled:opacity-40"
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
                    className="crm-ghost-btn flex-1 h-10 px-3 text-xs sm:flex-none"
                    style={{ minHeight: 0 }}
                  >
                    {cat.isActive ? 'Скрыть' : 'Показать'}
                  </button>
                  <button type="button" onClick={() => setCategoryDraft(cat)} className="crm-ghost-btn h-10 w-10 p-0 flex items-center justify-center" style={{ borderRadius: '50%', minHeight: 0 }}>
                    <IconEdit className="h-5 w-5" />
                  </button>
                  <button type="button" onClick={() => handleDeleteCategory(cat.id)} className="crm-ghost-btn h-10 w-10 p-0 flex items-center justify-center text-rose-400" style={{ borderRadius: '50%', minHeight: 0 }}>
                    <IconTrash className="h-5 w-5" />
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
        <SectionCard title="Настройки магазина">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">Категории в каталоге</p>
                <p className="text-xs text-[var(--crm-muted)]">Группировка товаров по категориям</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={settings?.categoriesEnabled || false}
                onClick={() => setSettings({ ...settings, categoriesEnabled: !settings?.categoriesEnabled })}
                className={classNames(
                  'relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors',
                  settings?.categoriesEnabled ? 'bg-[color:var(--crm-primary)]' : 'bg-[color:var(--crm-surface-5)]'
                )}
              >
                <span
                  className={classNames(
                    'inline-block h-4 w-4 rounded-full bg-white shadow-lg transition-transform',
                    settings?.categoriesEnabled ? 'translate-x-[22px]' : 'translate-x-1'
                  )}
                />
              </button>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Автоотмена заказов">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">Срок ожидания (дней)</p>
                <p className="text-xs text-[var(--crm-muted)]">Невыданные заказы будут отменены автоматически</p>
              </div>
              <input
                type="number"
                min="0"
                max="90"
                value={settings?.autoExpireDays ?? 3}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setSettings({ ...settings, autoExpireDays: Math.max(0, Math.min(90, parseInt(e.target.value) || 0)) })}
                className="w-20 text-center rounded-xl bg-[color:var(--crm-surface-2)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[color:var(--crm-primary)]"
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Лимит товаров">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-xl bg-[color:var(--crm-surface-4)] px-4 py-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">Макс. количество на человека</p>
                <p className="text-xs text-[var(--crm-muted)]">0 = без ограничений</p>
              </div>
              <input
                type="number"
                min="0"
                max="999"
                value={settings?.maxProductsPerPerson ?? 0}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setSettings({ ...settings, maxProductsPerPerson: Math.max(0, parseInt(e.target.value) || 0) })}
                className="w-20 text-center rounded-xl bg-[color:var(--crm-surface-2)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[color:var(--crm-primary)]"
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Ограничение выдачи">
          <p className="text-xs text-[var(--crm-muted)] mb-3">Сотрудники, которым запрещено выдавать заказы:</p>
          {barbers.filter((b) => b.role === ROLE_STAFF).length === 0 ? (
            <p className="text-xs text-[var(--crm-muted)]">Нет сотрудников для настройки.</p>
          ) : (
            <div className="space-y-1">
              {barbers.filter((b) => b.role === ROLE_STAFF).map((b) => {
                const isRestricted = Array.isArray(settings?.restrictedIssuers) && settings.restrictedIssuers.includes(b.id);
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => toggleRestrictedIssuer(b.id)}
                    className="flex w-full items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-left transition hover:bg-[color:var(--crm-surface-5)]"
                  >
                    <span className="text-sm text-white">{b.name}</span>
                    <span className={classNames(
                      'text-xs font-medium px-2 py-0.5 rounded-full',
                      isRestricted ? 'bg-rose-500/15 text-rose-300' : 'bg-emerald-500/15 text-emerald-300'
                    )}>
                      {isRestricted ? 'Заблокирован' : 'Разрешено'}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </SectionCard>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSaveSettings}
            disabled={settingsSaving}
            className="crm-action-btn px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
          >
            {settingsSaving ? 'Сохранение...' : 'Сохранить'}
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
    <div className="space-y-3">
      <div className="crm-inline-panel flex flex-wrap gap-2 p-2" ref={trackRef}>
        {SHOP_TABS.map((tab) => {
          if (tab.id === 'settings' && !isOwner) return null;
          return (
            <button
              key={tab.id}
              type="button"
              ref={setItemRef(tab.id)}
              onClick={() => setActiveTab(tab.id)}
              className={classNames(
                'crm-subnav-pill crm-nav-item flex-shrink-0 px-3 py-1.5 text-xs font-semibold',
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
