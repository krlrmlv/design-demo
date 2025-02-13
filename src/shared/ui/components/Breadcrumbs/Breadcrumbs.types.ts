import { HTMLAttributes, PropsWithChildren, ReactNode, RefAttributes } from 'react';

type ExtraProps = {
	breadcrumbs: any;
	separator?: ReactNode;
};

export type BreadcrumbsProps = PropsWithChildren<
	ExtraProps & HTMLAttributes<HTMLOListElement> & RefAttributes<HTMLOListElement>
>;
