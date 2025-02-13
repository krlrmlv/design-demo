import { forwardRef, isValidElement } from 'react';
import classNames from 'classnames';

import { btnCls } from './IconButton.helpers';
import { ButtonProps } from './IconButton.types';

import styles from './IconButton.module.scss';

/**
 *
 * @param icon - иконка
 * @param size - размер "sm" | "lg"
 * @param color - цвет из набора цветов кнопки "primaryFilled" | "primaryOutlined"
 * @param isLoading - статус загрузки для кнопки
 * @param className - дополнительный класс
 */
export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, size = 'lg', color = 'primaryFilled', isLoading = false, onClick, icon, ...rest },
		ref
	) => {
		if (!isValidElement(icon)) {
			return null;
		}

		const handleClick = isLoading ? () => null : onClick;

		const children = isLoading ? <div className={classNames(styles.loader, styles[size])} /> : icon;

		return (
			<button
				ref={ref}
				className={btnCls({ size, color }, className)}
				onClick={handleClick}
				{...rest}
			>
				{children}
			</button>
		);
	}
);

IconButton.displayName = 'IconButton';
