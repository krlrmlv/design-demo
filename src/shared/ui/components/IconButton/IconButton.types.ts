import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonSize = 'sm' | 'lg';

export type ButtonColor = 'primaryFilled' | 'primaryOutlined';

export interface ButtonStyleProps {
	size?: ButtonSize;
	color?: ButtonColor;
	isLoading?: boolean;
	icon?: ReactNode;
}

export interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
		ButtonStyleProps {}
