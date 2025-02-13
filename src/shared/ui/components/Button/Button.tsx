import { forwardRef } from 'react';

import { btnCls } from './Button.helpers';
import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

/**
 *
 * @param icon - иконка
 * @param iconPosition - позиция иконки "start" | "end" | "both"
 * @param size - размер "sm" | "md" | "lg"
 * @param color - цвет из набора цветов кнопки "primaryFilled" | "primaryOutlined"
 * @param isLoading - статус загрузки для кнопки
 * @param className - дополнительный класс
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			children,
			size = 'lg',
			color = 'primaryFilled',
			isLoading = false,
			onClick,
			icon,
			iconPosition = 'end',
			...rest
		},
		ref
	) => {
		const startIcon =
			icon && (iconPosition === 'start' || iconPosition === 'both') && !isLoading ? icon : null;

		const endIcon =
			icon && (iconPosition === 'end' || iconPosition === 'both') && !isLoading ? icon : null;

		const handleClick = isLoading ? () => null : onClick;

		return (
			<button
				ref={ref}
				className={btnCls({ size, color }, className)}
				onClick={handleClick}
				{...rest}
			>
				{startIcon}
				{isLoading ? <div className={styles.loader} /> : children}
				{endIcon}
			</button>
		);
	}
);

Button.displayName = 'Button';
