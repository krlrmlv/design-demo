export interface CounterProps extends Partial<Element> {
	value: number;
	onChange: (newCount: number) => void;
	isLoading?: boolean;
	initialValue?: number;
	minValue?: number;
	maxValue?: number;
	disabled?: boolean;
	label?: string;
}
