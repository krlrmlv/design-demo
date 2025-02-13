import { ICatalogProducts } from '@/shared/api/services/catalog';
import { ApiResponse } from '@/shared/config/axios';
import { makeRequest } from '@/shared/config/axios/makeRequest';

export const PRODUCT_ENDPOINTS = { root: '/product', addToFavorite: '/favorite' };

export class ProductApi {
	static async addToCart(): Promise<ApiResponse<ICatalogProducts>> {
		return makeRequest<ICatalogProducts>({
			method: 'POST',
			url: PRODUCT_ENDPOINTS.root + PRODUCT_ENDPOINTS.addToFavorite
		});
	}
	
	// static async addToCart(): Promise<ApiResponse<ICatalogProducts>> {
	// 	return makeRequest<ICatalogProducts>({
	// 		method: 'POST',
	// 		url: PRODUCT_ENDPOINTS.root + PRODUCT_ENDPOINTS.addToFavorite
	// 	});
	// }
	// etc
}
