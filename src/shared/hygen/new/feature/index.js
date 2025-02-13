module.exports = {
	prompt: ({ inquirer }) => {
		const questions = [
			{
				type: 'input', name: 'feature',
				message: 'Название фичи в паскаль кейсе (например, AddToCart, AddToFavorites и т.д.): '
			}, {
				type: 'input', name: 'dir',
				message: 'Путь для вложенности, если фича относится к сущности: '
			}];
		return inquirer
			.prompt(questions)
			.then(answers => {
				const { feature, dir } = answers;
				
				const path = `features/${dir}/${feature.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase()}`;
				const absPath = `src/${path}`;
				
				return { ...answers, path, absPath, feature };
			});
	}
};