'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
	useReportWebVitals((metric) => {
		console.log(metric);
		// switch (metric.name) {
		// 	case 'Next.js-route-change-to-render': {
		// 		console.log(metric.value);
		// 	}
		// 	case 'FCP': {
		// console.log(metric.value);
		// }
		// case 'LCP': {
		// 	console.log(metric.value);
		// }
		// ...
		// }
	});
	return <></>;
}
