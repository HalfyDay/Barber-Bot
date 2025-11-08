(function(){
const { useState, useEffect, useMemo, useCallback, Fragment, useRef } = React;

function useLocalStorage(key, initialValue) { const [storedValue, setStoredValue] = useState(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue; } catch (error) { console.log(error); return initialValue; } }); const setValue = useCallback((value) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key, JSON.stringify(valueToStore)); } catch (error) { console.log(error); } }, [key, storedValue]); return [storedValue, setValue]; }

const FieldsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 1 0-2.82l.01-.01a2 2 0 0 1 2.82 0L17 4l1.37-1.37a2 2 0 0 1 2.82 0l.01.01a2 2 0 0 1 0 2.82L19.59 7l-1.59 1.59"/><path d="m14 7 5.59 5.59"/><path d="M7 12h2"/><path d="M7 17h5"/></svg>;
const FilterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>;
const SortIcon = ({ direction }) => { if (!direction) return <span className="text-gray-300 dark:text-gray-500">↕</span>; return <span>{direction === 'asc' ? '▲' : '▼'}</span>; };
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>;
const BackupIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>;

// const API_BASE_URL = 'http://localhost:3000/api';
const DEFAULT_API_BASE = 'http://192.168.1.55:3000/api';
const getApiBase = () => window.__BARBER_API_BASE__ || DEFAULT_API_BASE;
const statusColors = { 'Активная': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200', 'Отменена': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200', 'Завершена': 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200', 'Неявка': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200', 'Заблокировано': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200', };
const barberColors = { 'Тимур🐼': 'text-cyan-700 dark:text-cyan-400', 'Владимир😎': 'text-orange-700 dark:text-orange-400', 'Алина💖': 'text-rose-700 dark:text-rose-400', 'Алексей🦐': 'text-lime-700 dark:text-lime-400' };

const SkeletonLoader = () => (<div className="p-4 sm:p-6 lg:p-8"><div className="h-10 bg-gray-200 rounded-md w-1/3 mb-4 animate-pulse"></div><div className="h-6 bg-gray-200 rounded-md w-1/2 mb-8 animate-pulse"></div><div className="bg-white p-4 rounded-lg shadow-sm"><div className="h-8 bg-gray-200 rounded-md w-1/4 mb-6 animate-pulse"></div><div className="space-y-4"><div className="h-12 bg-gray-100 rounded-md animate-pulse"></div><div className="h-12 bg-gray-100 rounded-md animate-pulse"></div><div className="h-12 bg-gray-100 rounded-md animate-pulse"></div></div></div></div>);
const GenericModal = ({ isOpen, onClose, children, contentClassName = "max-w-md" }) => { const [isVisible, setIsVisible] = useState(false); useEffect(() => { if (isOpen) setIsVisible(true); else setIsVisible(false); }, [isOpen]); if (!isOpen && !isVisible) return null; return (<div className={`modal-overlay fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={onClose}><div className={`modal-content bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full ${contentClassName} ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} onClick={e => e.stopPropagation()}>{children}</div></div>); };
const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = "Удалить", confirmColor = "red" }) => (<GenericModal isOpen={isOpen} onClose={onClose}><h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2><p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p><div className="flex justify-end space-x-3"><button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors">Отмена</button><button onClick={onConfirm} className={`px-4 py-2 text-white rounded-md bg-${confirmColor}-600 hover:bg-${confirmColor}-700 transition-colors`}>{confirmText}</button></div></GenericModal>);
const UserProfileModal = ({ isOpen, onClose, profileData, isLoading }) => (<GenericModal isOpen={isOpen} onClose={onClose}>{isLoading && <p className="dark:text-white">Загрузка данных...</p>}{!isLoading && profileData && (<div><h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{profileData.user.Name}</h2><p className="text-gray-600 dark:text-gray-300 mb-6">{profileData.user.Phone || 'Телефон не указан'} (Telegram ID: {profileData.user.TelegramID || 'N/A'})</p><div className="mb-4"><h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Записи клиента ({profileData.appointments.length})</h3><div className="text-sm max-h-40 overflow-y-auto pr-2">{profileData.appointments.length > 0 ? profileData.appointments.map(a => (<div key={a.id} className="p-2 border-b dark:border-gray-700 text-gray-700 dark:text-gray-300">{a.Date} в {a.Time} - {a.Services}</div>)) : <p className="text-gray-500">Записей нет.</p>}</div></div>{profileData.schedules.length > 0 && (<div><h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Расписание мастера ({profileData.schedules.length})</h3><div className="text-sm max-h-40 overflow-y-auto pr-2">{profileData.schedules.map(s => (<div key={s.id} className="p-2 border-b dark:border-gray-700 text-gray-700 dark:text-gray-300">{s.Date} ({s.DayOfWeek}) - {s.Week}</div>))}</div></div>)}<div className="mt-6 flex justify-end"><button onClick={onClose} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Закрыть</button></div></div>)}</GenericModal>);
const FieldsModal = ({ isOpen, onClose, columns, hiddenColumns, toggleColumn }) => (<GenericModal isOpen={isOpen} onClose={onClose}><h2 className="text-xl font-bold mb-4 dark:text-white">Настройка полей</h2><div className="grid grid-cols-2 gap-4">{columns.map(col => (<label key={col.key} className="flex items-center space-x-3 cursor-pointer p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 text-indigo-600 focus:ring-indigo-500" checked={!hiddenColumns.includes(col.key)} onChange={() => toggleColumn(col.key)}/><span className="text-gray-700 dark:text-gray-300">{col.header}</span></label>))}</div><div className="mt-6 flex justify-end"><button onClick={onClose} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Готово</button></div></GenericModal>);
const StatusFilterModal = ({ isOpen, onClose, statuses, hiddenStatuses, toggleStatus }) => (<GenericModal isOpen={isOpen} onClose={onClose}><h2 className="text-xl font-bold mb-4 dark:text-white">Фильтр по статусам</h2><div className="grid grid-cols-2 gap-4">{statuses.map(status => (<label key={status} className="flex items-center space-x-3 cursor-pointer p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 text-indigo-600 focus:ring-indigo-500" checked={!hiddenStatuses.includes(status)} onChange={() => toggleStatus(status)} /><span className="text-gray-700 dark:text-gray-300">{status}</span></label>))}</div><div className="mt-6 flex justify-end"><button onClick={onClose} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Готово</button></div></GenericModal>);
const MultiSelectModal = ({ isOpen, onClose, onSave, options, selectedOptionsStr }) => { const [currentSelection, setCurrentSelection] = useState(new Set()); useEffect(() => { if (isOpen) { const selected = new Set(selectedOptionsStr ? selectedOptionsStr.split(',').map(s => s.trim()) : []); setCurrentSelection(selected); } }, [isOpen, selectedOptionsStr]); const handleToggle = (option) => { setCurrentSelection(prev => { const newSelection = new Set(prev); if (newSelection.has(option)) newSelection.delete(option); else newSelection.add(option); return newSelection; }); }; const handleSave = () => { onSave(Array.from(currentSelection).join(', ')); onClose(); }; return (<GenericModal isOpen={isOpen} onClose={onClose}><h2 className="text-xl font-bold mb-4 dark:text-white">Выберите услуги</h2><div className="max-h-60 overflow-y-auto pr-2">{(options || []).map(opt => (<label key={opt} className="flex items-center space-x-3 cursor-pointer p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 text-indigo-600 focus:ring-indigo-500" checked={currentSelection.has(opt)} onChange={() => handleToggle(opt)}/><span className="dark:text-gray-300">{opt}</span></label>))}</div><div className="mt-6 flex justify-end space-x-3"><button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Отмена</button><button onClick={handleSave} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Сохранить</button></div></GenericModal>); };
const TimePickerModal = ({ isOpen, onClose, onSave, currentValue }) => { const [startTime, setStartTime] = useState(''); const [endTime, setEndTime] = useState(''); useEffect(() => { if(isOpen) { if(currentValue && currentValue.includes('-')) { const [start, end] = currentValue.split('-').map(s => s.trim()); setStartTime(start); setEndTime(end); } else { setStartTime(currentValue || ''); setEndTime(''); } } }, [isOpen, currentValue]); const handleSave = () => { if (startTime && endTime) { if (startTime > endTime) { onSave(`${endTime} - ${startTime}`); } else { onSave(`${startTime} - ${endTime}`); } } else if (startTime) { onSave(startTime); } else { onSave(''); } onClose(); }; const handleClear = () => { onSave(''); onClose(); }; return (<GenericModal isOpen={isOpen} onClose={onClose}><div className="flex justify-between items-center mb-4"><h2 className="text-xl font-bold dark:text-white">Выберите время</h2><button onClick={handleClear} className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 transition-colors">Очистить</button></div><div className="flex items-center justify-around space-x-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"><div className="text-center"><label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Начало</label><input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="form-input mt-1 text-lg font-semibold text-center bg-white dark:bg-gray-800 p-2 rounded-md w-32"/></div><span className="text-2xl font-light text-gray-400 dark:text-gray-500 pt-6">-</span><div className="text-center"><label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Конец</label><input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="form-input mt-1 text-lg font-semibold text-center bg-white dark:bg-gray-800 p-2 rounded-md w-32"/></div></div><div className="mt-6 flex justify-end space-x-3"><button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Отмена</button><button onClick={handleSave} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Сохранить</button></div></GenericModal>);};
const DatePickerModal = ({ isOpen, onClose, onSave, currentValue }) => { const [date, setDate] = useState(''); useEffect(() => { if (isOpen) { setDate(currentValue || new Date().toISOString().split('T')[0]); } }, [isOpen, currentValue]); const handleSave = () => { onSave(date); onClose(); }; return (<GenericModal isOpen={isOpen} onClose={onClose}><h2 className="text-xl font-bold mb-4 dark:text-white">Выберите дату</h2><input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-input w-full p-2 text-lg text-center"/> <div className="mt-6 flex justify-end space-x-3"><button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Отмена</button><button onClick={handleSave} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Сохранить</button></div></GenericModal>);};

const CreateRecordModal = ({ isOpen, onClose, onSave, columns, options, tableName, initialData }) => {
    const [formData, setFormData] = useState({});
    const [isTimePickerOpen, setTimePickerOpen] = useState(false);
    const [isDatePickerOpen, setDatePickerOpen] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen) {
            const defaultRecord = columns.reduce((acc, col) => {
                if (col.editable !== false) {
                    acc[col.key] = col.type === 'boolean' ? false : '';
                }
                return acc;
            }, {});
            setFormData({ ...defaultRecord, ...initialData });
            setError(''); // Reset error on modal open
        }
    }, [isOpen, columns, initialData]);

    const handleChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tableName === 'Записи' && !formData.Barber) {
            setError('Пожалуйста, выберите барбера.');
            return;
        }
        setError('');
        onSave(formData);
    };

    const renderInput = (column) => {
        if (column.editable === false) return null;
        const value = formData[column.key];

        if (tableName === 'Записи' && column.key === 'Time') {
            return (
                <div className="relative">
                    <input type="text" value={formData.Time || ''} readOnly placeholder="Нажмите для выбора времени" onClick={() => setTimePickerOpen(true)} className="form-input cursor-pointer"/>
                    {isTimePickerOpen && ( <TimePickerModal isOpen={isTimePickerOpen} onClose={() => setTimePickerOpen(false)} currentValue={formData.Time} onSave={(newValue) => { handleChange('Time', newValue); setTimePickerOpen(false); }}/> )}
                </div>
            );
        }

        if (tableName === 'Записи' && column.key === 'Date') {
            return (
                <div className="relative">
                    <input type="text" value={formData.Date || ''} readOnly placeholder="Нажмите для выбора даты" onClick={() => setDatePickerOpen(true)} className="form-input cursor-pointer"/>
                    {isDatePickerOpen && ( <DatePickerModal isOpen={isDatePickerOpen} onClose={() => setDatePickerOpen(false)} currentValue={formData.Date} onSave={(newValue) => { handleChange('Date', newValue); setDatePickerOpen(false); }}/> )}
                </div>
            );
        }

        switch (column.type) {
            case 'select':
                return <select value={value || ''} onChange={e => handleChange(column.key, e.target.value)} className="form-input"><option value="">-- Выберите --</option>{(options[column.optionsKey] || []).map(opt => <option key={opt} value={opt}>{opt}</option>)}</select>;
            case 'boolean':
                return <div className="flex items-center h-full"><input type="checkbox" checked={!!value} onChange={e => handleChange(column.key, e.target.checked)} className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/></div>;
            case 'multi-select':
                const selected = new Set(value ? String(value).split(',').map(s => s.trim()) : []);
                const toggleSelection = (option) => {
                    const newSelection = new Set(selected);
                    if (newSelection.has(option)) { newSelection.delete(option); } else { newSelection.add(option); }
                    handleChange(column.key, Array.from(newSelection).join(', '));
                };
                return (<div className="border dark:border-gray-600 p-2 rounded-md max-h-40 overflow-y-auto"><div className="grid grid-cols-2 gap-2">{(options[column.optionsKey] || []).map(opt => (<label key={opt} className="flex items-center space-x-2 p-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"><input type="checkbox" checked={selected.has(opt)} onChange={() => toggleSelection(opt)} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" /> <span className="text-sm">{opt}</span></label>))}</div></div>);
            default:
                return <input type="text" value={value || ''} onChange={e => handleChange(column.key, e.target.value)} className="form-input"/>;
        }
    };

    const visibleColumns = columns.filter(c => {
        if (c.editable === false) return false;
        if (c.key === 'Reminder2hClientSent' || c.key === 'Reminder2hBarberSent') return false;
        if (tableName === 'Клиенты' && c.key === 'Barber') return false;
        return true;
    });


    return (
        <GenericModal isOpen={isOpen} onClose={onClose} contentClassName="fullscreen-modal-content">
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Новая запись в "{tableName}"</h2>
                <div className="flex-grow overflow-y-auto pr-4 -mr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        {visibleColumns.map(col => (
                            <div key={col.key}>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{col.header}</label>
                                {renderInput(col)}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-shrink-0 pt-6 flex justify-end items-center space-x-3 border-t dark:border-gray-700 mt-6">
                    {error && <p className="text-red-500 text-sm mr-auto">{error}</p>}
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors">Отмена</button>
                    <button type="submit" className="px-4 py-2 text-white rounded-md bg-indigo-600 hover:bg-indigo-700 transition-colors">Сохранить</button>
                </div>
            </form>
        </GenericModal>
    );
};

const DataTable = ({ data, columns, hiddenColumns, onUpdate, onDelete, options, sortConfig, setSortConfig, onOpenProfile, activeTable }) => {
    const [editCell, setEditCell] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [multiSelectModalConfig, setMultiSelectModalConfig] = useState({ isOpen: false });
    const [timePickerModalConfig, setTimePickerModalConfig] = useState({ isOpen: false });
    const [datePickerModalConfig, setDatePickerModalConfig] = useState({ isOpen: false });
    const [deleteConfirmation, setDeleteConfirmation] = useState({ isOpen: false, recordId: null });
    const editInputRef = useRef(null);

    useEffect(() => { if(editCell && editInputRef.current) { editInputRef.current.focus(); } }, [editCell]);

    const visibleColumns = useMemo(() => {
        let baseColumns = columns.filter(col => !hiddenColumns.includes(col.key));
        if (activeTable === 'Users') {
            baseColumns = [{ key: 'rowNumber', header: 'в"–' }, ...baseColumns];
        }
        if (activeTable !== 'Schedules') {
            return [...baseColumns, { key: 'actions', header: ' ', align: 'center' }];
        }
        return baseColumns;
    }, [columns, hiddenColumns, activeTable]);

    const requestSort = (key) => { if(['actions', 'rowNumber'].includes(key)) return; let direction = 'asc'; if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') { direction = 'desc'; } setSortConfig({ key, direction }); };
    const handleCellClick = (record, column) => { if (column.editable) { if (column.type === 'boolean') { onUpdate(record.id, { [column.key]: !record[column.key] }); return; } if (column.type === 'multi-select') { setMultiSelectModalConfig({ isOpen: true, options: options[column.optionsKey], selectedOptionsStr: record[column.key], onSave: (newValue) => onUpdate(record.id, { [column.key]: newValue }) }); return; } if (activeTable === 'Appointments' && column.key === 'Time') { const currentValue = record[column.key]; const onSave = (newValue) => onUpdate(record.id, { [column.key]: newValue }); setTimePickerModalConfig({ isOpen: true, currentValue, onSave }); return; } if (activeTable === 'Appointments' && column.key === 'Date') { const currentValue = record[column.key]; const onSave = (newValue) => onUpdate(record.id, { [column.key]: newValue }); setDatePickerModalConfig({ isOpen: true, currentValue, onSave }); return; } if (activeTable === 'Schedules' && column.key === 'Week') { const currentValue = record[column.key]; const onSave = (newValue) => onUpdate(record.id, { [column.key]: newValue }); setTimePickerModalConfig({ isOpen: true, currentValue, onSave }); return; } setEditCell({ recordId: record.id, columnKey: column.key }); setEditValue(record[column.key] || ''); } };
    const handleBlur = () => { if(editCell) { onUpdate(editCell.recordId, { [editCell.columnKey]: editValue }); setEditCell(null); } };
    const handleSelectChange = (e, record, column) => { onUpdate(record.id, { [column.key]: e.target.value }); setEditCell(null); };
    const openDeleteModal = (recordId) => { setDeleteConfirmation({ isOpen: true, recordId }); };
    const closeDeleteModal = () => { setDeleteConfirmation({ isOpen: false, recordId: null }); };
    const confirmDelete = () => { onDelete(deleteConfirmation.recordId); closeDeleteModal(); };

    const renderCell = (record, column, index) => {
        if (column.key === 'rowNumber') return <div className="text-center text-gray-500 dark:text-gray-400">{index + 1}</div>;
        const isEditing = editCell?.recordId === record.id && editCell?.columnKey === column.key;
        if (column.key === 'actions') return (<div className="flex justify-center"><button onClick={(e) => { e.stopPropagation(); openDeleteModal(record.id); }} className="text-gray-400 hover:text-red-600 dark:text-gray-500 dark:hover:text-red-500 p-1 transition-colors"><TrashIcon /></button></div>);
        if (isEditing) {
            if (column.type === 'select') { return (<select ref={editInputRef} value={record[column.key] || ''} onChange={(e) => handleSelectChange(e, record, column)} onBlur={() => setEditCell(null)} className="editing-input" autoFocus><option value="">--</option>{(options[column.optionsKey] || []).map(opt => <option key={opt} value={opt}>{opt}</option>)}</select>); }
            return <input ref={editInputRef} type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} onBlur={handleBlur} onKeyDown={(e) => e.key === 'Enter' && handleBlur()} className="editing-input" autoFocus/>;
        }
        const cellValue = record[column.key];
        const displayValue = cellValue === null || cellValue === undefined ? '—' : String(cellValue);
        if (column.isProfileLink) return <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onOpenProfile(displayValue); }} className={`font-semibold text-indigo-600 hover:underline dark:text-indigo-400`}>{displayValue}</a>
        if (column.key === 'Barber') return <span className={`font-semibold ${barberColors[displayValue] || ''}`}>{displayValue}</span>
        if (column.type === 'boolean') return <div className="text-center">{cellValue ? 'вњ…' : 'вќЊ'}</div>;
        if (column.type === 'multi-select') { const values = cellValue ? cellValue.split(',').map(s => s.trim()) : []; return <div className="flex flex-wrap gap-1">{values.map(val => <span key={val} className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs font-medium px-2 py-0.5 rounded-full">{val}</span>)}</div>; }
        const colorClass = column.key === 'Status' ? statusColors[displayValue] || 'bg-gray-100 dark:bg-gray-700' : '';
        return <div className={`px-3 py-1.5 rounded-full text-xs font-bold text-center ${colorClass}`}><div className="table-cell-content inline-block align-middle" title={displayValue}>{displayValue}</div></div>;
    };

    let lastDate = null;
    const isSortedByDate = activeTable === 'Appointments' && sortConfig?.key === 'Date';
    let lastBarber = null;
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    return (
        <Fragment>
            <ConfirmationModal isOpen={deleteConfirmation.isOpen} onClose={closeDeleteModal} onConfirm={confirmDelete} title="Подтвердите удаление" message="Вы уверены, что хотите удалить эту строку? Это действие необратимо." />
            <MultiSelectModal isOpen={multiSelectModalConfig.isOpen} onClose={() => setMultiSelectModalConfig({ isOpen: false })} {...multiSelectModalConfig} />
            <TimePickerModal isOpen={timePickerModalConfig.isOpen} onClose={() => setTimePickerModalConfig({ isOpen: false })} {...timePickerModalConfig} />
            <DatePickerModal isOpen={datePickerModalConfig.isOpen} onClose={() => setDatePickerModalConfig({ isOpen: false })} {...datePickerModalConfig} />
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
                <div className="overflow-auto flex-grow">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
                            <tr>{visibleColumns.map(col => (<th key={col.key} className={`px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider ${col.align === 'center' ? 'text-center' : 'text-left'} ${activeTable !== 'Schedules' && 'cursor-pointer'}`} onClick={() => requestSort(col.key)}><div className={`flex items-center gap-2 ${col.align === 'center' ? 'justify-center' : ''}`}>{col.header}{activeTable !== 'Schedules' && <SortIcon direction={sortConfig && sortConfig.key === col.key ? sortConfig.direction : null} />}</div></th>))}</tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {data.length > 0 ? data.map((record, index) => {
                                const showDateHeader = isSortedByDate && record.Date !== lastDate;
                                if(showDateHeader) lastDate = record.Date;
                                const isToday = activeTable === 'Schedules' && record.Date === todayStr;
                                let barberHeader = null;
                                if (activeTable === 'Schedules' && record.Barber !== lastBarber) {
                                    lastBarber = record.Barber;
                                    barberHeader = (<tr className="bg-gray-200 dark:bg-gray-900 sticky top-0 z-10"><td colSpan={visibleColumns.length} className="px-6 py-2 text-md font-bold text-gray-900 dark:text-gray-100">{lastBarber}</td></tr>);
                                }
                                return (<Fragment key={record.id}>{barberHeader}{showDateHeader && (<tr className="bg-gray-100 dark:bg-gray-900 sticky top-0 z-10"><td colSpan={visibleColumns.length} className="px-6 py-2 text-sm font-bold text-gray-800 dark:text-gray-200">{record.Date}</td></tr>)}<tr className={`transition-colors ${isToday ? 'today-row' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}>{visibleColumns.map(col => (<td key={col.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 relative" onClick={() => handleCellClick(record, col)}>{renderCell(record, col, index)}</td>))}</tr></Fragment>);
                            }) : ( <tr><td colSpan={visibleColumns.length} className="text-center py-10 text-gray-500">Нет данных</td></tr> )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

const BackupView = ({ backups, error, onRestore, onCreate }) => { const [confirmRestore, setConfirmRestore] = useState(null); return (<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mt-4"><ConfirmationModal isOpen={!!confirmRestore} onClose={() => setConfirmRestore(null)} onConfirm={() => { onRestore(confirmRestore); setConfirmRestore(null); }} title="Подтвердить восстановление" message={`Вы уверены, что хотите восстановить данные из файла ${confirmRestore}? Все текущие несохраненные данные будут потеряны.`} confirmText="Восстановить" confirmColor="indigo" /><div className="flex justify-between items-center mb-4"><div><h2 className="text-xl font-bold text-gray-900 dark:text-white">Резервные копии</h2><p className="text-sm text-gray-600 dark:text-gray-400">Создаются ежедневно в 3:00. Хранятся 30 дней.</p></div><button onClick={onCreate} className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700">Создать бэкап сейчас</button></div>{error && <p className="text-red-500">{error}</p>}<div className="max-h-[60vh] overflow-y-auto"><ul className="divide-y divide-gray-200 dark:divide-gray-700">{backups.map(backup => (<li key={backup} className="py-3 flex justify-between items-center"><p className="text-sm text-gray-800 dark:text-gray-200">{backup}</p><button onClick={() => setConfirmRestore(backup)} className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-md hover:bg-indigo-700">Восстановить</button></li>))}</ul></div></div>);};
const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [optionsError, setOptionsError] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = getApiBase();

  useEffect(() => {
    let mounted = true;
    const fetchOptions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/login/options`);
        if (!response.ok) throw new Error('failed');
        const data = await response.json();
        if (!mounted) return;
        const normalized = Array.isArray(data) ? data : [];
        setOptions(normalized);
        if (normalized.length === 1) {
          setUsername(normalized[0].login);
        } else if (!normalized.some((option) => option.login === username)) {
          setUsername('');
        }
        setOptionsError('');
      } catch (error) {
        if (!mounted) return;
        setOptions([]);
        setOptionsError('Не удалось загрузить список барберов');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchOptions();
    return () => {
      mounted = false;
    };
  }, [API_BASE_URL]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginError('');
    if (!username || !password) {
      setLoginError('Укажите логин и пароль');
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });
      const data = await response.json();
      if (data.success) {
        onLogin(data.token, data.username);
      } else {
        setLoginError(data.message || 'Ошибка входа');
      }
    } catch (err) {
      setLoginError('Ошибка сети. Сервер доступен?');
    }
  };

  return (
    <div className="login-container dark:bg-gray-900">
      <div className="login-card p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">Вход в CRM</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Барбер</label>
            <select value={username} onChange={(event) => setUsername(event.target.value)} disabled={loading || options.length === 0} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 leading-tight focus:outline-none focus:shadow-outline disabled:opacity-60">
              <option value="">{loading ? 'Загрузка...' : 'Выберите пользователя'}</option>
              {options.map((option) => (
                <option key={option.id || option.login} value={option.login}>
                  {option.label || option.login}
                </option>
              ))}
            </select>
            {optionsError && <p className="text-xs text-rose-500 mt-1">{optionsError}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Пароль</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          {loginError && <p className="text-red-500 text-xs italic mb-4">{loginError}</p>}
          <div className="flex items-center justify-center">
            <button type="submit" disabled={loading || options.length === 0} className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const TABLE_CONFIG = { Appointments: { name: 'Записи', icon: '🗓️' }, Schedules: { name: 'Расписание', icon: '📋', sortable: false }, Users: { name: 'Клиенты', icon: '👥' }, Cost: { name: 'Услуги', icon: '💲' }, };
const ALL_COLUMNS = { Appointments: [ { key: 'CustomerName', header: 'Клиент', editable: true, isProfileLink: true }, { key: 'Phone', header: 'Телефон', editable: true }, { key: 'Barber', header: 'Барбер', editable: true, type: 'select', optionsKey: 'barbers' }, { key: 'Date', header: 'Дата', editable: true }, { key: 'Time', header: 'Время', editable: true }, { key: 'Status', header: 'Статус', editable: true, type: 'select', optionsKey: 'statuses', align: 'center' }, { key: 'Services', header: 'Услуги', editable: true, type: 'multi-select', optionsKey: 'services' }, { key: 'UserID', header: 'UserID', editable: true }, { key: 'Reminder2hClientSent', header: 'Клиенту отправлено (2ч)', editable: true, type: 'boolean', align: 'center' }, { key: 'Reminder2hBarberSent', header: 'Мастеру отправлено (2ч)', editable: true, type: 'boolean', align: 'center' }, ], Schedules: [ { key: 'Barber', header: 'Барбер', editable: false }, { key: 'DayOfWeek', header: 'День недели', editable: false }, { key: 'Date', header: 'Дата', editable: false }, { key: 'Week', header: 'Время', editable: true, align: 'center' }, ], Users: [ { key: 'Name', header: 'Имя', editable: true, isProfileLink: true }, { key: 'Phone', header: 'Телефон', editable: true }, { key: 'TelegramID', header: 'Telegram ID', editable: true }, { key: 'Barber', header: 'Мастер', editable: true, type: 'select', optionsKey: 'barbers' }, ], Cost: [ { key: 'Uslugi', header: 'Услуга', editable: true }, { key: 'Timur', header: 'Тимур', editable: true }, { key: 'Vladimir', header: 'Владимир', editable: true }, { key: 'Alina', header: 'Алина', editable: true }, { key: 'Aleksey', header: 'Алексей', editable: true }, { key: 'Dlitelnost', header: 'Длительность', editable: true }, ], };

const LegacyTablesView = ({ session, onLogout }) => {
    const token = session?.token || null;\n    const username = session?.username || '—';
    const [loading, setLoading] = useState(true);
    const [tables, setTables] = useState({ Appointments: [], Schedules: [], Users: [], Cost: [] });
    const [dropdownOptions, setDropdownOptions] = useState({ barbers: [], services: [], statuses: [] });
    const [profileModal, setProfileModal] = useState({ isOpen: false, data: null, isLoading: false });
    const [backups, setBackups] = useState([]);
    const [backupError, setBackupError] = useState('');
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [createModalInitialData, setCreateModalInitialData] = useState(null);

    const scrollContainerRef = useRef(null);
    const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const [activeView, setActiveView] = useLocalStorage('activeView', 'Appointments');
    const [sortConfigs, setSortConfigs] = useLocalStorage('sortConfigs', { Appointments: { key: 'Date', direction: 'asc' } });
    const [hiddenColumns, setHiddenColumns] = useLocalStorage('hiddenColumns', { Appointments: ['UserID'], Schedules: [], Users: [], Cost: [] });
    const [selectedBarber, setSelectedBarber] = useLocalStorage('selectedBarber', 'all');
    const [hiddenStatuses, setHiddenStatuses] = useLocalStorage('hiddenStatuses_v2', []);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => { const root = window.document.documentElement; const body = window.document.body; root.classList.add('dark'); body.classList.add('bg-gray-900'); body.classList.remove('bg-gray-50'); }, []);

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const handleScroll = () => {
            const st = el.scrollTop;
            if (st > lastScrollTop && st > 100) { setIsHeaderScrolled(true); }
            else if (st < lastScrollTop) { setIsHeaderScrolled(false); }
            setLastScrollTop(st <= 0 ? 0 : st);
        };
        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    const [isFieldsModalOpen, setIsFieldsModalOpen] = useState(false);
    const [isStatusFilterModalOpen, setStatusFilterModalOpen] = useState(false);

    const fetchData = useCallback(async (token) => { if (!token) return; try { const headers = { 'Authorization': `Bearer ${token}` }; const tableNames = Object.keys(TABLE_CONFIG); const responses = await Promise.all([ ...tableNames.map(name => fetch(`${API_BASE_URL}/${name}`, { headers, cache: 'no-store' })), fetch(`${API_BASE_URL}/options/appointments`, { headers, cache: 'no-store' }), fetch(`${API_BASE_URL}/backups/list`, { headers, cache: 'no-store' }), ]); const data = {}; for(let i = 0; i < tableNames.length; i++){ if(responses[i].ok) data[tableNames[i]] = await responses[i].json(); } if(responses[tableNames.length].ok) setDropdownOptions(await responses[tableNames.length].json()); if(responses[tableNames.length + 1].ok) setBackups(await responses[tableNames.length + 1].json()); else setBackupError('Не удалось загрузить бэкапы'); setTables(prev => ({...prev, ...data})); } catch (error) { console.error("Ошибка при загрузке данных:", error); } finally { setLoading(false); } }, []);
    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }
        fetchData(token);
        const intervalId = setInterval(() => {
            console.log('Обновление данных по интервалу...');
            fetchData(token);
        }, 10000);
        return () => clearInterval(intervalId);
    }, [token, fetchData]);

    const apiRequest = async (url, options = {}) => {
        if (!token) throw new Error('Токен отсутствует');
        const headers = { ...options.headers, 'Authorization': `Bearer ${token}` };
        const response = await fetch(url, { ...options, headers });
        if (response.status === 401 || response.status === 403) {
            if (onLogout) {
                onLogout();
            }
        }
        return response;
    }; const response = await fetch(url, { ...options, headers }); if(response.status === 401 || response.status === 403) handleLogout(); return response; };
    const handleUpdate = async (recordId, data) => { const originalTables = JSON.parse(JSON.stringify(tables)); setTables(prev => ({...prev, [activeView]: prev[activeView].map(r => r.id === recordId ? {...r, ...data} : r)})); try { const recordToUpdate = originalTables[activeView].find(r => r.id === recordId); const bodyData = activeView === 'Schedules' ? { ...recordToUpdate, ...data } : data; const response = await apiRequest(`${API_BASE_URL}/${activeView}/${recordId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(bodyData) }); if (!response.ok) throw new Error('Update failed on server'); } catch (error) { console.error(`Ошибка обновления в ${activeView}:`, error); setTables(originalTables); } };
    const handleDelete = async (recordId) => { const originalTables = JSON.parse(JSON.stringify(tables)); setTables(prev => ({...prev, [activeView]: prev[activeView].filter(r => r.id !== recordId)})); try { const response = await apiRequest(`${API_BASE_URL}/${activeView}/${recordId}`, { method: 'DELETE' }); if (!response.ok) throw new Error('Delete failed on server'); } catch(error) { console.error(`Ошибка удаления из ${activeView}:`, error); setTables(originalTables); } };
    const handleSaveNewRecord = async (data) => { try { const response = await apiRequest(`${API_BASE_URL}/${activeView}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); if (!response.ok) { const errData = await response.json(); throw new Error(errData.error || "Create failed"); } const newRecord = await response.json(); setTables(prev => ({ ...prev, [activeView]: [...prev[activeView], newRecord] })); setCreateModalOpen(false); } catch (error) { console.error(`Ошибка создания в ${activeView}:`, error); alert(`Не удалось создать запись. Ошибка: ${error.message}`); } };
    const openCreateModal = (initialData = {}) => { setCreateModalInitialData(initialData); setCreateModalOpen(true); };
    const createNonWorkingAppointment = () => { openCreateModal({ CustomerName: 'Нерабочее время', Status: 'Заблокировано' }); };
    const handleOpenProfile = async (name) => { if (profileModal.isLoading || profileModal.isOpen) return; setProfileModal({ isOpen: true, data: null, isLoading: true }); try { const response = await apiRequest(`${API_BASE_URL}/user-profile/${encodeURIComponent(name)}`); if(!response.ok) throw new Error("Failed to fetch profile"); const profileData = await response.json(); setProfileModal({ isOpen: true, data: profileData, isLoading: false }); } catch (error) { console.error("Ошибка загрузки профиля:", error); setProfileModal({ isOpen: false, data: null, isLoading: false }); } };
    const handleRestoreBackup = async (filename) => { try { const response = await apiRequest(`${API_BASE_URL}/backups/restore`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ filename }) }); if(!response.ok) throw new Error("Restore failed"); alert('Восстановление успешно! Перезагрузка данных...'); fetchData(token); } catch (error) { console.error('Ошибка восстановления:', error); alert('Ошибка восстановления. См. консоль'); } };
    const handleCreateBackup = async () => { try { const response = await apiRequest(`${API_BASE_URL}/backups/create`, { method: 'POST' }); if(!response.ok) throw new Error("Create backup failed"); alert('Бэкап создан!'); fetchData(token); } catch(error) { alert('Ошибка создания бэкапа'); }};

    const sortConfig = sortConfigs[activeView] || null;
    const setSortConfig = (newConfig) => setSortConfigs(prev => ({ ...prev, [activeView]: newConfig }));

    const processedData = useMemo(() => {
        let data = [...(tables[activeView] || [])];
        if (TABLE_CONFIG[activeView]?.sortable !== false && sortConfig !== null) {
            data.sort((a, b) => {
                if (sortConfig.key === 'Date') {
                    const dateComparison = (a.Date || '').localeCompare(b.Date || '');
                    if (dateComparison !== 0) { return sortConfig.direction === 'asc' ? dateComparison : -dateComparison; }
                    const timeA = (a.Time || '').split('-')[0].trim();
                    const timeB = (b.Time || '').split('-')[0].trim();
                    const timeComparison = timeA.localeCompare(timeB);
                    return sortConfig.direction === 'asc' ? timeComparison : -timeComparison;
                }
                const valA = a[sortConfig.key]; const valB = b[sortConfig.key];
                if (valA === null || valA === undefined) return 1; if (valB === null || valB === undefined) return -1;
                const comparison = String(valA).localeCompare(String(valB), undefined, { numeric: true });
                return sortConfig.direction === 'asc' ? comparison : -comparison;
            });
        }
        if (selectedBarber !== 'all' && (activeView === 'Appointments' || activeView === 'Schedules')) { data = data.filter(item => item.Barber === selectedBarber); }
        if (activeView === 'Appointments' && hiddenStatuses.length > 0) { data = data.filter(item => !hiddenStatuses.includes(item.Status)); }
        if (searchTerm) { const lowercasedTerm = searchTerm.toLowerCase(); data = data.filter(record => Object.values(record).some(value => String(value).toLowerCase().includes(lowercasedTerm))); }
        return data;
    }, [tables, activeView, selectedBarber, sortConfig, searchTerm, hiddenStatuses]);

    const toggleColumn = (columnKey) => { setHiddenColumns(prev => { const currentHidden = prev[activeView] || []; const newHidden = currentHidden.includes(columnKey) ? currentHidden.filter(key => key !== columnKey) : [...currentHidden, columnKey]; return { ...prev, [activeView]: newHidden }; }); };
    const toggleStatus = (status) => { setHiddenStatuses(prev => prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]); };
    const handleLogin = (token, username) => setSession({ token, username });
    const handleLogout = () => { if (onLogout) onLogout(); };

    if (!token) {
        return (<div className="p-8 text-center text-gray-500 dark:text-gray-300">Необходимо войти в систему, чтобы работать с таблицами.</div>);
    }
    if (loading) return <SkeletonLoader />;

    return (
        <div ref={scrollContainerRef} className="dark:bg-gray-900 dark:text-gray-200 h-screen flex flex-col overflow-y-auto overflow-x-hidden">
            <div className={`app-header sticky top-0 z-20 bg-gray-900/80 backdrop-blur-sm transition-transform duration-300 ${isHeaderScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
                <div className="p-2 sm:p-6 lg:p-8 pb-0">
                    <header className="main-header mb-6 flex justify-between items-start flex-shrink-0">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">CRM Панель</h1>
                            <div className="flex items-center gap-4 mt-2">
                                <p className="text-gray-600 dark:text-gray-400">Пользователь: <span className="font-bold">{username}</span></p>
                                <button onClick={handleLogout} className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">Выйти</button>
                            </div>
                        </div>
                    </header>
                    <div className="controls-header mb-4 flex-shrink-0">
                        <div className="border-b border-gray-200 dark:border-gray-700">
                            <nav className="-mb-px flex space-x-2 sm:space-x-6 overflow-x-auto">
                                {Object.keys(TABLE_CONFIG).map(tableName => (<button key={tableName} onClick={() => setActiveView(tableName)} className={`${ activeView === tableName ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}><span className="text-lg sm:text-xl">{TABLE_CONFIG[tableName].icon}</span><span>{TABLE_CONFIG[tableName].name}</span></button>))}
                                <button onClick={() => setActiveView('Backups')} className={`${ activeView === 'Backups' ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}><BackupIcon /><span>Бэкапы</span></button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <main className="p-2 sm:p-6 lg:p-8 flex flex-col flex-grow">
                 {['Appointments', 'Schedules', 'Users', 'Cost'].includes(activeView) && (
                    <div className="bg-white dark:bg-gray-800 p-3 my-4 rounded-lg shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-4 controls-container">
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            {activeView !== 'Schedules' && <button onClick={() => openCreateModal()} className="px-3 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors w-1/2 sm:w-auto">+ Добавить</button>}
                            {activeView === 'Appointments' && <button onClick={createNonWorkingAppointment} className="px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors w-1/2 sm:w-auto">Нерабочее</button>}
                        </div>
                        <div className="relative flex-grow w-full sm:w-auto sm:max-w-xs"><div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><SearchIcon /></div><input type="text" placeholder="РџРѕРёСЃРє..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/></div>
                        {(activeView === 'Appointments' || activeView === 'Schedules') && (<div className="flex-shrink-0 w-full sm:w-auto"><select id="barber-select" value={selectedBarber} onChange={(e) => setSelectedBarber(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"><option value="all">Все барберы</option>{(dropdownOptions.barbers || []).map(barber => <option key={barber} value={barber}>{barber}</option>)}</select></div>)}
                        <div className="flex items-center gap-4 sm:ml-auto w-full sm:w-auto justify-end">
                            {activeView === 'Appointments' && <button onClick={() => setStatusFilterModalOpen(true)} className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><span className="hidden sm:inline">Статусы</span><FilterIcon /></button>}
                            <button onClick={() => setIsFieldsModalOpen(true)} className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><span className="hidden sm:inline">Поля</span><FieldsIcon /></button>
                        </div>
                    </div>
                 )}
                <div className="flex-grow overflow-hidden">
                    {['Appointments', 'Schedules', 'Users', 'Cost'].includes(activeView) && <DataTable data={processedData} columns={ALL_COLUMNS[activeView]} hiddenColumns={hiddenColumns[activeView]} onUpdate={handleUpdate} onDelete={handleDelete} options={dropdownOptions} sortConfig={sortConfig} setSortConfig={setSortConfig} onOpenProfile={handleOpenProfile} activeTable={activeView} />}
                    {activeView === 'Backups' && <BackupView backups={backups} error={backupError} onRestore={handleRestoreBackup} onCreate={handleCreateBackup} />}
                </div>
            </main>
            {isCreateModalOpen && <CreateRecordModal isOpen={isCreateModalOpen} onClose={() => setCreateModalOpen(false)} onSave={handleSaveNewRecord} columns={ALL_COLUMNS[activeView]} options={dropdownOptions} tableName={TABLE_CONFIG[activeView].name} initialData={createModalInitialData} />}
            <FieldsModal isOpen={isFieldsModalOpen} onClose={() => setIsFieldsModalOpen(false)} columns={activeView in ALL_COLUMNS ? ALL_COLUMNS[activeView] : []} hiddenColumns={hiddenColumns[activeView]} toggleColumn={toggleColumn} />
            <StatusFilterModal isOpen={isStatusFilterModalOpen} onClose={() => setStatusFilterModalOpen(false)} statuses={dropdownOptions.statuses} hiddenStatuses={hiddenStatuses} toggleStatus={toggleStatus} />
            <UserProfileModal isOpen={profileModal.isOpen} onClose={() => setProfileModal({ isOpen: false, data: null, isLoading: false })} profileData={profileModal.data} isLoading={profileModal.isLoading}/>
        </div>
    );
};

window.LegacyTablesView = LegacyTablesView;
})();
