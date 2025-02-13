import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';

import { communityNavigation } from './layout.constants';

const CommunityLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<aside>
				<nav>
					<ol>
						{communityNavigation.map(({ href, title }) => (
							<li key={href}>
								<Link href={href}>{title}</Link>
							</li>
						))}
					</ol>
				</nav>
			</aside>
			<main>{children}</main>
		</div>
	);
};

export default CommunityLayout;
