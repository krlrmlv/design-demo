import type { Preview } from '@storybook/react';
import React from 'react';
import localFont from 'next/font/local';

import '@theme/scss/globals.scss';
// import results from '../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

// export const inter = localFont({
// 	src: [
// 		{
// 			path: '../src/shared/ui/theme/scss/fonts/Inter/Inter-Regular.woff2',
// 			weight: '400'
// 		},
// 		{
// 			path: '../src/shared/ui/theme/scss/fonts/Inter/Inter-SemiBold.woff2',
// 			weight: '600'
// 		}
// 	],
// 	variable: '--inter-font'
// });

// TODO заменить импорт на Атомовский шрифт

const preview: Preview = {
	parameters: {
		nextjs: {
			appDirectory: true
		},
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			},
			expanded: true
		}
	},
	decorators: [
		(Story) => (
			// подключение шрифтов и стилей, которые наследуются className={inter.variable}
			<div data-css='root'>
				<Story />
			</div>
		)
		// withTests({
		// 	results
		// })
	]
};

export default preview;
