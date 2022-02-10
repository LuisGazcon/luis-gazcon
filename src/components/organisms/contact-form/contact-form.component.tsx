import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field, FormikProps, FormikState } from 'formik';
import { useTranslation } from 'next-i18next';

import { FORMSPREE_URL } from '@/global/constants/contact';

import Heading from '@/components/atoms/heading';
import Card from '@/components/atoms/card';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import Feedback from '@/components/molecules/feedback';

import styles from './contact-form.module.scss';

import { getFormSchema } from './contact-form.schema';

const INITIAL_VALUES = {
	subject: '',
	email: '',
	message: '',
};

const ContactForm: FC<FormikProps<typeof INITIAL_VALUES>> = ({ errors, touched }) => {
	const { t } = useTranslation('contact');
	const getMessageIfTouched = (name: keyof typeof INITIAL_VALUES) => {
		return touched[name] && errors[name] ? errors[name] : '';
	};

	return (
		<Card className={styles.contactForm}>
			<Heading className={styles.heading} level='4'>
				{t('send-me-an-e-mail')}
			</Heading>
			<Form className={styles.form}>
				<Feedback color='danger' message={getMessageIfTouched('subject')}>
					<Field
						as={Input}
						label={t('subject')}
						placeholder={t('subject-placeholder')}
						name='subject'
						type='text'
					/>
				</Feedback>
				<Feedback color='danger' message={getMessageIfTouched('email')}>
					<Field
						as={Input}
						label={t('e-mail')}
						placeholder={t('e-mail-placeholder')}
						name='email'
						type='text'
					/>
				</Feedback>
				<Feedback color='danger' message={getMessageIfTouched('message')}>
					<Field
						as={Input}
						label={t('message')}
						placeholder={t('message-placeholder')}
						name='message'
						textarea
					/>
				</Feedback>
				<Button type='submit'>{t('submit')}</Button>
			</Form>
		</Card>
	);
};

const ContactFormWrapper: FC = () => {
	const router = useRouter();
	const { t } = useTranslation('contact');
	const [response, setResponse] = useState<any>();
	const formSchema = getFormSchema(t);

	const handleOnSubmit = async (values: typeof INITIAL_VALUES) => {
		const response = await fetch(FORMSPREE_URL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
			body: JSON.stringify(values),
			mode: 'cors',
		});
		localStorage.setItem('contact-email', values.email);
		setResponse(await response.json());
	};

	useEffect(() => {
		if (response) {
			response?.ok ? router.push('/thanks') : undefined;
		}
	}, [response]);

	return (
		<Formik
			onSubmit={handleOnSubmit}
			component={ContactForm}
			initialValues={INITIAL_VALUES}
			validationSchema={formSchema}
		/>
	);
};

export default ContactFormWrapper;
