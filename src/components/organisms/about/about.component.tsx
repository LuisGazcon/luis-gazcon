import React from 'react';
import type { FC } from 'react';
import { faFacebook, faGithub, faLinkedin, faNpm } from '@fortawesome/free-brands-svg-icons';

import Card from '@/components/atoms/card';
import Heading from '@/components/atoms/heading';
import Paragraph from '@/components/atoms/paragraph';
import Section from '@/components/atoms/section';
import SocialLink from '@/components/molecules/social-link';

import { join } from '@/global/utils/classnames';

import styles from './about.module.scss';
import { useTranslation } from 'next-i18next';
import { faCode } from '@fortawesome/free-solid-svg-icons';

interface AboutProps {
	className?: string;
}

const About: FC<AboutProps> = ({ className }: AboutProps) => {
	const classNames = join(styles.about, className);
	const { t } = useTranslation('about');

	return (
		<Section className={classNames} id='about'>
			<Heading className={styles.heading} level='3'>
				{t('about')}
			</Heading>
			<div className={styles.content}>
				<div className={styles.imageWrapper}>
					<img src='/images/me.jpg' className={styles.image} />
				</div>
				<div className={styles.information}>
					<Card className={styles.card}>
						<Heading level='4' className={styles.heading}>
							{t('who-im-i')}
						</Heading>
						<Paragraph>{t('who-im-i-description')}</Paragraph>
					</Card>
					<Card className={join(styles.social, styles.card)}>
						<Heading level='4' className={styles.heading}>
							{t('where-you-can-reach-me')}
						</Heading>
						<Paragraph>{t('where-you-can-reach-me-description')}</Paragraph>
						<div className={styles.links}>
							<SocialLink icon={faNpm} href='https://www.npmjs.com/~luis-gazcon' target='_blank'>
								Linkedin
							</SocialLink>
							<SocialLink
								icon={faLinkedin}
								href='https://www.linkedin.com/in/luis-gazcon'
								target='_blank'
							>
								Linkedin
							</SocialLink>
							<SocialLink icon={faCode} href='https://codesandbox.io/u/LuisGazcon' target='_blank'>
								CodeSandbox
							</SocialLink>
							<SocialLink icon={faGithub} href='https://www.github.com/LuisGazcon' target='_blank'>
								GitHub
							</SocialLink>
						</div>
					</Card>
				</div>
			</div>
		</Section>
	);
};

export default About;
