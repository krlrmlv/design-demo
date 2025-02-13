import styles from './ToastClose.module.scss';

import { IconList } from '@/shared/ui/components/Icon/IconList.constants';

const ToastClose = ({ closeToast }: any) => {
	return (
		<button className={styles.root} onClick={closeToast}>
			{IconList['Menu/Close_MD']}
		</button>
	);
};

export default ToastClose;
