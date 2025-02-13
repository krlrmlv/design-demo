import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// const apiUrlPublic = process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance = axios.create({
	baseURL: apiUrl
});

axiosInstance.interceptors.request.use(request => {
	// Type request middleware here
	return request;
}, error => {
	return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
	// Type response middleware here
	return response;
}, error => {
	return Promise.reject(error);
});

export default axiosInstance;
