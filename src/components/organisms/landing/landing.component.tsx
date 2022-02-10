import React from 'react';
import type { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Section from '@/components/atoms/section';
import Card from '@/components/atoms/card';
import Heading from '@/components/atoms/heading';
import Paragraph from '@/components/atoms/paragraph';
import Button from '@/components/atoms/button';
import SocialLinks from '@/components/organisms/social-links';

import styles from './landing.module.scss';

interface LandingProps {}

const Landing: FC<LandingProps> = ({}) => {
	const { t } = useTranslation();

	return (
		<Section className={styles.landing}>
			<Card className={styles.content}>
				<div className={styles.presentation}>
					<Heading level='1' className={styles.title}>
						Luis Gazcón
					</Heading>
					<Heading level='3' className={styles.slogan}>
						{t('common:slogan')}
					</Heading>
					<Paragraph className={styles.description}>{t('common:description')}</Paragraph>
					<div className={styles.callToAction}>
						<Button variant='ghost'>{t('landing:view-projects')}</Button>
						<Button>{t('landing:contact')}</Button>
					</div>
				</div>
			</Card>
			<div className={styles.right}>
				<SocialLinks className={styles.social} />
			</div>
		</Section>
	);
};

export default Landing;
