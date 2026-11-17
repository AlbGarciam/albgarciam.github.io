// Firebase Analytics (GA4), loaded only after the visitor accepts it.
// Until then nothing is fetched, stored or sent. Config comes from VITE_FIREBASE_* variables;
// without them analytics stays fully disabled.

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const analyticsConfigured = Object.values(config).every(Boolean);

const KEY = 'analytics-consent';
const listeners = new Set();
let analytics = null;
let logEvent = null;
let starting = null;
const queue = [];

export function getConsent() {
  try {
    return localStorage.getItem(KEY); // 'granted' | 'denied' | null
  } catch {
    return null;
  }
}

/** Subscribe to consent changes (used by the banner to re-open). */
export const onConsentChange = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export function track(name, params) {
  if (getConsent() !== 'granted') return;
  if (logEvent) logEvent(analytics, name, params);
  else queue.push([name, params]);
}

function clearCookies() {
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (name.startsWith('_ga')) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  }
}

function observeInteractions() {
  document.addEventListener(
    'click',
    (event) => {
      const link = event.target.closest?.('a[href]');
      if (link) {
        const url = new URL(link.href, location.href);
        const external = url.origin !== location.origin;
        track(external ? 'outbound_click' : 'internal_link', {
          link_url: external ? url.href : url.pathname + url.hash,
          link_text: (link.textContent || '').trim().slice(0, 60),
        });
      } else if (event.target.closest?.('.nav__toggle')) {
        track('menu_toggle');
      }
    },
    { capture: true },
  );

  const seen = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        seen.unobserve(entry.target);
        track('section_view', { section_id: entry.target.id });
      }
    },
    { threshold: 0.4 },
  );
  document.querySelectorAll('section[id]').forEach((section) => seen.observe(section));
}

async function start() {
  if (!analyticsConfigured) return;
  starting ??= (async () => {
    const [{ initializeApp }, firebase] = await Promise.all([import('firebase/app'), import('firebase/analytics')]);
    if (!(await firebase.isSupported())) return;
    analytics = firebase.getAnalytics(initializeApp(config));
    logEvent = firebase.logEvent;
    firebase.setAnalyticsCollectionEnabled(analytics, true);
    for (const [name, params] of queue.splice(0)) logEvent(analytics, name, params);
    observeInteractions();
  })().catch(() => {
    starting = null;
  });
  await starting;
}

export function setConsent(granted) {
  try {
    localStorage.setItem(KEY, granted ? 'granted' : 'denied');
  } catch {
    /* storage unavailable: the choice only lasts for this page */
  }
  if (granted) start();
  else {
    queue.length = 0;
    if (analytics) {
      import('firebase/analytics').then((firebase) => firebase.setAnalyticsCollectionEnabled(analytics, false));
    }
    clearCookies();
  }
  listeners.forEach((fn) => fn());
}

/** Call once per page: resumes tracking for visitors who already accepted. */
export function initAnalytics() {
  if (getConsent() === 'granted') start();
}
