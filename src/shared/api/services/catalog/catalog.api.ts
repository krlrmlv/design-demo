import { ICatalogProducts } from '@/shared/api/services/catalog/catalog.types';
import { ApiResponse } from '@/shared/config/axios';
import { makeRequest } from '@/shared/config/axios/makeRequest';

export const CATALOG_ENDPOINTS = { products: '/products' };

export class CatalogApi {
	static async getProducts({ page = 1 }: { page: number }): Promise<ApiResponse<ICatalogProducts>> {
		return makeRequest<ICatalogProducts>({
			url: CATALOG_ENDPOINTS.products + `?page=${page}`
		});
	}
}
