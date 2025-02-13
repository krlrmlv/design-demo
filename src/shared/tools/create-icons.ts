const fs = require('fs');
const path = require('path');

const directoryPath = path.join('./src/shared/assets/icons');

const readFiles = async (): Promise<string[]> => {
	try {
		return fs.promises
			.readdir(directoryPath, { recursive: true })
			.then((files: string[]) => files.filter((file) => file.endsWith('.svg')));
	} catch (err) {
		console.error('Unable to scan directory:', err);
		return [];
	}
};

const generateIconImportName = (iconName: string): string => {
	const name = iconName
		.split('\\')[1]
		.split('.')[0]
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/\s+/g, '')
		.replace(/-/g, '')
		.replace(/_/g, '');
	return `Icon${name.charAt(0).toUpperCase() + name.slice(1)}`;
};

const createComponents = async (icons: string[]): Promise<void> => {
	const iconListFilePath = path.join('./src/shared/ui/components/Icon/IconList.constants.tsx');
	await fs.promises.writeFile(iconListFilePath, '');

	const iconList = icons.map((iconName) => {
		const importName = generateIconImportName(iconName);
		return `import ${importName} from '@/shared/assets/icons/${iconName.replace('\\', '/')}';\r\n`;
	});
	const iconListExport = `\r\nexport const IconList = {\r\n${icons
		.map((iconName) => {
			const importName = generateIconImportName(iconName);
			const iconNameWithoutExtension = iconName.split('.')[0].replace('\\', '/');
			const iconComponent = `<${importName} />`;
			return `  '${iconNameWithoutExtension}': ${iconComponent},\r\n`;
		})
		.join('')}};\r\n`;

	await fs.promises.appendFile(iconListFilePath, iconList.join(''));
	await fs.promises.appendFile(iconListFilePath, iconListExport);
};

readFiles()
	.then((icons) => createComponents(icons))
	.then(() => console.info('Created icons ✓'))
	.catch((err) => console.error('Error creating icons:', err));
