/**
 * Reports Core Web Vitals (CLS, FCP, LCP, TTFB). Compatible with web-vitals v2.
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    import("web-vitals").then(({ getCLS, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
