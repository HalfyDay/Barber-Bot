/* CreatorIncomeView — income tracking page for the creator role */

const IncomeCreateModal = ({ open, businesses, onSave, onClose }) => {
  const [form, setForm] = React.useState({ businessId: '', amount: '', date: '', periodStart: '', periodEnd: '', note: '' });
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    if (open) {
      const today = new Date().toISOString().slice(0, 10);
      setForm({ businessId: '', amount: '', date: today, periodStart: '', periodEnd: '', note: '' });
      setError('');
    }
  }, [open]);
  if (!open) return null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.businessId || !form.amount || !form.date) {
      setError('Заполните организацию, сумму и дату.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      await onSave(form);
    } catch (err) {
      setError(err.message || 'Ошибка сохранения');
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="crm-modal-surface w-full max-w-md space-y-4 p-6" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-semibold text-white">Новый доход</h3>
        {error && <p className="text-sm text-rose-400">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Организация</label>
            <select value={form.businessId} onChange={(e) => setForm({ ...form, businessId: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white">
              <option value="">Выберите...</option>
              {businesses.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Сумма (₽)</label>
            <input type="number" min="0" step="0.01" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" placeholder="0" />
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Дата платежа</label>
            <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Период с</label>
              <input type="date" value={form.periodStart} onChange={(e) => setForm({ ...form, periodStart: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Период по</label>
              <input type="date" value={form.periodEnd} onChange={(e) => setForm({ ...form, periodEnd: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Заметка</label>
            <input type="text" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" placeholder="Необязательно" />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="crm-ghost-btn px-4 py-2 text-sm">Отмена</button>
            <button type="submit" disabled={saving} className="crm-action-btn px-4 py-2 text-sm">{saving ? 'Сохранение...' : 'Добавить'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const IncomeEditModal = ({ open, record, businesses, onSave, onClose }) => {
  const [form, setForm] = React.useState({ businessId: '', amount: '', date: '', periodStart: '', periodEnd: '', note: '' });
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    if (open && record) {
      setForm({
        businessId: record.businessId || '',
        amount: String(record.amount ?? ''),
        date: record.date || '',
        periodStart: record.periodStart || '',
        periodEnd: record.periodEnd || '',
        note: record.note || '',
      });
      setError('');
    }
  }, [open, record]);
  if (!open || !record) return null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.businessId || !form.amount || !form.date) {
      setError('Заполните организацию, сумму и дату.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      await onSave(record.id, form);
    } catch (err) {
      setError(err.message || 'Ошибка сохранения');
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="crm-modal-surface w-full max-w-md space-y-4 p-6" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-semibold text-white">Редактировать доход</h3>
        {error && <p className="text-sm text-rose-400">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Организация</label>
            <select value={form.businessId} onChange={(e) => setForm({ ...form, businessId: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white">
              <option value="">Выберите...</option>
              {businesses.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Сумма (₽)</label>
            <input type="number" min="0" step="0.01" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" />
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Дата платежа</label>
            <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Период с</label>
              <input type="date" value={form.periodStart} onChange={(e) => setForm({ ...form, periodStart: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Период по</label>
              <input type="date" value={form.periodEnd} onChange={(e) => setForm({ ...form, periodEnd: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Заметка</label>
            <input type="text" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" placeholder="Необязательно" />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="crm-ghost-btn px-4 py-2 text-sm">Отмена</button>
            <button type="submit" disabled={saving} className="crm-action-btn px-4 py-2 text-sm">{saving ? 'Сохранение...' : 'Сохранить'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const IncomeChart = ({ data }) => {
  if (!data || !data.length) return null;
  const max = Math.max(...data.map((d) => d.amount));
  return (
    <div className="crm-soft-card p-4">
      <h4 className="text-sm font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-3">Доходы по месяцам</h4>
      <div className="flex items-end gap-1.5" style={{ height: 120 }}>
        {data.map((d) => {
          const h = max > 0 ? (d.amount / max) * 100 : 0;
          const label = d.month.length > 7 ? d.month : d.month;
          return (
            <div key={d.month} className="flex flex-col items-center flex-1 min-w-0">
              <span className="text-[10px] text-[var(--crm-muted)] mb-1 truncate w-full text-center">{d.amount.toLocaleString('ru-RU')}</span>
              <div className="w-full rounded-t" style={{ height: `${Math.max(h, 4)}%`, background: 'var(--crm-primary, #00bfaf)' }} />
              <span className="text-[9px] text-[var(--crm-muted)] mt-1 truncate w-full text-center">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CreatorIncomeView = ({ apiRequest }) => {
  const [records, setRecords] = React.useState([]);
  const [businesses, setBusinesses] = React.useState([]);
  const [summary, setSummary] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [filterBusiness, setFilterBusiness] = React.useState('');
  const [filterFrom, setFilterFrom] = React.useState('');
  const [filterTo, setFilterTo] = React.useState('');
  const [showCreate, setShowCreate] = React.useState(false);
  const [editRecord, setEditRecord] = React.useState(null);
  const [error, setError] = React.useState('');

  const loadAll = React.useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      if (filterBusiness) params.set('businessId', filterBusiness);
      if (filterFrom) params.set('from', filterFrom);
      if (filterTo) params.set('to', filterTo);
      const qs = params.toString();
      const [inc, biz, sum] = await Promise.all([
        apiRequest(`/creator/income${qs ? '?' + qs : ''}`),
        apiRequest('/creator/businesses'),
        apiRequest('/creator/income/summary'),
      ]);
      setRecords(Array.isArray(inc) ? inc : []);
      setBusinesses(Array.isArray(biz) ? biz : []);
      setSummary(sum || null);
    } catch (err) {
      setError(err.message || 'Ошибка загрузки');
    } finally {
      setLoading(false);
    }
  }, [apiRequest, filterBusiness, filterFrom, filterTo]);

  React.useEffect(() => { loadAll(); }, [loadAll]);

  const handleCreate = async (form) => {
    await apiRequest('/creator/income', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    setShowCreate(false);
    loadAll();
  };

  const handleUpdate = async (id, form) => {
    await apiRequest(`/creator/income/${id}`, {
      method: 'PUT',
      body: JSON.stringify(form),
    });
    setEditRecord(null);
    loadAll();
  };

  const handleDelete = async (id) => {
    if (!confirm('Удалить запись дохода?')) return;
    await apiRequest(`/creator/income/${id}`, { method: 'DELETE' });
    loadAll();
  };

  const formatMoney = (v) => (v || 0).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
  const formatPeriod = (r) => {
    if (r.periodStart && r.periodEnd) return `${r.periodStart} — ${r.periodEnd}`;
    if (r.periodStart) return `с ${r.periodStart}`;
    if (r.periodEnd) return `до ${r.periodEnd}`;
    return '—';
  };

  return (
    <div className="mx-auto w-full max-w-[1200px] space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Доходы</h2>
        <button onClick={() => setShowCreate(true)} className="crm-action-btn px-4 py-2 text-sm font-medium">+ Добавить</button>
      </div>

      {error && <div className="crm-soft-panel p-3 text-sm text-rose-400">{error}</div>}

      {/* Filters */}
      <div className="crm-soft-panel p-4 flex flex-wrap gap-3 items-end">
        <div className="flex-1 min-w-[160px]">
          <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">Организация</label>
          <select value={filterBusiness} onChange={(e) => setFilterBusiness(e.target.value)} className="w-full rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white">
            <option value="">Все</option>
            {businesses.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">С даты</label>
          <input type="date" value={filterFrom} onChange={(e) => setFilterFrom(e.target.value)} className="rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" />
        </div>
        <div>
          <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-1">По дату</label>
          <input type="date" value={filterTo} onChange={(e) => setFilterTo(e.target.value)} className="rounded-lg bg-[#1e1f20] border border-white/10 px-3 py-2 text-sm text-white" />
        </div>
        <button onClick={() => { setFilterBusiness(''); setFilterFrom(''); setFilterTo(''); }} className="crm-ghost-btn px-3 py-2 text-sm">Сбросить</button>
      </div>

      {/* Summary cards */}
      {summary && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="crm-soft-card p-4">
            <p className="text-xs text-[var(--crm-muted)] uppercase tracking-wider">Всего</p>
            <p className="text-2xl font-bold text-white mt-1">{formatMoney(summary.total)}</p>
          </div>
          <div className="crm-soft-card p-4">
            <p className="text-xs text-[var(--crm-muted)] uppercase tracking-wider">Организаций</p>
            <p className="text-2xl font-bold text-white mt-1">{summary.byBusiness.length}</p>
          </div>
          <div className="crm-soft-card p-4">
            <p className="text-xs text-[var(--crm-muted)] uppercase tracking-wider">Месяцев</p>
            <p className="text-2xl font-bold text-white mt-1">{summary.byMonth.length}</p>
          </div>
        </div>
      )}

      {/* Chart + by-business breakdown */}
      {summary && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <IncomeChart data={summary.byMonth} />
          <div className="crm-soft-card p-4">
            <h4 className="text-sm font-medium text-[var(--crm-muted)] uppercase tracking-wider mb-3">По организациям</h4>
            {summary.byBusiness.length === 0 ? (
              <p className="text-sm text-[var(--crm-muted)]">Нет данных</p>
            ) : (
              <div className="space-y-2">
                {summary.byBusiness.map((b) => (
                  <div key={b.name} className="flex items-center justify-between">
                    <span className="text-sm text-slate-300 truncate">{b.name}</span>
                    <span className="text-sm font-medium text-white ml-3">{formatMoney(b.amount)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Records table */}
      <div className="crm-soft-panel overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-sm text-[var(--crm-muted)]">Загрузка...</div>
        ) : records.length === 0 ? (
          <div className="p-8 text-center text-sm text-[var(--crm-muted)]">Нет записей доходов</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs text-[var(--crm-muted)] uppercase tracking-wider">
                  <th className="px-4 py-3">Дата</th>
                  <th className="px-4 py-3">Организация</th>
                  <th className="px-4 py-3 text-right">Сумма</th>
                  <th className="px-4 py-3">Период</th>
                  <th className="px-4 py-3">Заметка</th>
                  <th className="px-4 py-3 text-right">Действия</th>
                </tr>
              </thead>
              <tbody>
                {records.map((r) => (
                  <tr key={r.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="px-4 py-3 text-white whitespace-nowrap">{r.date}</td>
                    <td className="px-4 py-3 text-slate-300">{r.business?.name || '—'}</td>
                    <td className="px-4 py-3 text-right font-medium text-emerald-400 whitespace-nowrap">{formatMoney(r.amount)}</td>
                    <td className="px-4 py-3 text-[var(--crm-muted)] whitespace-nowrap">{formatPeriod(r)}</td>
                    <td className="px-4 py-3 text-[var(--crm-muted)] max-w-[200px] truncate">{r.note || '—'}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button onClick={() => setEditRecord(r)} className="text-xs text-[var(--crm-primary)] hover:underline mr-3">Изменить</button>
                      <button onClick={() => handleDelete(r.id)} className="text-xs text-rose-400 hover:underline">Удалить</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <IncomeCreateModal open={showCreate} businesses={businesses} onSave={handleCreate} onClose={() => setShowCreate(false)} />
      <IncomeEditModal open={!!editRecord} record={editRecord} businesses={businesses} onSave={handleUpdate} onClose={() => setEditRecord(null)} />
    </div>
  );
};
