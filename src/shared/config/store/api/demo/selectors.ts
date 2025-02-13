import { RootState } from '@/shared/config/store/rootReducer';

export const selectCount = (state: RootState) => state.demo.count;
export const selectIsLoading = (state: RootState) => state.demo.isLoading;
