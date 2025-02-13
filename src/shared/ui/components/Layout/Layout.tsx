import { FC, ReactNode } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import styles from './Layout.module.scss';

import Meta from '@/shared/meta/Meta/Meta';
import { IMetaData } from '@/shared/types/meta.types';

interface LayoutProps {
	children: ReactNode;
	meta?: IMetaData;
}

const Layout: FC<LayoutProps> = ({ children, meta }) => {
	return (
		<>
			<Meta meta={meta} />
			<div className={styles.root}>
				<Header />
				<main className={styles.content}>
					<div className={styles.main}>{children}</div>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
