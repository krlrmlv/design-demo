import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './Counter.module.scss';

import { CounterProps } from '@/shared/ui/components/Counter/Counter.types';
import Icon from '@/shared/ui/components/Icon/Icon';

/**
 *
 * @param isLoading - статус загрузки для каунтера
 * @param className - дополнительный класс
 * @param initialValue - начальное значение
 * @param minValue - минимальное значение
 * @param maxValue - максимальное значение
 * @param value - значение
 * @param onChange - ивент при изменении значения каунтера
 * @param disabled - дизейбл каунтера
 * @param label - лейбл для десктоп версии (например, "в корзине")
 */
export const Counter: FC<CounterProps> = ({
	isLoading = false,
	initialValue = 1,
	minValue = 1,
	maxValue = 99,
	value,
	onChange,
	disabled = false,
	label = 'в корзине',
	className
}) => {
	const [count, setCount] = useState(value ?? initialValue);

	useEffect(() => {
		setCount(value);
	}, [value]);

	const handleIncrement = () => {
		if (value + 1 <= maxValue) {
			const newCount = value + 1;
			onChange(newCount);
		}
	};

	const handleDecrement = () => {
		if (value - 1 >= minValue) {
			const newCount = value - 1;
			onChange(newCount);
		}
	};

	return (
		<div className={classNames(styles.root, className, { [styles.disabled]: disabled })}>
			<Icon
				icon={'Edit/Remove_Minus'}
				onClick={handleDecrement}
				disabled={value === minValue || isLoading || disabled}
				cursor={'pointer'}
			/>
			{isLoading ? (
				<div className={styles.loader} />
			) : (
				<div className={styles.count}>
					{count}
					<div className={classNames(styles.label)}>{label ? ` шт ${label}` : ''}</div>
				</div>
			)}
			<Icon
				icon={'Edit/Add_Plus'}
				cursor={'pointer'}
				onClick={handleIncrement}
				disabled={value === maxValue || isLoading || disabled}
			/>
		</div>
	);
};

Counter.displayName = 'Counter';
