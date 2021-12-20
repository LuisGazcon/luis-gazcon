import React from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './paragraph.module.scss';

interface ParagraphProps {
	children?: ReactNode | string;
	className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ children, className, ...props }) => {
	const classNames = join(styles.paragraph, className);
	return (
		<p className={classNames} {...props}>
			{children}
		</p>
	);
};

export default Paragraph;
