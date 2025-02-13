const AppLevels = [{
	name: 'entities', path: `entities`
}, {
	name: 'ui-component', path: `shared/ui/components`
}];

module.exports = {
	prompt: ({ inquirer }) => {
		const questions = [{
			type: 'select', name: 'level', message: 'Уровень приложения: ', choices: AppLevels.map(level => level.name)
		}, {
			type: 'input', name: 'component_name',
			message: 'Название компонента в паскаль кейсе (например, ProductCard, CartItem, Button, CheckboxGroup и т.д.): '
		}];
		return inquirer
			.prompt(questions)
			.then(answers => {
				const { level, component_name } = answers;
				
				const appLevelPath = AppLevels.find(appLevel => appLevel.name === level).path;
				const path = `${appLevelPath}/${level === 'entities' ? component_name.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase() : component_name}`;
				const absPath = `src/${path}`;
				
				return { ...answers, path, absPath, level, component_name };
			});
	}
};