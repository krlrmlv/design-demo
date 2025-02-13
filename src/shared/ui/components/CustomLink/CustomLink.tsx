import React, { FC } from 'react';
import classNames from 'classnames';
import { LinkProps } from 'next/dist/client/link';
import Link from 'next/link';

import styles from './CustomLink.module.scss';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
	LinkProps & {
		children?: React.ReactNode;
	} & React.RefAttributes<HTMLAnchorElement>;

const CustomLink: FC<Props> = ({ href, children, ...props }) => {
	return (
		<Link
			href={href}
			className={classNames(styles.link, { [styles.disabled]: href === '' })}
			{...props}
		>
			{children}
		</Link>
	);
};

export default CustomLink;
