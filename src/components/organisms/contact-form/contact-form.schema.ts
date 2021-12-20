import * as Yup from 'yup';

export const contactFormSchema = Yup.object({
	email: Yup.string().email('this shit is required').required('shit'),
	subject: Yup.string().max(128, '').required(''),
	message: Yup.string().min(8, '').max(256, '').required(''),
});
