import { UseQueryOptions } from '@tanstack/react-query';

import { CatalogApi } from '@/shared/api/services/catalog/catalog.api';
import { ICatalogProducts, ICatalogProductsOpts } from '@/shared/api/services/catalog/catalog.types';
import { ApiResponse } from '@/shared/config/axios';

export const getCatalogProductsQueryOpts = (
	opts: ICatalogProductsOpts
): UseQueryOptions<ApiResponse<ICatalogProducts>> => {
	const { page } = opts;
	return ({
		queryKey: [`catalog-products?page=${page}`],
		queryFn: () => CatalogApi.getProducts({ page }),
		initialData: {}
	});
};
