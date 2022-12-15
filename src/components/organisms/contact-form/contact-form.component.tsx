import React, { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field, FormikProps } from 'formik';
import { useTranslation } from 'next-i18next';

import { FORMSPREE_URL } from '@/global/constants/contact';

import Heading from '@/components/atoms/heading';
import Card from '@/components/atoms/card';
import Input from '@/components/atoms/input';
import Feedback from '@/components/molecules/feedback';
import SpinnerButton from '@/components/molecules/spinner-button';

import { contactFormInitialValues, getContactFormSchema } from './contact-form.schema';
import type { ContactFormValues } from './contact-form.schema';
import styles from './contact-form.module.scss';

export type ContactFormProps = FormikProps<ContactFormValues> & {
	loading: boolean;
};

const ContactForm: FC<ContactFormProps> = ({ loading, touched, errors, values }) => {
	const { t } = useTranslation('contact');

	const getMessageIfTouched = (name: keyof ContactFormValues) => {
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
				<SpinnerButton type='submit' loading={loading}>
					{t('submit')}
				</SpinnerButton>
			</Form>
		</Card>
	);
};

const ContactFormWrapper: FC = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation('contact');
	const [response, setResponse] = useState<any>();
	const formSchema = getContactFormSchema(t);

	const handleOnSubmit = async (values: ContactFormValues) => {
		setLoading(true);
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
			setLoading(false);
			response?.ok ? router.push('/thanks') : undefined;
		}
	}, [response, router]);

	const render = (formikProps: FormikProps<ContactFormValues>) => (
		<ContactForm loading={loading} {...formikProps} />
	);

	return (
		<Formik
			onSubmit={handleOnSubmit}
			initialValues={contactFormInitialValues}
			validationSchema={formSchema}
		>
			{render}
		</Formik>
	);
};

export default ContactFormWrapper;
