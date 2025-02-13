import React, { FC, HTMLAttributes, PropsWithChildren, ReactNode, RefAttributes } from 'react';

import styles from './Breadcrumbs.module.scss';

import CustomLink from '@/shared/ui/components/CustomLink/CustomLink';

interface BreadcrumbsProps
	extends PropsWithChildren<HTMLAttributes<HTMLOListElement> & RefAttributes<HTMLOListElement>> {
	/** Хлебные крошки */
	breadcrumbs: any[];

	/** Разделитель */
	separator?: ReactNode;
}

const insertSeparators = (breadcrumbs: any[], separator: ReactNode) => {
	return breadcrumbs.reduce((acc, current, index) => {
		if (index < breadcrumbs.length - 1) {
			acc = acc.concat(
				current,
				<span className={styles.separator} aria-hidden={true} key={current}>
					{separator}
				</span>
			);
		} else {
			acc.push(current);
		}

		return acc;
	}, []);
};

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
	const { separator = '–', breadcrumbs, ...rest } = props;

	if (!breadcrumbs || !Array.isArray(breadcrumbs)) return null;

	const breadcrumbsArray = breadcrumbs.map((breadcrumb, index) => {
		const isLast = index === breadcrumbs.length - 1;
		return (
			<li
				className={styles.breadcrumb}
				key={`breadcrumb/${breadcrumb.url}`}
				itemProp={'itemListElement'}
				itemScope={true}
				itemType={'https://schema.org/ListItem'}
			>
				<CustomLink
					href={!isLast ? breadcrumb.url ?? '' : ''}
					title={breadcrumb.title}
					rel={index === 0 ? 'nofollow' : ''}
					itemProp={'item'}
				>
					{breadcrumb.title}
				</CustomLink>
				<meta itemProp={'position'} content={`${index + 1}`} />
			</li>
		);
	});

	if (breadcrumbsArray && breadcrumbsArray.length !== 0) {
		return (
			<ol
				className={styles.root}
				itemType={'https://schema.org/BreadcrumbList'}
				itemScope={true}
				{...rest}
			>
				{insertSeparators(breadcrumbsArray, separator)}
			</ol>
		);
	}
	return null;
};

export default Breadcrumbs;
