import React, { CSSProperties, FC, HTMLProps, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './Flex.module.scss';

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
	style?: Partial<CSSProperties>;
	className?: string;
}

const Flex: FC<PropsWithChildren<Props>> = ({ className, style = {}, children, ...rest }) => {
	
	const { flexDirection, alignItems, justifyContent, ...restStyles } = style;
	
	const flexClasses = classNames(styles.root, className, {
		[styles.flexColumn]: flexDirection === 'column',
		[styles.itemsCenter]: alignItems === 'center',
		[styles.itemsEnd]: alignItems === 'flex-end',
		// 'items-stretch': alignItems === 'stretch',
		// 'items-baseline': alignItems === 'baseline',
		[styles.justifyCenter]: justifyContent === 'center',
		[styles.justifyEnd]: justifyContent === 'flex-end',
		[styles.justifyBetween]: justifyContent === 'space-between',
		[styles.justifyAround]: justifyContent === 'space-around'
	});
	
	return (
		<div {...rest} className={flexClasses} style={restStyles}>
			{children}
		</div>
	);
};

export default Flex;