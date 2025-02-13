import React, { cloneElement, FC, HTMLProps, isValidElement } from 'react';
import { TColorKey, themeColors } from '@theme/scss/colors/colors.constants';
import classNames from 'classnames';

// import { Property } from 'csstype';
import styles from './Icon.module.scss';

import { IconList } from '@/shared/ui/components/Icon/IconList.constants';

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
	/** Иконка*/
	icon: keyof typeof IconList;
	/** Цвет из набора цветов*/
	color?: TColorKey;
	/** Тип заливки (некоторые иконки нуждаются в заливке path > stroke, а некоторым хватит fill)*/
	colorType?: 'fill' | 'stroke';
	/** Дополнительные стили*/
	className?: string;
	/** Размер (small - 16px, large - 32px, default - 24px)*/
	size?: 'large' | 'small' | 'default';
	/** Курсор*/
	cursor?: any;
	// cursor?: Property.Cursor;
	/** Блокировка иконки*/
	disabled?: boolean;
}

/**
 *
 * @param icon - иконка
 * @param size - размер (small - 16px, large - 32px, default - 24px)
 * @param color - цвет из набора цветов
 * @param colorType - тип заливки (некоторые иконки нуждаются в заливке path > stroke, а некоторым хватит fill
 * @param className - дополнительный класс
 * @param cursor - курсор
 * @param disabled - состояние
 * @param onClick - клик ивент
 */
const Icon: FC<Props> = ({
	icon,
	size,
	color = 'black',
	colorType = 'fill',
	className,
	cursor,
	disabled = false,
	onClick
}) => {
	const iconWrapperClasses = classNames(styles.iconContainer, className, {
		[styles[size ?? 'default']]: size,
		[styles.disabled]: disabled
	});

	const iconElement = IconList[icon];

	if (!isValidElement(iconElement)) return null;

	const iconProps = {
		onClick: !disabled ? onClick : () => null,
		style: {
			cursor: !disabled ? cursor : 'default',
			color: colorType === 'stroke' ? themeColors[color] : undefined
		},
		className: classNames(
			styles.icon,
			colorType === 'stroke' ? styles[color] : styles[`${color}fill`],
			{ [styles.paleGrey]: !disabled && (colorType === 'fill' || colorType === 'stroke') }
		)
	};

	return <div className={iconWrapperClasses}>{cloneElement(iconElement, iconProps)}</div>;
};

export default Icon;
