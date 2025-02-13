import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

// @see https://tanstack.com/query/latest/docs/react/guides/ssr
export const useQueryClient = cache(
	() => new QueryClient()
);
