import classNames, { ArgumentArray } from 'classnames';

import { ButtonProps } from './IconButton.types';

import styles from './IconButton.module.scss';

export const btnCls = (
	{ size = 'lg', color = 'primaryFilled' }: ButtonProps = {},
	...args: ArgumentArray
) => {
	return classNames(styles.root, styles[size], styles[color], ...args);
};
