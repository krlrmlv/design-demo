import bundleAnalyzer from '@next/bundle-analyzer';
import patchWebpackConfig from './src/shared/config/webpack/webpack.js';
import withSerwistInit from '@serwist/next';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true'
});

dotenv.config({ path: path.resolve(__dirname, '.env') });

// const withSerwist = withSerwistInit({
// 	swSrc: 'src/app/sw.ts',
// 	swDest: 'public/sw.js',
// 	cacheOnNavigation: true,
// 	reloadOnOnline: true
// });

const config = {
	trailingSlash: false,
	//false для теста! Локально лучше ставить true
	reactStrictMode: false,
	webpack: (config, { webpack, isServer }) => patchWebpackConfig(config, webpack, isServer),
	images: {
		deviceSizes: [768, 1024, 1440],
		imageSizes: [140, 167, 223, 500],
		minimumCacheTTL: 60,
		remotePatterns: [
			{ protocol: 'https', hostname: '**' },
			{ protocol: 'http', hostname: '**' }
		]
	},

	swcMinify: true,
	crossOrigin: 'anonymous',
	experimental: {
		externalDir: true,
		optimizePackageImports: ['swiper']
	},
	headers: async () => [
		{
			source: '/:path*',
			headers: [
				{
					key: 'X-DNS-Prefetch-Control',
					value: 'on'
				}
			]
		},
		{
			source: '/sw.js',
			headers: [
				{
					key: 'Content-Type',
					value: 'application/javascript; charset=utf-8'
				},
				{
					key: 'Cache-Control',
					value: 'no-cache, no-store, must-revalidate'
				}
				// {
				//   key: 'Content-Security-Policy',
				//   value: "default-src 'self'; script-src 'self'"
				// }
			]
		}
	]
};

// Injected content via Sentry wizard below

export default withBundleAnalyzer(
	// withSerwist(
	config
	// )
);
