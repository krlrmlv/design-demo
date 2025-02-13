module.exports = {
	prompt: ({ inquirer }) => {
		const questions = [
			{
				type: 'input', name: 'widget',
				message: 'Название фичи в паскаль кейсе (например, AddToCart, AddToFavorites и т.д.): '
			}, {
				type: 'input', name: 'dir',
				message: 'Путь для вложенности, если виджет относится к глобальной сущности: '
			}];
		return inquirer
			.prompt(questions)
			.then(answers => {
				const { widget, dir } = answers;
				
				const path = `widgets/${dir}/${widget}`;
				const absPath = `src/${path}`;
				
				return { ...answers, path, absPath, widget };
			});
	}
};