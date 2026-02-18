/**
 * Reports Core Web Vitals (CLS, FCP, LCP, TTFB).
 * Uses web-vitals v2 API; FID is deprecated and omitted.
 */
const reportWebVitals = (onPerfEntry) => {
  if (!onPerfEntry || typeof onPerfEntry !== "function") return;
  import("web-vitals")
    .then(({ getCLS, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    })
    .catch(() => {});
};

export default reportWebVitals;
