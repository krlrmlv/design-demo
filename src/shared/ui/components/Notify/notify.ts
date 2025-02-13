import { cssTransition, toast, ToastOptions } from 'react-toastify';
import { TypeOptions } from 'react-toastify';

import 'animate.css';

import { IconList } from '@/shared/ui/components/Icon/IconList.constants';
import ToastMessage from '@/shared/ui/components/Notify/ToastMessage/ToastMessage';

type MessageToastifyType = TypeOptions | 'dark';

type ToastifyType = {
	text: string;
	description?: string;
	type?: MessageToastifyType;
	params?: ToastOptions;
};

export default function notify({ text, description, type = 'default', params }: ToastifyType) {
	const getIcon = ({ typeMessage }: Record<string, MessageToastifyType>) => {
		switch (typeMessage) {
			case 'success':
				return IconList['Interface/Check'];
			case 'warning':
				return IconList['Warning/Triangle_Warning'];
			case 'error':
				return IconList['Warning/Stop_Sign'];
			case 'info':
				return IconList['Warning/Info'];
			case 'default':
				return IconList['Warning/Info'];
			case 'dark':
				return IconList['Warning/Info'];
			default:
				return undefined;
		}
	};

	const bounce = cssTransition({
		enter: 'animate__animated animate__shakeX',
		exit: 'animate__animated animate__bounceOutRight'
	});

	const config: ToastOptions = {
		position: 'top-right',
		autoClose: 50000,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		hideProgressBar: true,
		// closeButton: ToastClose,
		icon: getIcon({ typeMessage: type }),
		data: { header: text, description },
		toastId: text,
		...params
	};

	if (toast.isActive(text)) {
		toast.update(text, { ...config, transition: bounce, hideProgressBar: false });
		return;
	}

	switch (type) {
		case 'info':
			return toast.info(ToastMessage, config);
		case 'success':
			return toast.success(ToastMessage, config);
		case 'warning':
			return toast.warning(ToastMessage, config);
		case 'error':
			return toast.error(ToastMessage, config);
		case 'dark':
			return toast.dark(ToastMessage, config);
		default:
			return toast(ToastMessage, config);
	}
}
