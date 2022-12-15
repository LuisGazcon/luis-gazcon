import * as Yup from 'yup';

import type { TFunction } from 'next-i18next';

export const contactFormInitialValues = {
	email: '',
	subject: '',
	message: '',
};

export const getContactFormSchema = (t: TFunction) =>
	Yup.object({
		email: Yup.string()
			.email(t('form.messages.email.invalid'))
			.required(t('form.messages.email.required')),
		subject: Yup.string()
			.min(4, t('form.messages.subject.min-length'))
			.max(128, t('form.messages.subject.max-length'))
			.required(t('form.messages.subject.required')),
		message: Yup.string()
			.min(8, t('form.messages.message.min-length'))
			.max(256, t('form.messages.message.max-length'))
			.required(t('form.messages.message.required')),
	});

export type ContactFormValues = typeof contactFormInitialValues;
