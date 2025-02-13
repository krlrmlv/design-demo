import axios from 'axios';

import { type APIError, type ApiResponse } from './axios.types';

const axiosErrorHandler = <T>(error: APIError): ApiResponse<T> => {
	// console.log(error);
	if (axios.isCancel(error)) {
		if (typeof error === 'object' && 'message' in error) {
			return { error: error.message };
		}
		
		return {};
	}
	
	// console.error(error);
	
	if (axios.isAxiosError(error)) {
		if (error.response) {
			const { status, data } = error.response;
			
			return { status, data };
		}
		
		if (error.request) {
			return { error: error.request };
		}
	}
	
	return { error: String(error) };
};

export default axiosErrorHandler;
