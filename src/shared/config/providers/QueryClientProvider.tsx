'use client';

import { FC, PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider as BaseClientProvider } from '@tanstack/react-query';
import { queryOptions } from 'src/shared/config/react-query';

export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient(queryOptions)
	);
	
	return <BaseClientProvider client={queryClient}>{children}</BaseClientProvider>;
};
