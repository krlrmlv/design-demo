import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

import { isDev } from '@/shared/utils/misc';

export const store = configureStore({
	reducer: rootReducer,
	devTools: isDev
});

export type AppDispatch = typeof store.dispatch;
