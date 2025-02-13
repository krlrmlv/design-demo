import React, { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { HelpDesk } from '@/features/HelpDesk/HelpDesk';

import { DevToolsProvider } from '@/shared/config/providers/DevToolsProvider';
import { QueryClientProvider } from '@/shared/config/providers/QueryClientProvider';
import { WebVitals } from '@/shared/config/providers/WebVitals';
import { ReduxProvider } from '@/shared/config/store/ReduxProvider';
import { isDev } from '@/shared/utils/misc';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider>
			<ReduxProvider>
				<NuqsAdapter>
					<WebVitals />
					<ToastContainer />
					{children}
					<DevToolsProvider />
					{!isDev && <HelpDesk />}
				</NuqsAdapter>
			</ReduxProvider>
		</QueryClientProvider>
	);
};
