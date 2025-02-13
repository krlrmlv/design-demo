import classNames from 'classnames';
import Image from 'next/image';

import styles from './page.module.scss';

const PXPage = () => {
	return (
		<div className={styles.root}>
			<div className={styles.hero}>
				<Image alt='hero' src={'/hero.png'} fill className={styles.desktop} />
				<Image alt='hero' src={'/hero-mob.png'} fill className={styles.mobile} />
			</div>

			<div className={styles.firstSection}>
				<div className={styles.left}>
					<Image src={'/first-left.png'} alt='car' fill />
				</div>
				<div className={styles.right}>
					<div className={classNames(styles.desktop, styles.blackBox)}></div>
					<div className={styles.infoBlock}>
						<div className={styles.textBlock}>
							<Image alt='hero' src={'/txt.png'} fill className={styles.desktop} />
							<Image alt='hero' src={'/txt-mob.png'} fill className={styles.mobile} />
						</div>
						<div className={styles.widgetWrapper}>
							<div className={styles.widget}>
								<Image alt='widget' src={'/widget.png'} fill />
							</div>
							<div className={classNames(styles.widget, styles.mobile)}>
								<Image alt='widget' src={'/widget.png'} fill />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PXPage;
