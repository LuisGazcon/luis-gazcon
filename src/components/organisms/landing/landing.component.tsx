import React from 'react';
import type { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Section from '@/components/atoms/section';
import Card from '@/components/atoms/card';
import Heading from '@/components/atoms/heading';
import Paragraph from '@/components/atoms/paragraph';
import { Button, ButtonVariant } from '@/components/atoms/button/button.component';
import SocialLinks from '@/components/organisms/social-links';

import styles from './landing.module.scss';
import Image from 'next/image';

import Logo from '@/resources/svg/logo.svg';

export type LandingProps = {};

export const Landing: FC<LandingProps> = ({}) => {
	const { t } = useTranslation();

	return (
		<Section className={styles.landing}>
			<div className={styles.content}>
				<div className={styles.logoWrapper}>
					<Logo className={styles.logo} />
				</div>
				<Heading level='1' className={styles.slogan}>
					{t('common:slogan')}
				</Heading>
				<Heading level='2' className={styles.title}>
					{t('common:title')}
				</Heading>
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ex!
				</Paragraph>
				<div className={styles.callToAction}>
					<Button variant={ButtonVariant.BORDER}>{t('landing:view-projects')}</Button>
					<Button>{t('landing:contact')}</Button>
				</div>
			</div>
		</Section>
	);

	/* 	return (
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
						<Button variant={ButtonVariant.BORDER}>{t('landing:view-projects')}</Button>
						<Button>{t('landing:contact')}</Button>
					</div>
				</div>
				<div>
					<span className={styles.picture}>
						<SvgLogo className={styles.logo} />
					</span>
				</div>
			</Card>
			<div className={styles.right}>
				<SocialLinks className={styles.social} />
			</div>
		</Section>
	); */
};

export default Landing;
