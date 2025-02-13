import { createAction } from '@reduxjs/toolkit';

import { ChangeCountActionPayload } from './types';

import { AppDispatch } from '@/shared/config/store';

export const increaseCount = createAction('count/increase');
export const decreaseCount = createAction('count/decrease');
export const actionStart = createAction('count/action/start');

export const changeCount =
	({ type }: ChangeCountActionPayload) =>
		(dispatch: AppDispatch) => {
			dispatch(actionStart());
			
			setTimeout(() => {
				const action = type === 'increase' ? increaseCount : decreaseCount;
				dispatch(action());
			}, 500);
		};
