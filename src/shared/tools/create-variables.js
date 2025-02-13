const fs = require('fs');
const path = require('path');

const jsonFiles = fs
	.readdirSync(`./src/shared/ui/theme/variables`)
	.map((file) => file.split('.')[0]);

for (const type of jsonFiles) {
	let resultSass = '';
	let resultTs = '';
	const fileData = JSON.parse(
		fs.readFileSync(`./src/shared/ui/theme/variables/${type}.json`, 'utf-8')
	);
	switch (type) {
		case 'colors':
			resultSass += "@use 'sass:list';\n" + "@use 'sass:map';\n\n" + '$themeColors: (\n';
			Object.entries(fileData).forEach(([key, value]) => {
				resultSass += `\t${key}: ${value},\n`;
			});
			resultSass += ');';

			resultTs += 'export const themeColors = {\n';
			Object.entries(fileData).forEach(([key, value]) => {
				resultTs += `\t${key}: '${value}',\n`;
			});
			resultTs += '} as const;\n\n' + 'export type TColorKey = keyof typeof themeColors;';
			break;

		case 'media':
			resultSass += "@use 'sass:map';\n";
			resultSass += `\n$breakpoints: (\n${Object.entries(fileData)
				.map(([key, value]) => `\t${key}: ${value}px`)
				.join(',\n')}\n);\n`;

			resultSass += `\n$breakpointsNames: map.keys($breakpoints);`;

			resultTs += 'export const breakpoints = {\n';
			Object.entries(fileData).forEach(([key, value]) => {
				resultTs += `\t${key}: ${value},\n`;
			});
			resultTs += '} as const;\n\n' + 'export type TBreakpointKey = keyof typeof breakpoints;';
			break;
		default:
			break;
	}
	try {
		fs.writeFileSync(path.join(`./src/shared/ui/theme/scss/${type}/_variables.scss`), resultSass);
		fs.writeFileSync(
			path.join(`./src/shared/ui/theme/scss/${type}/${type}.constants.ts`),
			resultTs
		);
		resultSass = '';
		resultTs = '';
		console.log(
			'\x1b[32m',
			type.charAt(0).toUpperCase() + type.substring(1) + ' variables successfully updated!'
		);
	} catch (e) {
		return console.error(e);
	}
}
