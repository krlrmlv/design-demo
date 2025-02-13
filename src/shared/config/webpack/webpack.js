const path = require('path');

const rootPath = path.resolve(__dirname, '../../../../');
const srcPath = path.resolve(rootPath, 'src');

/** @param config {import('webpack').Configuration} */
const patchWebpackConfig = (config, webpack, isServer) => {
	config.resolve.alias = {
		...config.resolve.alias,
		'@theme': srcPath + '/shared/ui/theme/scss'
	};

	if (isServer) config.resolve.alias['msw/browser'] = false;
	else config.resolve.alias['msw/node'] = false;

	// Grab the existing rule that handles SVG imports
	const svgRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
	config.module.rules.push(
		// Reapply the existing rule, but only for svg imports ending in ?url
		{
			...svgRule,
			test: /\.svg$/i,
			resourceQuery: /url/ // *.svg?url
		},
		// Convert all other *.svg imports to React components
		{
			test: /\.svg$/i,
			// issuer: /\.[jt]sx?$/,
			resourceQuery: { not: /url/ }, // exclude if *.svg?url
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						icon: true
					}
				}
			]
		}
	);
	// Modify the file loader rule to ignore *.svg, since we have it handled now.
	svgRule.exclude = /\.svg$/i;

	config.plugins.push(
		new webpack.ProvidePlugin({
			cn: 'classnames'
		})
	);

	return config;
};

module.exports = patchWebpackConfig;
