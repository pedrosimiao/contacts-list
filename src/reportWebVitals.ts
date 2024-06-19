import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'
import type { Metric } from 'web-vitals' // This assumes `Metric` is the correct type

// Define the type for the performance entry callback
type ReportHandler = (metric: Metric) => void

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry)
    // onFID(onPerfEntry) *(deprecated)*
    onINP(onPerfEntry)
    onFCP(onPerfEntry)
    onLCP(onPerfEntry)
    onTTFB(onPerfEntry)
  }
}

export default reportWebVitals

// import { ReportHandler } from 'web-vitals'

// const reportWebVitals = (onPerfEntry?: ReportHandler) => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry)
//       getFID(onPerfEntry)
//       getFCP(onPerfEntry)
//       getLCP(onPerfEntry)
//       getTTFB(onPerfEntry)
//     })
//   }
// }

// export default reportWebVitals
