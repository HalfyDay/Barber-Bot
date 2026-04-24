const TablesWorkspace = ({
  apiRequest,
  sharedOptions,
  onOptionsUpdate,
  onOpenProfile,
  onOpenAppointmentRecord,
  onCreateAppointment,
  clients = [],
  currentUser = null,
  liveAppointments = null,
  liveUpdatedAt = null,
  liveStatus = 'unknown',
  barbers = [],
  services = [],
  onBarberFieldChange,
  onSaveBarber,
  onAddBarber,
  onDeleteBarber,
  onReorderBarbers,
  barberReorderBusy = false,
  onServiceFieldChange,
  onServicePriceChange,
  onDeleteService,
  onAddService,
  onReorderServices,
  serviceReorderBusy = false,
  onCreatePosition,
  onUpdatePosition,
  onDeletePosition,
  onActiveTableChange,
  preferredTable = null,
  onPreferredTableConsumed,
  onRequestConfirm = null,
  uploadAvatar,
  uploadCard,
  deleteAvatar,
  loadAvatarOptions,
  onBlockClient,
  onAdjustClientBs,
  dataTables = DEFAULT_DATA_TABLES,
  visibleTableOrder = DEFAULT_VISIBLE_TABLE_ORDER,
  role = ROLE_OWNER,
  applyFavoriteBarberRule = null,
}) => {
  const resolvedDataTables = useMemo(
    () => (Array.isArray(dataTables) && dataTables.length ? dataTables : DEFAULT_DATA_TABLES),
    [dataTables]
  );
  const resolvedVisibleTables = useMemo(
    () =>
      Array.isArray(visibleTableOrder) && visibleTableOrder.length
        ? visibleTableOrder
        : DEFAULT_VISIBLE_TABLE_ORDER,
    [visibleTableOrder]
  );
  const [activeTable, setActiveTable] = useLocalStorage('tables.active', 'Appointments');
  const [tables, setTables] = useState(() => resolvedDataTables.reduce((acc, table) => ({ ...acc, [table]: [] }), {}));
  const [dropdownOptions, setDropdownOptions] = useState(sharedOptions || { barbers: [], services: [], statuses: [] });
  const [tableError, setTableError] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBarber, setSelectedBarber] = useLocalStorage('tables.barberFilter', 'all');
  const [hiddenStatuses, setHiddenStatuses] = useLocalStorage('tables.hiddenStatuses', []);
  const [hiddenColumnsMap, setHiddenColumnsMap] = useLocalStorage('tables.hiddenColumns', {
    Appointments: ['UserID'],
    Schedules: [],
    Users: [],
    Positions: [],
  });
  const [sortConfigs, setSortConfigs] = useLocalStorage(
    'tables.sortConfigs',
    DEFAULT_DATA_TABLES.reduce((acc, table) => ({ ...acc, [table]: TABLE_CONFIG[table]?.defaultSort || null }), {})
  );
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [showPastAppointments, setShowPastAppointments] = useLocalStorage('tables.showPastAppointments', true);
  const [groupAppointmentsByDate, setGroupAppointmentsByDate] = useLocalStorage('tables.groupAppointmentsByDate', true);
  const [appointmentCalendarView, setAppointmentCalendarView] = useLocalStorage('tables.appointmentsCalendarView', 'week');
  const [appointmentCalendarScale, setAppointmentCalendarScale] = useLocalStorage('tables.appointmentsCalendarScale', 'normal');
  const [appointmentCalendarDate, setAppointmentCalendarDate] = useLocalStorage('tables.appointmentsCalendarDate', getLocalISODateString());
  const previousActiveTableRef = useRef(activeTable);
  const [scheduleFillDays, setScheduleFillDays] = useLocalStorage('tables.schedulesFillDays', 14);
  const restrictStaffBarberFilter = role === ROLE_STAFF && activeTable === 'Appointments';
  const staffBarberId = currentUser?.barberId || null;
  const clientInsightsLookup = useMemo(() => {
    const lookup = new Map();
    (Array.isArray(clients) ? clients : []).forEach((client) => {
      const variants = [
        client?.id,
        client?.telegramId,
        client?.TelegramID,
        client?.phone,
        client?.Phone,
        client?.name,
        client?.Name,
      ]
        .map((value) => normalizeText(value).toLowerCase())
        .filter(Boolean);
      variants.forEach((key) => {
        if (!lookup.has(key)) {
          lookup.set(key, client);
        }
      });
    });
    return lookup;
  }, [clients]);
  const staffBarberChoice = useMemo(
    () => pickBarberForUser(currentUser, dropdownOptions.barbers || []),
    [currentUser, dropdownOptions.barbers],
  );
  useEffect(() => {
    setTables((prev) =>
      resolvedDataTables.reduce((acc, table) => ({ ...acc, [table]: prev[table] || [] }), {})
    );
  }, [resolvedDataTables]);
  useEffect(() => {
    if (sharedOptions) {
      setDropdownOptions({
        ...sharedOptions,
        statuses: normalizeStatusList(sharedOptions.statuses || []),
      });
    }
  }, [sharedOptions]);
  useEffect(() => {
    if (!TABLE_CONFIG[activeTable] || !resolvedVisibleTables.includes(activeTable)) {
      setActiveTable(resolvedVisibleTables[0] || 'Appointments');
    }
  }, [activeTable, resolvedVisibleTables, setActiveTable]);
  useEffect(() => {
    onActiveTableChange?.(activeTable);
  }, [activeTable, onActiveTableChange]);
  useEffect(() => {
    const previousActiveTable = previousActiveTableRef.current;
    previousActiveTableRef.current = activeTable;
    if (activeTable !== 'Appointments' || previousActiveTable === 'Appointments') return;
    const today = getLocalISODateString();
    if (appointmentCalendarDate === today) return;
    setAppointmentCalendarDate(today);
  }, [activeTable, appointmentCalendarDate, setAppointmentCalendarDate]);
  useEffect(() => {
    if (!preferredTable) return;
    const nextTable = preferredTable;
    if (resolvedVisibleTables.includes(nextTable)) {
      setActiveTable(nextTable);
    }
    onPreferredTableConsumed?.();
  }, [preferredTable, resolvedVisibleTables, setActiveTable, onPreferredTableConsumed]);
  useEffect(() => {
    if (!restrictStaffBarberFilter) return;
    const fallback =
      staffBarberChoice ||
      (Array.isArray(dropdownOptions.barbers) && dropdownOptions.barbers.length ? dropdownOptions.barbers[0] : '');
    if (!fallback) return;
    if (selectedBarber === fallback) return;
    setSelectedBarber(fallback);
  }, [restrictStaffBarberFilter, selectedBarber, staffBarberChoice, dropdownOptions.barbers, setSelectedBarber]);
  useEffect(() => {
    setHiddenStatuses((prev) => {
      const allowedStatuses = normalizeStatusList(dropdownOptions.statuses || BOT_SUPPORTED_STATUS_OPTIONS);
      const normalized = Array.from(
        new Set(prev.map((status) => normalizeStatusValue(status)).filter((status) => allowedStatuses.includes(status)))
      );
      if (allowedStatuses.length && normalized.length >= allowedStatuses.length) {
        return [];
      }
      if (normalized.length === prev.length && normalized.every((value, index) => value === prev[index])) {
        return prev;
      }
      return normalized;
    });
  }, [dropdownOptions.statuses, setHiddenStatuses]);
  useEffect(() => {
    setSortConfigs((prev) => {
      const current = prev?.Appointments;
      if (current?.key === 'Date' && current?.direction === 'asc') {
        return { ...prev, Appointments: { ...current, direction: 'desc' } };
      }
      if (current == null) {
        return { ...prev, Appointments: { key: 'Date', direction: 'desc' } };
      }
      return prev;
    });
  }, [setSortConfigs]);
  const resolveTableEndpoint = useCallback(
    (table) =>
      table === 'Appointments'
        ? '/appointments'
        : table === 'Barbers'
          ? '/barbers'
          : table === 'Services'
            ? '/services/full'
            : table === 'Schedules'
              ? `/schedules?days=${encodeURIComponent(normalizeScheduleFillDays(scheduleFillDays))}`
              : `/${table}`,
    [scheduleFillDays]
  );
  const fetchTables = useCallback(async () => {
    setIsFetching(true);
    setTableError('');
    try {
      const shouldLoadScheduleContext = activeTable === 'Appointments';
      const [tableResponse, schedulesResponse, rawOptions] = await Promise.all([
        apiRequest(resolveTableEndpoint(activeTable)),
        shouldLoadScheduleContext ? apiRequest(resolveTableEndpoint('Schedules')) : Promise.resolve(null),
        sharedOptions ? Promise.resolve(null) : apiRequest('/options/appointments'),
      ]);
      const records =
        activeTable === 'Services'
          ? Array.isArray(tableResponse?.services)
            ? tableResponse.services
            : []
          : Array.isArray(tableResponse)
            ? tableResponse
            : [];
      const scheduleRecords = Array.isArray(schedulesResponse) ? schedulesResponse : [];
      setTables((prev) => {
        const nextTables = {
          ...prev,
          [activeTable]:
            activeTable === 'Appointments'
              ? records.map((row) => ({ ...row, Status: normalizeStatusValue(row.Status) }))
              : records,
        };
        if (shouldLoadScheduleContext) {
          nextTables.Schedules = scheduleRecords;
        }
        return nextTables;
      });
      if (rawOptions) {
        const normalizedOptions = {
          ...rawOptions,
          statuses: normalizeStatusList(rawOptions.statuses || []),
        };
        setDropdownOptions(normalizedOptions);
        onOptionsUpdate?.(normalizedOptions);
      }
    } catch (error) {
      console.error('Table fetch failed', error);
      setTableError(error.message || 'Не удалось загрузить таблицы');
    } finally {
      setIsFetching(false);
    }
  }, [activeTable, apiRequest, onOptionsUpdate, resolveTableEndpoint, sharedOptions]);
  useEffect(() => {
    fetchTables();
  }, [fetchTables]);
  const refreshPositions = useCallback(async () => {
    try {
      const records = await apiRequest('/Positions');
      setTables((prev) => ({ ...prev, Positions: Array.isArray(records) ? records : [] }));
    } catch (error) {
      console.error('Positions refresh failed', error);
      throw error;
    }
  }, [apiRequest]);
  useEffect(() => {
    if (!Array.isArray(liveAppointments)) return;
    setTables((prev) => ({
      ...prev,
      Appointments: liveAppointments.map((row) => ({
        ...row,
        Status: normalizeStatusValue(row.Status),
      })),
    }));
  }, [liveAppointments, liveUpdatedAt]);
  const currentColumns = TABLE_COLUMNS[activeTable] || [];
  const hiddenColumns = hiddenColumnsMap[activeTable] || [];
  const visibleColumns = currentColumns.filter((column) => !hiddenColumns.includes(column.key));
  const sortConfig = sortConfigs[activeTable] || TABLE_CONFIG[activeTable]?.defaultSort || null;
  const positions = tables.Positions || [];
  const processedRows = useMemo(() => {
    const tableRows = tables[activeTable] || [];
    const source =
      activeTable === 'Users' && !tableRows.length && Array.isArray(clients) && clients.length
        ? clients
        : tableRows;
    if (!source.length) return [];
    let rows = [...source];
    if (activeTable === 'Users' && clientInsightsLookup.size) {
      rows = rows.map((row) => {
        const match =
          clientInsightsLookup.get(normalizeText(row.id).toLowerCase()) ||
          clientInsightsLookup.get(normalizeText(row.TelegramID).toLowerCase()) ||
          clientInsightsLookup.get(normalizeText(row.Phone).toLowerCase()) ||
          clientInsightsLookup.get(normalizeText(row.Name).toLowerCase()) ||
          null;
        return match ? { ...row, ...match } : row;
      });
    }
    if (TABLE_CONFIG[activeTable]?.supportsBarberFilter && selectedBarber !== 'all') {
      rows = rows.filter((row) => normalizeText(row.Barber).toLowerCase() === normalizeText(selectedBarber).toLowerCase());
    }
    if (activeTable === 'Appointments') {
      const nowTs = Date.now();
      rows = rows.filter((row) => {
        if (hiddenStatuses.length && hiddenStatuses.includes(row.Status)) return false;
        if (showPastAppointments) return true;
        return shouldDisplayAppointment(row, nowTs);
      });
    }
    if (searchTerm.trim()) {
      const query = searchTerm.trim().toLowerCase();
      rows = rows.filter((row) => visibleColumns.some((column) => normalizeText(row[column.key]).toLowerCase().includes(query)));
    }
    if (sortConfig?.key) {
      const columnDef = currentColumns.find((column) => column.key === sortConfig.key);
      rows.sort((a, b) => {
        const left = resolveSortValue(a, columnDef, activeTable);
        const right = resolveSortValue(b, columnDef, activeTable);
        if (left === right) return 0;
        if (typeof left === 'number' && typeof right === 'number') {
          return sortConfig.direction === 'asc' ? left - right : right - left;
        }
        return sortConfig.direction === 'asc' ? (left > right ? 1 : -1) : left > right ? -1 : 1;
      });
    }
    return rows;
  }, [tables, activeTable, selectedBarber, hiddenStatuses, searchTerm, visibleColumns, sortConfig, showPastAppointments, clientInsightsLookup]);
  const shouldShowLoadingState = isFetching && processedRows.length === 0;
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
  useEffect(() => {
    if (!shouldShowLoadingState) {
      setShowLoadingIndicator(false);
      return undefined;
    }
    const timer = setTimeout(() => setShowLoadingIndicator(true), 180);
    return () => clearTimeout(timer);
  }, [shouldShowLoadingState]);
  const handleSort = (columnKey) => {
    setSortConfigs((prev) => {
      const current = prev[activeTable];
      const direction = current?.key === columnKey && current.direction === 'asc' ? 'desc' : 'asc';
      return { ...prev, [activeTable]: { key: columnKey, direction } };
    });
  };
  const toggleColumn = (columnKey) => {
    setHiddenColumnsMap((prev) => {
      const hidden = new Set(prev[activeTable] || []);
      if (hidden.has(columnKey)) {
        hidden.delete(columnKey);
      } else if (hidden.size < currentColumns.length - 1) {
        hidden.add(columnKey);
      }
      return { ...prev, [activeTable]: Array.from(hidden) };
    });
  };
  const toggleStatus = (status) => {
    const normalized = normalizeStatusValue(status);
    setHiddenStatuses((prev) => (prev.includes(normalized) ? prev.filter((item) => item !== normalized) : [...prev, normalized]));
  };
  const handleUpdate = async (recordId, data, { tableId: overrideTableId } = {}) => {
    if (!recordId) return;
    const tableId = overrideTableId || activeTable;
    const normalizedData =
      tableId === 'Appointments' && data?.Status !== undefined
        ? { ...data, Status: normalizeStatusValue(data.Status) }
        : data;
    const original = tables[tableId] || [];
    setTables((prev) => {
      const list = prev[tableId] || [];
      return {
        ...prev,
        [tableId]: list.map((row) => (getRecordId(row) === recordId ? { ...row, ...normalizedData } : row)),
      };
    });
    try {
      const payload =
        tableId === 'Schedules'
          ? { ...(original.find((row) => getRecordId(row) === recordId) || {}), ...normalizedData }
          : normalizedData;
      const endpoint =
        tableId === 'Appointments'
          ? `/appointments/${encodeURIComponent(recordId)}`
          : tableId === 'Barbers'
            ? `/barbers/${encodeURIComponent(recordId)}`
          : tableId === 'Services'
            ? `/services/full/${encodeURIComponent(recordId)}`
          : tableId === 'Schedules'
            ? `/schedules/${encodeURIComponent(recordId)}`
            : `/${tableId}/${encodeURIComponent(recordId)}`;
      await apiRequest(endpoint, { method: 'PUT', body: JSON.stringify(payload) });
    } catch (error) {
      console.error('Update failed', error);
      setTableError(error.message || 'Не удалось обновить запись');
      setTables((prev) => ({ ...prev, [tableId]: original }));
    }
  };
  const handleDelete = async (record, { skipConfirm = false } = {}) => {
    if (!record || activeTable === 'Schedules') return;
    const tableId = activeTable;
    const confirmCopy = (() => {
      switch (tableId) {
        case 'Users':
          return { title: 'Удалить клиента?', message: 'Клиент будет удален без возможности восстановления.' };
        case 'Appointments':
          return { title: 'Удалить запись?', message: 'Запись будет удалена без возможности восстановления.' };
        default:
          return { title: 'Удалить запись?', message: 'Запись будет удалена.' };
      }
    })();
    if (!skipConfirm) {
      const confirmed = onRequestConfirm
        ? await onRequestConfirm({
            ...confirmCopy,
            confirmLabel: 'Удалить',
            tone: 'danger',
          })
        : true;
      if (!confirmed) return;
    }
    const original = tables[tableId] || [];
    setTables((prev) => {
      const list = prev[tableId] || [];
      return { ...prev, [tableId]: list.filter((row) => getRecordId(row) !== getRecordId(record)) };
    });
    try {
      const endpoint =
        tableId === 'Appointments'
          ? `/appointments/${encodeURIComponent(record.id)}`
          : `/${tableId}/${encodeURIComponent(record.id)}`;
      await apiRequest(endpoint, { method: 'DELETE' });
    } catch (error) {
      console.error('Delete failed', error);
      setTableError(error.message || 'Не удалось удалить запись');
      setTables((prev) => ({ ...prev, [tableId]: original }));
    }
  };
  const handleCreateRecord = async (payload) => {
    const tableId = activeTable;
    setCreateModalOpen(false);
    try {
      const normalizedPayload =
        tableId === 'Appointments' && payload?.Status !== undefined
          ? { ...payload, Status: normalizeStatusValue(payload.Status) }
          : payload;
      const endpoint = tableId === 'Appointments' ? '/appointments' : `/${tableId}`;
      await apiRequest(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(normalizedPayload),
      });
      fetchTables();
    } catch (error) {
      console.error('Create failed', error);
      setTableError(error.message || 'Не удалось создать запись');
    }
  };
  const fetchClientProfile = useCallback(
    async (client) => {
      if (!client?.Name) return null;
      const payload = await apiRequest(`/user-profile/${encodeURIComponent(client.Name)}`);
      if (typeof applyFavoriteBarberRule === 'function') {
        return applyFavoriteBarberRule(payload);
      }
      return payload;
    },
    [apiRequest, applyFavoriteBarberRule]
  );
  const loadAvatarAssets = useCallback(
    () => (typeof loadAvatarOptions === 'function' ? loadAvatarOptions() : apiRequest('/assets/avatars')),
    [apiRequest, loadAvatarOptions]
  );
  const tableSettings = TABLE_CONFIG[activeTable] || {};
  const isCustomTable = tableSettings?.mode === 'custom';
  return (
    <div className="space-y-4">
      {isCustomTable ? (
        <div className="space-y-6">
          {activeTable === 'Barbers' && (
            <BarbersView
              barbers={barbers}
              positions={positions}
              onFieldChange={onBarberFieldChange}
              onSave={onSaveBarber}
              onAdd={onAddBarber}
              onDelete={onDeleteBarber}
              onReorder={onReorderBarbers}
              reorderBusy={barberReorderBusy}
              role={role}
              loadAvatarOptions={loadAvatarAssets}
              uploadAvatar={uploadAvatar}
              uploadCard={uploadCard}
              deleteAvatar={deleteAvatar}
            />
          )}
          {activeTable === 'Schedules' && (
            <SchedulesView
              schedules={tables.Schedules || []}
              barbers={barbers}
              currentUser={currentUser}
              scheduleFillDays={scheduleFillDays}
              onScheduleFillDaysChange={setScheduleFillDays}
              onScheduleUpdate={
                role === ROLE_OWNER || role === ROLE_STAFF || role === ROLE_CREATOR
                  ? (recordId, payload) => handleUpdate(recordId, payload, { tableId: 'Schedules' })
                  : null
              }
            />
          )}
          {activeTable === 'Services' && (
            <ServicesView
              services={services}
              barbers={barbers}
              onFieldChange={onServiceFieldChange}
              onPriceChange={onServicePriceChange}
              onDelete={onDeleteService}
              onAdd={onAddService}
              onReorder={onReorderServices}
              reorderBusy={serviceReorderBusy}
              role={role}
            />
          )}
          {activeTable === 'Positions' && (
            <PositionsView
              positions={positions}
              onCreate={onCreatePosition}
              onUpdate={onUpdatePosition}
              onDelete={onDeletePosition}
              onRefresh={refreshPositions}
              requestConfirm={onRequestConfirm}
            />
          )}
          {activeTable === 'Revenue' && (
            <RevenueView apiRequest={apiRequest} barbers={barbers} role={role} staffBarberId={staffBarberId} />
          )}
        </div>
      ) : (
        <>
          {tableSettings && (
        <SectionCard title={tableSettings.label} hideTitleOnMobile>
          {tableError && <ErrorBanner message={tableError} />}
          <TableToolbar
            tableId={activeTable}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            supportsBarberFilter={tableSettings.supportsBarberFilter}
            selectedBarber={selectedBarber}
            setSelectedBarber={setSelectedBarber}
            barbers={dropdownOptions.barbers}
            supportsStatusFilter={tableSettings.supportsStatusFilter}
            statuses={dropdownOptions.statuses}
            hiddenStatuses={hiddenStatuses}
            toggleStatus={toggleStatus}
            resetStatuses={() => setHiddenStatuses([])}
            columns={currentColumns}
            hiddenColumns={hiddenColumns}
            toggleColumn={toggleColumn}
            canCreate={tableSettings.canCreate}
            onOpenCreate={
              activeTable === 'Appointments'
                ? () => onCreateAppointment?.()
                : () => setCreateModalOpen(true)
            }
            onRefresh={fetchTables}
            showPastAppointments={showPastAppointments}
            setShowPastAppointments={setShowPastAppointments}
            supportsGrouping={activeTable === 'Appointments'}
            groupByDate={groupAppointmentsByDate}
            setGroupByDate={setGroupAppointmentsByDate}
            allowAllBarbersOption={!restrictStaffBarberFilter}
            appointmentCalendarView={activeTable === 'Appointments' ? appointmentCalendarView : 'week'}
            setAppointmentCalendarView={activeTable === 'Appointments' ? setAppointmentCalendarView : null}
            appointmentCalendarScale={activeTable === 'Appointments' ? appointmentCalendarScale : 'normal'}
            setAppointmentCalendarScale={activeTable === 'Appointments' ? setAppointmentCalendarScale : null}
          />
          {showLoadingIndicator ? (
            <LoadingState label="Обновляю таблицы..." />
          ) : (
            <div className="mt-4">
              {activeTable === 'Users' ? (
                <ClientsList
                  clients={processedRows}
                  barbers={dropdownOptions.barbers || []}
                  onUpdate={handleUpdate}
                  onAdjustBs={onAdjustClientBs}
                  onDelete={handleDelete}
                  fetchHistory={fetchClientProfile}
                  onRequestConfirm={onRequestConfirm}
                  onBlockClient={onBlockClient}
                />
              ) : (
                <DataTable
                  tableId={activeTable}
                  rows={processedRows}
                  columns={currentColumns}
                  hiddenColumns={hiddenColumns}
                  sortConfig={sortConfig}
                  onSort={handleSort}
                  onUpdate={handleUpdate}
                  onDelete={tableSettings.canCreate ? handleDelete : null}
                  options={dropdownOptions}
                  onOpenProfile={onOpenProfile}
                  onOpenAppointment={activeTable === 'Appointments' ? onOpenAppointmentRecord : null}
                  groupByDate={activeTable === 'Appointments' ? groupAppointmentsByDate : false}
                  appointmentCalendarView={activeTable === 'Appointments' ? appointmentCalendarView : 'week'}
                  appointmentCalendarScale={activeTable === 'Appointments' ? appointmentCalendarScale : 'normal'}
                  appointmentCalendarDate={activeTable === 'Appointments' ? appointmentCalendarDate : ''}
                  setAppointmentCalendarDate={activeTable === 'Appointments' ? setAppointmentCalendarDate : null}
                  setAppointmentCalendarView={activeTable === 'Appointments' ? setAppointmentCalendarView : null}
                  appointmentSchedules={
                    activeTable === 'Appointments'
                      ? (tables.Schedules || []).filter((row) =>
                          selectedBarber === 'all'
                            ? true
                            : normalizeText(row.Barber).toLowerCase() === normalizeText(selectedBarber).toLowerCase()
                        )
                      : []
                  }
                  onCreateAppointment={activeTable === 'Appointments' ? onCreateAppointment : null}
                />
              )}
            </div>
          )}
        </SectionCard>
      )}
          {tableSettings.canCreate && activeTable !== 'Appointments' && (
            <CreateRecordModal
              isOpen={createModalOpen}
              onClose={() => setCreateModalOpen(false)}
              onSave={handleCreateRecord}
              columns={currentColumns}
              tableName={tableSettings.label}
              options={dropdownOptions}
              tableId={activeTable}
              clients={clients}
              hiddenFields={activeTable === 'Appointments' ? ['UserID', 'Reminder2hClientSent', 'Reminder2hBarberSent'] : []}
            />
          )}
        </>
      )}
    </div>
  );
};

