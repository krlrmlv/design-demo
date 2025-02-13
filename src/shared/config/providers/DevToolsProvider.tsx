'use client';

import { FC, lazy, Suspense, useEffect, useState } from 'react';

import { getCookie, setCookie } from '@/shared/utils/cookies';
import { isDev } from '@/shared/utils/misc';

// название куки для того, чтобы включить девтулзы в проде
const DEV_TOOLS_COOKIE = 'devTools';

const ReactQueryDevtoolsProduction = lazy(() =>
	import('@tanstack/react-query-devtools/build/modern/production.js').then((d) => ({
		default: d.ReactQueryDevtools
	}))
);

export const DevToolsProvider: FC = () => {
	// const pathname = usePathname();
	const [isEnabled, setEnabled] = useState(false);
	
	useEffect(() => {
		setEnabled(!!getCookie(DEV_TOOLS_COOKIE) || isDev);
		
		(window as any).toggleDevtools = () =>
			setEnabled((state) => {
				setCookie(DEV_TOOLS_COOKIE, !state, { sameSite: 'none', secure: true, maxAge: 90 * 86400 });
				return !state;
			});
	}, []);
	
	// if (!isEnabled || pathname?.startsWith('/oauth')) {
	if (!isEnabled) {
		return null;
	}
	
	return (
		<Suspense fallback={null}>
			<ReactQueryDevtoolsProduction />
		</Suspense>
	);
};
