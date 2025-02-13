import type { FC } from 'react';

import styles from './Errors.module.scss';

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export const ErrorPage: FC<ErrorProps> = ({ error, reset }) => {
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>Internal server error: {error.message}</h1>
			<p className={styles.text} onClick={() => reset()}>Something went wrong. Try to refresh this page</p>
		</div>
	);
};

export const NotFound = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>Page not found :(</h1>
			<p className={styles.text}>The page you are looking for does not exist</p>
		</div>
	);
};
