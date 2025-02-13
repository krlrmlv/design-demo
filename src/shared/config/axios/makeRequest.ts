import { type AxiosRequestConfig } from 'axios';
import qs from 'qs';

import { APIError, ApiResponse, axiosErrorHandler, axiosInstance } from '@/shared/config/axios/index';

/**
 * Обертка для создания запроса через Axios
 *
 * @param params - конфигурация запроса
 *
 * @returns результат выполнения запроса
 */
export const makeRequest = async <T = unknown, D = unknown>(
	params: AxiosRequestConfig<D>
): Promise<ApiResponse<T>> => {
	const localParams = params;
	
	if (!localParams.paramsSerializer) {
		localParams.paramsSerializer = queryParams =>
			qs.stringify(queryParams, { encode: false, indices: false });
	}
	
	try {
		const { status, data } = await axiosInstance.request<T>(localParams);
		
		return { status: status ?? 200, data };
	} catch (err) {
		return axiosErrorHandler<T>(err as APIError);
	}
};
