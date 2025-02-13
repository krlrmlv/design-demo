import { createElement, FC } from 'react';
import classNames from 'classnames';

import styles from './Bubble.module.scss';

type TProps = {
	type: keyof HTMLElementTagNameMap;
	onClick(): void;
	value: string;
	variant?: 'default' | 'primary' | 'secondary';
};

const Bubble: FC<TProps> = ({ onClick, value, variant = 'default', type }) => {
	const primary = variant === 'primary';
	const secondary = variant === 'secondary';

	return createElement(
		type,
		{
			className: classNames(styles.bubble, {
				[styles.primary]: primary,
				[styles.secondary]: secondary
			}),
			onClick: onClick
		},
		<span className={classNames(styles.title)}>{value}</span>
	);
};

export default Bubble;
