import React, { FormEventHandler } from 'react';
import type { FC } from 'react';
import { Formik, Form, Field } from 'formik';

import Label from '@/components/atoms/label';
import Heading from '@/components/atoms/heading';
import Card from '@/components/atoms/card';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';

import styles from './contact-form.module.scss';

import { contactFormSchema } from './contact-form.schema';
import { useTranslation } from 'next-i18next';

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}: ContactFormProps) => {
	const { t } = useTranslation('contact');
	const handleOnSubmit = (event: SubmitEvent) => {
		event.preventDefault();
	};

	const initialValues = {
		subject: '',
		email: '',
		message: '',
	};

	return (
		<Card className={styles.contactForm}>
			<Heading className={styles.heading} level='4'>
				{t('send-me-an-e-mail')}
			</Heading>
			<Formik
				onSubmit={handleOnSubmit}
				initialValues={initialValues}
				validationSchema={contactFormSchema}
			>
				<Form className={styles.form}>
					<Field as={Input} label={t('subject')} name='subject' type='text' />
					<Field as={Input} label={t('e-mail')} name='email' type='text' />
					<Field as={Input} label={t('message')} name='message' textarea />
					<Button>{t('submit')}</Button>
				</Form>
			</Formik>
		</Card>
	);
};

export default ContactForm;
