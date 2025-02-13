export const isDev = process.env.NODE_ENV === 'development';

export const ArrayUtils = {
	/**
	 * Добавляет или удаляет элемент по полному совпадению в массиве
	 * @param arr - массив
	 * @param item - элемент
	 * @return новый массив
	 */
	addOrRemove: <T>(arr: T[], item: T): T[] =>
		arr.includes(item) ? arr.filter((i) => i != item) : [...arr, item],
	/**
	 * Добавляет или удаляет объект по полю id в массиве
	 * @param arr - массив
	 * @param item - элемент
	 * @return новый массив
	 */
	addOrRemoveById: (arr: Record<any, any>[], item: Record<any, any>): Record<any, any>[] =>
		arr.findIndex((i) => i.id === item.id) >= 0
			? arr.filter((i) => i.id !== item.id)
			: [item, ...arr],
	/**
	 * Проверяет равность массивов
	 * @param array1 - массив 1
	 * @param array2 - массив 2
	 * @return boolean
	 */
	areArraysEqual: (array1: string[], array2: string[]): boolean => {
		if (array1.length !== array2.length) {
			return false;
		}
		
		const sorted1 = [...array1].sort();
		const sorted2 = [...array2].sort();
		
		return sorted1.every((value, index) => value == sorted2[index]);
	},
	/**
	 * Удаляет элемент массива по заданному индексу
	 * @param array - массив
	 * @param index - индекс для удаления
	 * @return новый массив
	 */
	removeItemByIndex: (array: any[], index: number) => {
		return [...array.slice(0, index), ...array.slice(index + 1)];
	},
	/**
	 * Изменяет элемент массива по заданному индексу
	 * @param array - массив
	 * @param index - индекс для изменения
	 * @param newItem - новый элемент
	 * @return новый массив
	 */
	changeItemByIndex: (array: any[], index: number, newItem: any) => {
		return [...array.slice(0, index), newItem, ...array.slice(index + 1)];
	}
};

export const StringUtils = {
	/**
	 * Делает первую букву строчной
	 * @param str - строка
	 */
	firstLetterToLowerCase: (str: string) => {
		if (str.length === 0) {
			return str;
		}
		return str.charAt(0).toLowerCase() + str.substring(1);
	},
	/**
	 * Делает первую букву заглавной
	 * @param str - строка
	 */
	firstLetterToUpperCase: (str: string) => {
		if (str.length === 0) {
			return str;
		}
		return str.charAt(0).toUpperCase() + str.substring(1);
	}
};

/**
 * Форматирует обычное число на число (строку) с пробелами 10000 -> 10 000
 * @param number - число
 */
export const separateNumber = (number: number): string => {
	const numberFormat = new Intl.NumberFormat('ru-RU');
	return `${numberFormat.format(number)}`;
};

/**
 * Преобразует объект в json-строку
 * @param obj - объект
 */
export const objectToJson = (obj: Record<string, unknown>): string => {
	return JSON.stringify(obj, null, 0);
};
