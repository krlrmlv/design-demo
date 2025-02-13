import { createReducer } from '@reduxjs/toolkit';

import { actionStart, decreaseCount, increaseCount } from './actions';
import { DemoReducer } from './types';

const initialState: DemoReducer = {
	count: 0,
	isLoading: false
};

export const demoReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(increaseCount, (state) => ({
			...state,
			count: state.count + 1,
			isLoading: false
		}))
		.addCase(decreaseCount, (state) => ({
			...state,
			count: state.count - 1,
			isLoading: false
		}))
		.addCase(actionStart, (state) => ({
			...state,
			isLoading: true
		}));
});
