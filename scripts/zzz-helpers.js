// ZZZ-style helper components for LevelView
const ZZZ_HELPERS = `
/* ═══ ZZZ-STYLE HELPERS ═══ */

const ZzzGlowBar = ({ value, max, color = 'var(--crm-primary)', height = 6, label, showPercent = false }) => {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold">{label}</span>
          {showPercent && <span className="text-[10px] font-bold" style={{ color }}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="relative w-full overflow-hidden" style={{ height, borderRadius: 2, background: 'rgba(255,255,255,0.04)' }}>
        <div className="absolute inset-y-0 left-0 transition-all duration-700 ease-out" style={{
          width: pct + '%',
          background: 'linear-gradient(90deg, ' + color + '88, ' + color + ')',
          boxShadow: '0 0 12px ' + color + '66, 0 0 4px ' + color + '44',
          borderRadius: 2,
        }} />
        <div className="absolute inset-y-0 left-0 opacity-40" style={{
          width: pct + '%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
          borderRadius: 2,
        }} />
      </div>
    </div>
  );
};

const ZzzStatBlock = ({ label, value, unit = '', color = 'var(--crm-primary)', small = false }) => (
  <div className={'relative overflow-hidden ' + (small ? 'p-2.5' : 'p-3.5')} style={{
    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
    border: '1px solid ' + color + '22',
    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
  }}>
    <div className="absolute top-0 right-0 w-8 h-8 opacity-20" style={{
      background: 'linear-gradient(135deg, transparent 50%, ' + color + ' 50%)',
      clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
    }} />
    <p className={(small ? 'text-[9px]' : 'text-[10px]') + ' uppercase tracking-widest font-semibold mb-1'} style={{ color: color + 'aa' }}>{label}</p>
    <p className={(small ? 'text-lg' : 'text-2xl') + ' font-black text-white'} style={{ textShadow: '0 0 20px ' + color + '33' }}>
      {value}<span className={(small ? 'text-xs' : 'text-sm') + ' font-semibold ml-0.5 opacity-60'}>{unit}</span>
    </p>
  </div>
);

const ZzzRadarChart = ({ stats = [], size = 180 }) => {
  if (!stats.length) return null;
  var cx = size / 2, cy = size / 2, r = size * 0.38;
  var angleStep = (2 * Math.PI) / stats.length;
  var getPoint = function(i, val) {
    var angle = angleStep * i - Math.PI / 2;
    return { x: cx + r * val * Math.cos(angle), y: cy + r * val * Math.sin(angle) };
  };
  var gridLevels = [0.25, 0.5, 0.75, 1];
  var dataPoints = stats.map(function(s, i) { return getPoint(i, Math.min(1, s.value)); });
  var dataPath = dataPoints.map(function(p, i) { return (i === 0 ? 'M' : 'L') + p.x + ',' + p.y; }).join(' ') + 'Z';
  return (
    <svg width={size} height={size} viewBox={'0 0 ' + size + ' ' + size}>
      {gridLevels.map(function(level) {
        var pts = stats.map(function(_, i) { return getPoint(i, level); });
        return <polygon key={level} points={pts.map(function(p) { return p.x + ',' + p.y; }).join(' ')} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />;
      })}
      {stats.map(function(_, i) {
        var p = getPoint(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />;
      })}
      <polygon points={dataPoints.map(function(p) { return p.x + ',' + p.y; }).join(' ')} fill="var(--crm-primary)" fillOpacity="0.12" stroke="var(--crm-primary)" strokeWidth="2" />
      {dataPoints.map(function(p, i) {
        return <circle key={i} cx={p.x} cy={p.y} r="3" fill="var(--crm-primary)" stroke="var(--crm-surface)" strokeWidth="1.5" />;
      })}
      {stats.map(function(s, i) {
        var p = getPoint(i, 1.18);
        return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill="var(--crm-muted)" fontSize="8" fontWeight="600" letterSpacing="0.05em">{s.label}</text>;
      })}
    </svg>
  );
};

const ZzzHexBadge = ({ number, size = 56, color = 'var(--crm-primary)', label }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 56 56">
        <polygon points="28,2 52,15 52,41 28,54 4,41 4,15" fill="none" stroke={color} strokeWidth="2" opacity="0.4" />
        <polygon points="28,6 48,17 48,39 28,50 8,39 8,17" fill={color + '11'} stroke={color} strokeWidth="1" opacity="0.6" />
      </svg>
      <span className="absolute text-lg font-black" style={{ color: color, textShadow: '0 0 16px ' + color + '55' }}>{number}</span>
    </div>
    {label && <span className="text-[9px] uppercase tracking-widest text-[var(--crm-muted)] font-semibold">{label}</span>}
  </div>
);

const ZzzTrendChart = ({ history = [] }) => {
  if (history.length < 2) return <p className="text-xs text-[var(--crm-muted)] text-center py-4">Недостаточно данных для графика</p>;
  var w = 320, h = 120, pad = 24;
  var maxClients = Math.max.apply(null, history.map(function(h) { return h.actualClientVolume || 0; }).concat([1]));
  var maxRetained = Math.max.apply(null, history.map(function(h) { return h.actualRetainedClients || 0; }).concat([1]));
  var maxVal = Math.max(maxClients, maxRetained);
  var getX = function(i) { return pad + (i / (history.length - 1)) * (w - pad * 2); };
  var getY = function(val) { return h - pad - (val / maxVal) * (h - pad * 2); };
  var clientPath = history.map(function(item, i) { return (i === 0 ? 'M' : 'L') + getX(i) + ',' + getY(item.actualClientVolume || 0); }).join(' ');
  var retainedPath = history.map(function(item, i) { return (i === 0 ? 'M' : 'L') + getX(i) + ',' + getY(item.actualRetainedClients || 0); }).join(' ');
  var returnPath = history.map(function(item, i) { return (i === 0 ? 'M' : 'L') + getX(i) + ',' + getY((item.actualReturnPercent || 0) * 0.5); }).join(' ');
  return (
    <div>
      <svg width="100%" viewBox={'0 0 ' + w + ' ' + h} className="overflow-visible">
        {[0, 0.25, 0.5, 0.75, 1].map(function(pct) {
          return <line key={pct} x1={pad} y1={h - pad - pct * (h - pad * 2)} x2={w - pad} y2={h - pad - pct * (h - pad * 2)} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />;
        })}
        <path d={clientPath + ' L' + getX(history.length - 1) + ',' + (h - pad) + ' L' + getX(0) + ',' + (h - pad) + ' Z'} fill="url(#zzzClientGrad)" opacity="0.3" />
        <path d={retainedPath + ' L' + getX(history.length - 1) + ',' + (h - pad) + ' L' + getX(0) + ',' + (h - pad) + ' Z'} fill="url(#zzzRetainedGrad)" opacity="0.2" />
        <path d={clientPath} fill="none" stroke="var(--crm-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={retainedPath} fill="none" stroke="#7c6fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={returnPath} fill="none" stroke="#d6b36a" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" />
        {history.map(function(item, i) {
          return <g key={i}><circle cx={getX(i)} cy={getY(item.actualClientVolume || 0)} r="3" fill="var(--crm-primary)" stroke="var(--crm-surface)" strokeWidth="1.5" /><circle cx={getX(i)} cy={getY(item.actualRetainedClients || 0)} r="3" fill="#7c6fff" stroke="var(--crm-surface)" strokeWidth="1.5" /></g>;
        })}
        {history.map(function(item, i) {
          return <text key={i} x={getX(i)} y={h - 4} textAnchor="middle" fill="var(--crm-muted)" fontSize="8" fontWeight="600">{item.month && item.month.slice(5)}</text>;
        })}
        <defs>
          <linearGradient id="zzzClientGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--crm-primary)" stopOpacity="0.4" /><stop offset="100%" stopColor="var(--crm-primary)" stopOpacity="0" /></linearGradient>
          <linearGradient id="zzzRetainedGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7c6fff" stopOpacity="0.3" /><stop offset="100%" stopColor="#7c6fff" stopOpacity="0" /></linearGradient>
        </defs>
      </svg>
      <div className="flex justify-center gap-4 mt-2">
        <div className="flex items-center gap-1"><div className="w-2 h-0.5 rounded" style={{ background: 'var(--crm-primary)' }} /><span className="text-[9px] text-[var(--crm-muted)]">Клиенты</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-0.5 rounded" style={{ background: '#7c6fff' }} /><span className="text-[9px] text-[var(--crm-muted)]">Постоянные</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-0.5 rounded" style={{ background: '#d6b36a' }} /><span className="text-[9px] text-[var(--crm-muted)]">Возврат %</span></div>
      </div>
    </div>
  );
};
`;
