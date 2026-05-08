if (typeof performance === 'undefined') {
  global.performance = {
    mark: () => {},
    measure: () => {},
    clearMarks: () => {},
    clearMeasures: () => {},
    now: () => Date.now(),
  };
}
