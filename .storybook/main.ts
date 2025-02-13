import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import patchWebpackConfig from '@/shared/config/webpack/webpack';

const rootPath = path.resolve(__dirname, '..');

const config: StorybookConfig = {
	stories: [
		'../src/**/*.mdx',
		'../docs/**/*.mdx',
		'../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)',
		'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/addon-designs',
		'@storybook/addon-jest'
	],
	framework: {
		name: '@storybook/nextjs',
		options: {
			nextConfigPath: path.resolve(rootPath, 'next.config.js'),
			image: {
				loading: 'eager'
			}
		}
	},
	docs: {
		autodocs: 'tag'
	},
	features: {
		experimentalRSC: true
	},
	staticDirs: [
		{
			from: '../src/shared/ui/theme/scss/fonts/Inter',
			to: 'src/shared/ui/theme/scss/fonts/Inter'
		}
	],

	webpackFinal: async (config, { presets }) => {
		const webpack = (await presets.apply<any>('webpackInstance'))?.default;
		return patchWebpackConfig(config, webpack);
	}
};

export default config;
