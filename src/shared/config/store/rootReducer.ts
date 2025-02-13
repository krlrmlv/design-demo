import { combineReducers } from '@reduxjs/toolkit';

import { demoReducer } from './api/demo/reducers';

export const rootReducer = combineReducers({
	demo: demoReducer
});

export type RootState = ReturnType<typeof rootReducer>;
