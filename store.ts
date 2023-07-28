function loadInitialState() {
  if (typeof window === "undefined") return { isSP: false };

  const state = (window as any).__PRELOADED_STATE__;
  delete (window as any).__PRELOADED_STATE__;
  return state;
}

export const store = new Map();

const preloadState = loadInitialState();

if (preloadState != null) {
  store.set("state", preloadState);
}
