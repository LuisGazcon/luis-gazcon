import React from 'react';
import type { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Anchor from '@/components/atoms/anchor';
import Heading from '@/components/atoms/heading';
import Paragraph from '@/components/atoms/paragraph';

import styles from './footer.module.scss';
import {
	GITHUB_PROFILE_URL,
	LINKED_IN_PROFILE_URL,
	NPM_PROFILE_URL,
} from '@/global/constants/contact';

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
					<div className={styles.followMeOn}>
						<Anchor target='_blank' href={NPM_PROFILE_URL}>
							NPM
						</Anchor>
						<Anchor target='_blank' href={GITHUB_PROFILE_URL}>
							GitHub
						</Anchor>
						<Anchor target='_blank' href={LINKED_IN_PROFILE_URL}>
							LinkedIn
						</Anchor>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
