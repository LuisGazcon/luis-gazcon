import React from 'react';
import type { FC } from 'react';

import styles from './footer.module.scss';
import Heading from '@/components/atoms/heading';
import Paragraph from '@/components/atoms/paragraph';
import { useTranslation } from 'next-i18next';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	const { t } = useTranslation(['footer', 'common']);

	return (
		<footer className={styles.footer}>
			<Heading level='3' className={styles.heading}>
				{t('common:title')}
			</Heading>
			<Paragraph className={styles.description}>{t('common:slogan')}</Paragraph>
			<div className={styles.columns}>
				<div>
					<Heading level='4' className={styles.columnHeading}>
						{t('footer:about')}
					</Heading>
					<Paragraph className={styles.text}>{t('common:description')}</Paragraph>
				</div>
				<div>
					<Heading level='4' className={styles.columnHeading}>
						{t('footer:follow-me-on')}
					</Heading>
					<div></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
