const fs = require('fs');
let s = fs.readFileSync('crm-source/60-auth-app.js', 'utf8');

// 1. Fix setActiveCityId state setter to support functional updates and correctly write to localStorage
const oldSetActiveCityId = `  const setActiveCityId = useCallback((id) => {
    setActiveCityIdState(id);
    try { if (id) localStorage.setItem('crm.activeCityId', id); else localStorage.removeItem('crm.activeCityId'); } catch {}
  }, []);`;

const newSetActiveCityId = `  const setActiveCityId = useCallback((idOrFunc) => {
    setActiveCityIdState((prev) => {
      const nextId = typeof idOrFunc === 'function' ? idOrFunc(prev) : idOrFunc;
      try {
        if (nextId) localStorage.setItem('crm.activeCityId', nextId);
        else localStorage.removeItem('crm.activeCityId');
      } catch {}
      return nextId;
    });
  }, []);`;

if (s.includes(oldSetActiveCityId)) {
  s = s.replace(oldSetActiveCityId, newSetActiveCityId);
} else {
  console.error("WARNING: Could not find oldSetActiveCityId in crm-source/60-auth-app.js");
}

// 2. Add useEffect to trigger fetchAll on effectiveCityId changes
const searchEffect = `  useEffect(() => {
    if (session?.token) {
      fetchCities();
      fetchAllRef.current?.();
    }
  }, [Boolean(session?.token), fetchCities]);`;

const newEffect = `  useEffect(() => {
    if (session?.token) {
      fetchCities();
      fetchAllRef.current?.();
    }
  }, [Boolean(session?.token), fetchCities]);

  const isFirstCityLoadRef = useRef(true);
  useEffect(() => {
    if (isFirstCityLoadRef.current) {
      isFirstCityLoadRef.current = false;
      return;
    }
    if (session?.token) {
      fetchAll({ silent: true });
    }
  }, [effectiveCityId, fetchAll, session?.token]);`;

if (s.includes(searchEffect)) {
  s = s.replace(searchEffect, newEffect);
} else {
  console.error("WARNING: Could not find searchEffect in crm-source/60-auth-app.js");
}

// 3. Update Sidebar component usages of onCityChange to just setActiveCityId
s = s.replace(
  `onCityChange={(id) => { setActiveCityId(id); fetchAll({ silent: true }); }}`,
  `onCityChange={setActiveCityId}`
);
s = s.replace(
  `onCityChange={(id) => { setActiveCityId(id); fetchAll({ silent: true }); }}`,
  `onCityChange={setActiveCityId}`
);

fs.writeFileSync('crm-source/60-auth-app.js', s, 'utf8');
console.log('crm-source/60-auth-app.js patched successfully');
