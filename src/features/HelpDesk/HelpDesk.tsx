import Script from 'next/script';

export const HelpDesk = () => {
	return (
		<Script
			src='//hde.e-kama.com/js/contact-widget.js'
			id='hde-contact-widget'
			data-assets-host='//hde.e-kama.com'
			data-host='hde.e-kama.com'
			data-comment='Тестовое сообщение с сайта АтомАвто'
			data-lang='ru'
			data-json='{"size":30,"position":"bottom-right","direction":"top","bg":"75FBFD","color":"000000","buttons":[{"source":"chat","bg":"23869B"},{"source":"telegram","url":"https://t.me/test"}]}'
			defer
		></Script>
	);
};
