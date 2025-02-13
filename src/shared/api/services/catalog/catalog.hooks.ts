import { useQuery } from '@tanstack/react-query';

import { getCatalogProductsQueryOpts } from '@/shared/api/services/catalog/catalog.helpers';
import { ICatalogProducts, ICatalogProductsOpts } from '@/shared/api/services/catalog/catalog.types';
import { ApiResponse } from '@/shared/config/axios';

export const useGetCatalogProducts = (opts: ICatalogProductsOpts) => {
	const { page } = opts;
	return useQuery<ApiResponse<ICatalogProducts>, Error>({ ...getCatalogProductsQueryOpts({ page }) });
};