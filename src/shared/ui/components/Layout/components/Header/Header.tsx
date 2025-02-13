import styles from './Header.module.scss';

import CustomLink from '@/shared/ui/components/CustomLink/CustomLink';

const Header = () => {
	return (
		<header className={styles.root}>
			<CustomLink href={'/rem'}>LINK TO REM DEMO PAGE</CustomLink>
			<CustomLink href={'/px'}>LINK TO PX DEMO PAGE</CustomLink>
		</header>
	);
};

export default Header;
