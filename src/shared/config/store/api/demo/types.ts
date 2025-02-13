export interface DemoReducer {
	count: number;
	isLoading: boolean;
}

export type ChangeCountType = 'increase' | 'decrease';

export interface ChangeCountActionPayload {
	type: ChangeCountType;
}
