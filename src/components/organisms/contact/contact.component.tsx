import React from 'react';
import type { FC, ReactNode } from 'react';

import Heading from '@/components/atoms/heading';
import Card from '@/components/atoms/card';
import ContactForm from '@/components/organisms/contact-form';
import Section from '@/components/atoms/section';
import Paragraph from '@/components/atoms/paragraph';

import { join } from '@/global/utils/classnames';

import styles from './contact.module.scss';
import { useTranslation } from 'next-i18next';

interface ContactProps {
	className?: string;
}

const Contact: FC<ContactProps> = ({ className }: ContactProps) => {
	const classNames = join(styles.contact, className);
	const { t } = useTranslation('contact');

	return (
		<Section className={classNames} id='contact'>
			<Heading className={styles.heading} level='3'>
				{t('contact')}
			</Heading>

			<div className={styles.content}>
				<div>
					<Card>
						<Heading level='4' className={styles.heading}>
							{t('lets-get-in-touch')}
						</Heading>
						<Paragraph>{t('lets-get-in-touch-description')}</Paragraph>
					</Card>
				</div>
				<ContactForm />
			</div>
		</Section>
	);
};

export default Contact;
