import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonColor = 'primaryFilled' | 'primaryOutlined';

export interface ButtonStyleProps {
	size?: ButtonSize;
	color?: ButtonColor;
	isLoading?: boolean;
	icon?: ReactNode;
	iconPosition?: 'start' | 'end' | 'both';
}

export interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
		PropsWithChildren,
		ButtonStyleProps {}
