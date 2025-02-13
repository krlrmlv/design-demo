import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';

import styles from './ErrorText.module.scss';

import IconError from '@/shared/assets/icons/Error/Circle_Error.svg';

interface IErrorText {
	error: string;
	className?: string;
}

const ErrorText: FC<IErrorText> = ({ error, className }) => {
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		rootRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
	});

	return (
		<span className={cn(styles.root, className)} ref={rootRef}>
			<IconError />
			<span className={styles.text}>{error}</span>
		</span>
	);
};

export default ErrorText;
