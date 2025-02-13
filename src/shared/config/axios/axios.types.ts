import { type AxiosError } from 'axios';

export type APIError = Error | AxiosError | string;

export const APIErrorResponseCodes = {
	// символьный код ошибки, по умолчанию содержит код согласно http-коду ответа, может быть заменен на
	// произвольный/согласованный, если требуются дополнительные действия/разграничение действий на стороне фронта
	'OK': 'OK/УСПЕХ', // успех
	'BAD_REQUEST': 'BAD_REQUEST',  // плохой запрос
	'UNAUTHORIZED': 'UNAUTHORIZED',  // требуется авторизация
	'FORBIDDEN': 'FORBIDDEN',  // доступ запрещен
	'NOT_FOUND': 'NOT_FOUND', //  ресурс не найден
	'METHOD_NOT_ALLOWED': 'METHOD_NOT_ALLOWED',  // метод не поддерживается
	'CONFLICT': 'CONFLICT',  // конфликт данных
	'INTERNAL_SERVER_ERROR': 'INTERNAL_SERVER_ERROR'  // ошибка сервера
};

export interface APIErrorResponseError {
	message: string;
	debug: {
		class: string;
		file: string;
		trace: string;
	};
	fields?: Record<string, any>;
	id?: ID;
}

export interface APIErrorResponse { // поле data при неудачном запросе
	code: keyof typeof APIErrorResponseCodes;
	error: APIErrorResponseError; // содержит дополнительную информацию по ошибке
	message: string; // локализованный текст ошибки для вывода пользователю
}

export interface ApiResponse<T> {
	data?: T;
	status?: number;
	error?: string;
}

