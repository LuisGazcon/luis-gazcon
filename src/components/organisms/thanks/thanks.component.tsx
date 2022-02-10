import React, { Fragment, useEffect, useState } from 'react';
import type { FC } from 'react';

import Section from '@/components/atoms/section';
import Heading from '@/components/atoms/heading';
import Card from '@/components/atoms/card';

import Paragraph from '@/components/atoms/paragraph';
import styles from './thanks.module.scss';
import { useRouter } from 'next/router';

interface ThanksProps {}

const Thanks: FC<ThanksProps> = ({}) => {
	const router = useRouter();
	const [contactEmail, setContactEmail] = useState<string>('');

	useEffect(() => {
		setContactEmail(localStorage.getItem('contact-email') ?? '');
	}, []);

	useEffect(() => {
		if (!contactEmail) router.push('/');
	}, [contactEmail]);

	useEffect(() => {
		return () => localStorage.removeItem('contact-email');
	}, []);

	return (
		<Section className={styles.thanks}>
			<Card className={styles.content}>
				<div className={styles.side}>
					<Heading level='1'>Thank you!</Heading>
					<Heading level='3' className={styles.slogan}>
						You'll have an answer as soon as possible!
					</Heading>
					<Paragraph className={styles.description}>
						Be patient, a message will arrive {contactEmail} with a work propouse.
					</Paragraph>
				</div>
				<div className={styles.side}></div>
			</Card>
		</Section>
	);
};

export default Thanks;
