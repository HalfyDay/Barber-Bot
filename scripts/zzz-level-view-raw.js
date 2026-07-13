const LevelView = ({ positions = [], currentBarber = null, services = [], apiRequest = null }) => {
  const [maxPrices, setMaxPrices] = useState({});
  const [loadingPrices, setLoadingPrices] = useState(false);
  const [levelProgress, setLevelProgress] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const position = useMemo(() => {
    if (!currentBarber?.positionId || !Array.isArray(positions)) return null;
    return positions.find((p) => p.id === currentBarber.positionId) || null;
  }, [positions, currentBarber]);

  const parentPosition = useMemo(() => {
    if (!position?.parentId || !Array.isArray(positions)) return null;
    return positions.find((p) => p.id === position.parentId) || null;
  }, [positions, position]);

  const isSubLevel = Boolean(position?.parentId);
  const displayPosition = isSubLevel ? parentPosition : position;

  const sortedPositions = useMemo(() => {
    if (!Array.isArray(positions) || !positions.length) return [];
    return [...positions]
      .filter((p) => !p.parentId)
      .sort((a, b) => {
        const leftOrder = Number(a?.orderIndex) || 0;
        const rightOrder = Number(b?.orderIndex) || 0;
        if (leftOrder !== rightOrder) return leftOrder - rightOrder;
        return normalizeText(a?.name).localeCompare(normalizeText(b?.name), 'ru');
      });
  }, [positions]);

  const levelNumber = displayPosition ? (Number(displayPosition.orderIndex) || 0) + 1 : null;

  const subLevels = useMemo(() => {
    if (!displayPosition?.children || !displayPosition.children.length) return [];
    return [...displayPosition.children].sort((a, b) => (Number(a?.orderIndex) || 0) - (Number(b?.orderIndex) || 0));
  }, [displayPosition]);

  const flatProgression = useMemo(() => {
    const flat = [];
    for (const root of sortedPositions) {
      if (root.children && root.children.length > 0) {
        flat.push(...[...root.children].sort((a, b) => (Number(a?.orderIndex) || 0) - (Number(b?.orderIndex) || 0)));
      } else {
        flat.push(root);
      }
    }
    return flat;
  }, [sortedPositions]);

  const currentFlatIdx = flatProgression.findIndex((p) => p.id === position?.id);
  const nextLevelPos = currentFlatIdx >= 0 && currentFlatIdx < flatProgression.length - 1 ? flatProgression[currentFlatIdx + 1] : null;

  const radarStats = useMemo(() => {
    const m = levelProgress?.liveMetrics;
    if (!m || !position) return [];
    const reqVol = Number(position.requiredClientVolume) || 1;
    const reqRet = Number(position.requiredRetainedClients) || 1;
    const reqRetPct = Number(position.targetReturnPercent) || 1;
    return [
      { label: 'КЛИЕНТЫ', value: Math.min(1, (m.actualClientVolume || 0) / reqVol) },
      { label: 'ПОСТОЯНН.', value: Math.min(1, (m.actualRetainedClients || 0) / reqRet) },
      { label: 'ВОЗВРАТ', value: Math.min(1, (m.actualReturnPercent || 0) / reqRetPct) },
      { label: 'ДОЛЯ', value: Math.min(1, (Number(position.masterSharePercent) || 0) / 100) },
    ];
  }, [levelProgress?.liveMetrics, position]);

  useEffect(() => {
    if (!position?.id || !apiRequest) return;
    let cancelled = false;
    (async () => {
      setLoadingPrices(true);
      try {
        const data = await apiRequest(`/PositionServiceMaxPrices?positionId=${encodeURIComponent(position.id)}`);
        const map = {};
        if (Array.isArray(data)) data.forEach((e) => { map[e.serviceId] = e.maxPrice; });
        if (!cancelled) setMaxPrices(map);
      } catch { if (!cancelled) setMaxPrices({}); }
      finally { if (!cancelled) setLoadingPrices(false); }
    })();
    return () => { cancelled = true; };
  }, [position?.id, apiRequest]);

  useEffect(() => {
    if (!currentBarber?.id || !apiRequest) return;
    let cancelled = false;
    (async () => {
      try {
        const data = await apiRequest(`/level-history?barberId=${encodeURIComponent(currentBarber.id)}`);
        if (!cancelled) setLevelProgress(data);
      } catch { if (!cancelled) setLevelProgress(null); }
    })();
    return () => { cancelled = true; };
  }, [currentBarber?.id, apiRequest]);

  if (!position) {
    return (
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/5 p-8 text-center" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))' }}>
          <div className="absolute inset-0 opacity-5" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)' }} />
          <p className="relative text-sm text-[var(--crm-muted)]">Должность не назначена. Обратитесь к администратору.</p>
        </div>
      </div>
    );
  }

  const promoPct = levelProgress?.promotionProgress ? Math.min(100, (levelProgress.promotionProgress.monthsMet / levelProgress.promotionProgress.monthsRequired) * 100) : 0;

  return (
    <div className="space-y-4">
      {/* ═══ HERO HEADER ═══ */}
      <div className="relative overflow-hidden rounded-2xl" style={{
        background: 'linear-gradient(135deg, var(--crm-surface-2) 0%, var(--crm-surface) 50%, var(--crm-surface-2) 100%)',
        border: '1px solid rgba(0,191,175,0.15)',
      }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(0,191,175,0.5) 8px, rgba(0,191,175,0.5) 9px)' }} />
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10" style={{ background: 'radial-gradient(circle, var(--crm-primary), transparent 70%)' }} />
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: 'linear-gradient(90deg, var(--crm-primary), transparent)' }} />
          <div className="absolute top-0 left-0 h-full w-[2px]" style={{ background: 'linear-gradient(180deg, var(--crm-primary), transparent)' }} />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <div className="absolute bottom-0 right-0 w-full h-[2px]" style={{ background: 'linear-gradient(270deg, var(--crm-primary), transparent)' }} />
          <div className="absolute bottom-0 right-0 h-full w-[2px]" style={{ background: 'linear-gradient(0deg, var(--crm-primary), transparent)' }} />
        </div>
        <div className="relative p-5 md:p-7">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <ZzzHexBadge number={levelNumber} size={72} color="var(--crm-primary)" label="УРОВЕНЬ" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight" style={{ textShadow: '0 0 30px rgba(0,191,175,0.2)' }}>
                  {displayPosition.name}
                </h1>
                {isSubLevel && (
                  <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-bold rounded-sm" style={{
                    background: 'linear-gradient(135deg, var(--crm-primary), var(--crm-primary-strong))',
                    color: 'var(--crm-primary-on)',
                  }}>{position.name}</span>
                )}
              </div>
              <p className="text-sm text-[var(--crm-muted)]">
                Уровень {levelNumber} из {sortedPositions.length}
                {subLevels.length > 0 && ` · ${subLevels.length} подуровней`}
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--crm-primary)', boxShadow: '0 0 8px var(--crm-primary)' }} />
                  <span className="text-xs text-[var(--crm-muted)]">Доля:</span>
                  <span className="text-xs font-bold text-white">{position.masterSharePercent ?? 0}%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#d6b36a', boxShadow: '0 0 8px #d6b36a' }} />
                  <span className="text-xs text-[var(--crm-muted)]">Возвращаемость:</span>
                  <span className="text-xs font-bold text-white">{position.targetReturnPercent ?? 0}%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#ff617f', boxShadow: '0 0 8px #ff617f' }} />
                  <span className="text-xs text-[var(--crm-muted)]">Объем:</span>
                  <span className="text-xs font-bold text-white">{position.requiredClientVolume ?? 0}</span>
                </div>
              </div>
              {levelProgress?.countdown && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {levelProgress.promotionProgress?.ready ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: '#fff', boxShadow: '0 0 16px rgba(34,197,94,0.3)' }}>
                      Готов к повышению
                    </span>
                  ) : levelProgress.promotionProgress?.monthsMet > 0 && levelProgress.countdown.promotionDaysLeft != null ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm" style={{ background: 'rgba(0,191,175,0.12)', color: 'var(--crm-primary)', border: '1px solid rgba(0,191,175,0.25)' }}>
                      Повышение через {levelProgress.countdown.promotionDaysLeft} дн.
                    </span>
                  ) : null}
                  {levelProgress.demotionRisk?.atRisk && levelProgress.countdown.demotionDaysLeft != null && !levelProgress.demotionRisk?.ready ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm" style={{ background: 'rgba(255,97,127,0.12)', color: '#ff617f', border: '1px solid rgba(255,97,127,0.25)' }}>
                      Понижение через {levelProgress.countdown.demotionDaysLeft} дн.
                    </span>
                  ) : null}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--crm-muted)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    Оценка через {levelProgress.countdown.daysUntilEvaluation} дн.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TAB NAV ═══ */}
      <div className="flex gap-1 p-1 rounded-xl" style={{ background: 'var(--crm-surface-2)', border: '1px solid rgba(255,255,255,0.04)' }}>
        {[{ id: 'overview', label: 'ОБЗОР' }, { id: 'progress', label: 'ПРОГРЕСС' }, { id: 'stats', label: 'СТАТИСТИКА' }, { id: 'services', label: 'УСЛУГИ' }].map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className="flex-1 py-2 text-[10px] uppercase tracking-widest font-bold rounded-lg transition-all duration-200"
            style={activeTab === tab.id ? { background: 'linear-gradient(135deg, var(--crm-primary), var(--crm-primary-strong))', color: 'var(--crm-primary-on)', boxShadow: '0 0 20px rgba(0,191,175,0.2)' } : { color: 'var(--crm-muted)' }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* ═══ TAB: OVERVIEW ═══ */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <ZzzStatBlock label="Доля мастера" value={position.masterSharePercent ?? 0} unit="%" color="var(--crm-primary)" />
            <ZzzStatBlock label="Возвращаемость" value={position.targetReturnPercent ?? 0} unit="%" color="#d6b36a" />
            <ZzzStatBlock label="Объем клиентов" value={position.requiredClientVolume ?? 0} color="#ff617f" />
            <ZzzStatBlock label="Постоянные" value={position.requiredRetainedClients ?? 0} color="#7c6fff" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-3">ПРОФИЛЬ ПЕРСОНАЖА</p>
              <div className="flex justify-center"><ZzzRadarChart stats={radarStats} size={200} /></div>
            </div>
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold">ТЕКУЩИЙ МЕСЯЦ</p>
                {levelProgress?.liveMetrics && <span className="flex items-center gap-1.5 text-[9px] text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />LIVE</span>}
              </div>
              {levelProgress?.liveMetrics ? (
                <div className="space-y-3">
                  <div>
                    <ZzzGlowBar value={levelProgress.liveMetrics.actualClientVolume || 0} max={position.requiredClientVolume || 1} color={levelProgress.liveMetrics.meetsNextNow ? '#22c55e' : 'var(--crm-primary)'} height={8} label="Клиенты" showPercent />
                    <div className="flex justify-between mt-0.5"><span className="text-[9px] text-[var(--crm-muted)]">Сейчас: {levelProgress.liveMetrics.actualClientVolume || 0}</span><span className="text-[9px] text-[var(--crm-muted)]">Цель: {position.requiredClientVolume || 0}</span></div>
                  </div>
                  <div>
                    <ZzzGlowBar value={levelProgress.liveMetrics.actualRetainedClients || 0} max={position.requiredRetainedClients || 1} color="#7c6fff" height={8} label="Постоянные" showPercent />
                    <div className="flex justify-between mt-0.5"><span className="text-[9px] text-[var(--crm-muted)]">Сейчас: {levelProgress.liveMetrics.actualRetainedClients || 0}</span><span className="text-[9px] text-[var(--crm-muted)]">Цель: {position.requiredRetainedClients || 0}</span></div>
                  </div>
                  <div>
                    <ZzzGlowBar value={levelProgress.liveMetrics.actualReturnPercent || 0} max={position.targetReturnPercent || 1} color="#d6b36a" height={8} label="Возвращаемость" showPercent />
                    <div className="flex justify-between mt-0.5"><span className="text-[9px] text-[var(--crm-muted)]">Сейчас: {(levelProgress.liveMetrics.actualReturnPercent || 0).toFixed(1)}%</span><span className="text-[9px] text-[var(--crm-muted)]">Цель: {position.targetReturnPercent || 0}%</span></div>
                  </div>
                  <div className="flex gap-2 pt-2 border-t border-white/5">
                    <span className={`px-2 py-0.5 text-[9px] rounded-sm font-bold ${levelProgress.liveMetrics.meetsCurrentNow ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
                      {levelProgress.liveMetrics.meetsCurrentNow ? 'ТЕКУШИЙ OK' : 'ТЕКУШИЙ X'}
                    </span>
                    {nextLevelPos && <span className={`px-2 py-0.5 text-[9px] rounded-sm font-bold ${levelProgress.liveMetrics.meetsNextNow ? 'bg-green-500/15 text-green-400' : 'bg-white/5 text-[var(--crm-muted)]'}`}>
                      {levelProgress.liveMetrics.meetsNextNow ? 'СЛЕДУЮЩИЙ OK' : 'СЛЕДУЮЩИЙ X'}
                    </span>}
                  </div>
                </div>
              ) : <div className="flex items-center justify-center h-32 text-xs text-[var(--crm-muted)]">Загрузка...</div>}
            </div>
          </div>
          {subLevels.length > 0 && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">ПОДУРОВНИ</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {subLevels.map((sub) => {
                  const isCurrent = sub.id === position.id;
                  return (
                    <div key={sub.id} className="relative p-3.5 rounded-lg" style={{
                      background: isCurrent ? 'linear-gradient(135deg, rgba(0,191,175,0.1), rgba(0,191,175,0.03))' : 'rgba(255,255,255,0.02)',
                      border: isCurrent ? '1px solid rgba(0,191,175,0.3)' : '1px solid rgba(255,255,255,0.04)',
                    }}>
                      {isCurrent && <div className="absolute top-0 right-0 px-2 py-0.5 text-[8px] uppercase tracking-widest font-bold" style={{ background: 'var(--crm-primary)', color: 'var(--crm-primary-on)' }}>ТЕКУЩИЙ</div>}
                      <p className={`text-sm font-bold ${isCurrent ? 'text-white' : 'text-slate-400'}`}>{sub.name}</p>
                      <div className="flex gap-3 mt-2">
                        <span className="text-[10px] text-[var(--crm-muted)]">{sub.masterSharePercent ?? 0}%</span>
                        <span className="text-[10px] text-[var(--crm-muted)]">Объем: {sub.requiredClientVolume ?? 0}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══ TAB: PROGRESS ═══ */}
      {activeTab === 'progress' && (
        <div className="space-y-4">
          {levelProgress?.countdown && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(0,191,175,0.12)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ background: 'radial-gradient(circle, var(--crm-primary), transparent)' }} />
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">ОБРАТНЫЙ ОТСЧЁТ</p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black" style={{
                    color: levelProgress.promotionProgress?.ready ? '#22c55e' : levelProgress.demotionRisk?.atRisk ? '#ff617f' : 'var(--crm-primary)',
                    textShadow: `0 0 40px ${levelProgress.promotionProgress?.ready ? 'rgba(34,197,94,0.3)' : levelProgress.demotionRisk?.atRisk ? 'rgba(255,97,127,0.3)' : 'rgba(0,191,175,0.3)'}`,
                  }}>{levelProgress.countdown.daysUntilEvaluation}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold">ДНЕЙ ДО ОЦЕНКИ</span>
                  <span className="text-[9px] text-[var(--crm-muted)] mt-1">{levelProgress.countdown.nextEvaluationDate}</span>
                </div>
                <div className="flex-1 space-y-3">
                  {levelProgress.promotionProgress?.ready ? (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
                      <p className="text-sm font-bold text-green-400">Повышение готово!</p>
                      <p className="text-[10px] text-green-400/70 mt-0.5">Вы выполнили требования 2 мес. подряд.</p>
                    </div>
                  ) : levelProgress.promotionProgress?.monthsMet > 0 ? (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(0,191,175,0.05)', border: '1px solid rgba(0,191,175,0.12)' }}>
                      <p className="text-sm font-bold text-white">Повышение: {levelProgress.promotionProgress.monthsMet}/2 мес.</p>
                      <p className="text-[10px] text-[var(--crm-muted)] mt-0.5">Выполняйте требования {levelProgress.countdown.daysUntilEvaluation} дн.</p>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <p className="text-sm font-bold text-white">Повышение: 0/2 мес.</p>
                      <p className="text-[10px] text-[var(--crm-muted)] mt-0.5">Начните выполнять требования следующего уровня.</p>
                    </div>
                  )}
                  {levelProgress.demotionRisk?.ready ? (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(255,97,127,0.08)', border: '1px solid rgba(255,97,127,0.2)' }}>
                      <p className="text-sm font-bold text-red-400">Уровень понижен!</p>
                    </div>
                  ) : levelProgress.demotionRisk?.atRisk ? (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(255,97,127,0.05)', border: '1px solid rgba(255,97,127,0.12)' }}>
                      <p className="text-sm font-bold text-amber-400">Внимание: {levelProgress.demotionRisk.monthsFailed}/3 мес.</p>
                      <p className="text-[10px] text-[var(--crm-muted)] mt-0.5">Выполните требования {levelProgress.countdown.daysUntilEvaluation} дн.</p>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.12)' }}>
                      <p className="text-sm font-bold text-green-400">Текущий уровень: OK</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {nextLevelPos && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(0,191,175,0.12)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-3">ТРЕБОВАНИЯ: {nextLevelPos.name}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Клиенты', actual: levelProgress?.liveMetrics?.actualClientVolume ?? 0, req: nextLevelPos.requiredClientVolume ?? 0, color: 'var(--crm-primary)' },
                  { label: 'Постоянные', actual: levelProgress?.liveMetrics?.actualRetainedClients ?? 0, req: nextLevelPos.requiredRetainedClients ?? 0, color: '#7c6fff' },
                  { label: 'Возвращаемость', actual: levelProgress?.liveMetrics?.actualReturnPercent ?? 0, req: nextLevelPos.targetReturnPercent ?? 0, color: '#d6b36a', isPercent: true },
                ].map((item, i) => {
                  const met = item.actual >= item.req;
                  return (
                    <div key={i} className="p-3 rounded-lg" style={{ background: met ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.02)', border: `1px solid ${met ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.04)'}` }}>
                      <p className="text-[9px] uppercase tracking-widest text-[var(--crm-muted)] mb-1">{item.label}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-black" style={{ color: met ? '#4ade80' : item.color }}>{item.isPercent ? (item.actual || 0).toFixed(1) : item.actual}</span>
                        <span className="text-xs text-[var(--crm-muted)]">/ {item.isPercent ? `${item.req}%` : item.req}</span>
                      </div>
                      <ZzzGlowBar value={item.actual} max={item.req || 1} color={met ? '#22c55e' : item.color} height={3} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {levelProgress?.history?.length > 0 && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">ИСТОРИЯ ОЦЕНОК</p>
              <div className="space-y-2">
                {levelProgress.history.map((h, i) => (
                  <div key={h.month} className="flex items-center gap-3 p-2.5 rounded-lg" style={{ background: i === 0 ? 'rgba(0,191,175,0.05)' : 'transparent', border: i === 0 ? '1px solid rgba(0,191,175,0.12)' : '1px solid transparent' }}>
                    <span className="text-xs font-mono text-[var(--crm-muted)] w-16">{h.month}</span>
                    <div className="flex gap-2 flex-1">
                      <span className={`px-1.5 py-0.5 text-[9px] rounded-sm font-bold ${h.meetsCurrentRequirements ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
                        {h.meetsCurrentRequirements ? 'ТЕКУЩИЙ OK' : 'ТЕКУШИЙ X'}
                      </span>
                      {h.nextPositionId && <span className={`px-1.5 py-0.5 text-[9px] rounded-sm font-bold ${h.meetsNextRequirements ? 'bg-green-500/15 text-green-400' : 'bg-white/5 text-[var(--crm-muted)]'}`}>
                        {h.meetsNextRequirements ? 'СЛЕДУЮЩИЙ OK' : 'СЛЕДУЮЩИЙ X'}
                      </span>}
                    </div>
                    <span className="text-[10px] text-[var(--crm-muted)]">{h.actualClientVolume} кл. / {h.actualRetainedClients} пост. / {(h.actualReturnPercent || 0).toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══ TAB: STATS ═══ */}
      {activeTab === 'stats' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <ZzzStatBlock label="Доля мастера" value={position.masterSharePercent ?? 0} unit="%" color="var(--crm-primary)" />
            <ZzzStatBlock label="Возвращаемость" value={position.targetReturnPercent ?? 0} unit="%" color="#d6b36a" />
            <ZzzStatBlock label="Объем клиентов" value={position.requiredClientVolume ?? 0} color="#ff617f" />
            <ZzzStatBlock label="Постоянные" value={position.requiredRetainedClients ?? 0} color="#7c6fff" />
            <ZzzStatBlock label="Уровень" value={levelNumber} unit={`/ ${sortedPositions.length}`} color="var(--crm-primary)" />
            <ZzzStatBlock label="Подуровень" value={isSubLevel ? subLevels.findIndex((s) => s.id === position.id) + 1 : '—'} unit={isSubLevel ? `/ ${subLevels.length}` : ''} color="#d6b36a" />
          </div>
          {levelProgress?.ranking && levelProgress.ranking.total > 1 && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">РЕЙТИНГ СРЕДИ КОЛЛЕГ</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl" style={{
                  background: levelProgress.ranking.position <= 3 ? 'linear-gradient(135deg, rgba(214,179,106,0.15), rgba(214,179,106,0.05))' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${levelProgress.ranking.position <= 3 ? 'rgba(214,179,106,0.3)' : 'rgba(255,255,255,0.06)'}`,
                }}>
                  <span className="text-2xl font-black" style={{ color: levelProgress.ranking.position <= 3 ? '#d6b36a' : 'var(--crm-muted)' }}>{levelProgress.ranking.position}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Ваша позиция</p>
                  <p className="text-xs text-[var(--crm-muted)]">{levelProgress.ranking.position} из {levelProgress.ranking.total} мастеров</p>
                </div>
                {levelProgress.ranking.position <= 3 && <span className="ml-auto px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-bold rounded-sm" style={{ background: 'linear-gradient(135deg, #d6b36a, #c49d52)', color: '#1a1408' }}>{levelProgress.ranking.position === 1 ? 'ЛУЧШИЙ' : 'ТОП-3'}</span>}
              </div>
              <div className="space-y-2">
                {levelProgress.ranking.scores.map((s, i) => {
                  const isMe = s.id === currentBarber?.id;
                  const maxScore = levelProgress.ranking.scores[0]?.score || 1;
                  return (
                    <div key={s.id} className="flex items-center gap-3 p-2 rounded-lg" style={{ background: isMe ? 'rgba(0,191,175,0.06)' : 'transparent', border: isMe ? '1px solid rgba(0,191,175,0.15)' : '1px solid transparent' }}>
                      <span className="w-5 text-center text-xs font-bold" style={{ color: i === 0 ? '#d6b36a' : i === 1 ? '#c0c0c0' : i === 2 ? '#cd7f32' : 'var(--crm-muted)' }}>{i + 1}</span>
                      <span className={`text-sm flex-1 ${isMe ? 'text-white font-bold' : 'text-slate-300'}`}>{s.name}</span>
                      <ZzzGlowBar value={s.score} max={maxScore} color={isMe ? 'var(--crm-primary)' : 'rgba(255,255,255,0.1)'} height={4} />
                      <span className="text-xs font-mono text-[var(--crm-muted)] w-10 text-right">{s.score}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {levelProgress?.history?.length > 1 && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">ТРЕНД ЗА 6 МЕСЯЦЕВ</p>
              <ZzzTrendChart history={[...levelProgress.history].reverse()} />
            </div>
          )}
          {flatProgression.length > 1 && (
            <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">ДЕРЕВО УРОВНЕЙ</p>
              <div className="space-y-1.5">
                {flatProgression.map((pos, idx) => {
                  const isCurrent = pos.id === position?.id;
                  const isPast = idx < currentFlatIdx;
                  return (
                    <div key={pos.id} className="flex items-center gap-3 p-2.5 rounded-lg" style={{ background: isCurrent ? 'rgba(0,191,175,0.08)' : 'transparent', border: isCurrent ? '1px solid rgba(0,191,175,0.2)' : '1px solid transparent' }}>
                      <div className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold" style={{ background: isCurrent ? 'var(--crm-primary)' : isPast ? 'rgba(0,191,175,0.15)' : 'rgba(255,255,255,0.04)', color: isCurrent ? 'var(--crm-primary-on)' : isPast ? 'var(--crm-primary)' : 'var(--crm-muted)' }}>{idx + 1}</div>
                      <span className={`text-sm ${isCurrent ? 'text-white font-bold' : isPast ? 'text-slate-300' : 'text-slate-500'}`}>{pos.name}</span>
                      <span className="text-[10px] text-[var(--crm-muted)] ml-auto">{pos.masterSharePercent ?? 0}%</span>
                      {isCurrent && <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--crm-primary)' }}>ТЕКУЩИЙ</span>}
                      {isPast && <span className="text-[9px] text-green-400/60">✓</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══ TAB: SERVICES ═══ */}
      {activeTab === 'services' && (
        <div className="relative overflow-hidden rounded-xl p-5" style={{ background: 'linear-gradient(135deg, var(--crm-surface-2), var(--crm-surface))', border: '1px solid rgba(255,255,255,0.04)' }}>
          <p className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold mb-4">МАКС. СТОИМОСТЬ УСЛУГ</p>
          {loadingPrices ? (
            <div className="flex items-center justify-center py-8"><div className="w-6 h-6 border-2 border-[var(--crm-primary)] border-t-transparent rounded-full animate-spin" /></div>
          ) : (
            <div className="space-y-2">
              {services.filter((s) => s.isActive !== false).map((service) => {
                const price = maxPrices[service.id];
                return (
                  <div key={service.id} className="flex items-center justify-between py-2.5 px-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                    <span className="text-sm text-slate-300">{service.name}</span>
                    <span className="text-sm font-bold text-white">{price != null ? formatCurrency(price) : '—'}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
