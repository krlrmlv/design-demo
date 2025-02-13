import styles from './ToastMessage.module.scss';

const ToastMessage = ({ toastProps: { data } }: Record<string, any>) => {
	return (
		<div className={styles.wrapper}>
			{data?.header && <div className={styles.header}>{data.header}</div>}
			{data?.description && <div className={styles.description}>{data.description}</div>}
		</div>
	);
};

export default ToastMessage;
