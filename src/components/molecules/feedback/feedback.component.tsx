import React, { Fragment } from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './feedback.module.scss';

interface FeedbackProps {
	className?: string;
	children: ReactNode;
	message?: string;
	color?: string;
}

const Feedback: FC<FeedbackProps> = ({ children, className, message, color = 'primary' }) => {
	const classNames = join(styles.feedback, styles[color], className);

	return (
		<div className={classNames}>
			<Fragment>{children}</Fragment>
			<small className={styles.message}>{message}</small>
		</div>
	);
};

export default Feedback;
