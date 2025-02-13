import {
	deleteCookie as cookiesNextDeleteCookie,
	getCookie as cookiesNextGetCookie,
	getCookies as cookiesNextGetCookies,
	setCookie as cookiesNextSetCookie
} from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/';

export const path = '/';
// export const day = 24 * 60 * 60 * 1000;

/**
 * Устанавливает cookie
 * @param name - название cookie
 * @param value - значение cookie
 * @param options - дополнительные опции
 */
export const setCookie = (name: string, value: string | boolean, options: OptionsType = {}) => {
	cookiesNextSetCookie(name, value, { path, ...options });
};

/**
 * Получает значение cookie по названию
 *
 * @param name - название cookie
 * @param options - дополнительные опции
 * @returns Значение cookie
 */
export const getCookie = (name: string, options?: OptionsType) => {
	return cookiesNextGetCookie(name, options);
};

/**
 * Получает все cookie
 *
 * @param options - дополнительные опции
 * @returns Справочник со значениями cookie
 */
export const getAllCookie = (options?: OptionsType) => {
	return cookiesNextGetCookies(options);
};

/**
 * Удаляет cookie по названию
 *
 * @param name - название cookie
 * @param options - дополнительные опции
 */
export const removeCookie = (name: string, options?: OptionsType) => {
	cookiesNextDeleteCookie(name, { path, ...options });
};

export default {
	set: setCookie,
	get: getCookie,
	remove: removeCookie,
	getAll: getAllCookie
};
