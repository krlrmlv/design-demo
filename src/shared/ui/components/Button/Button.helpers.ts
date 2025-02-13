import classNames, { ArgumentArray } from 'classnames';

import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

export const btnCls = (
	{ size = 'lg', color = 'primaryFilled' }: ButtonProps = {},
	...args: ArgumentArray
) => {
	return classNames(styles.root, styles[size], styles[color], ...args);
};
