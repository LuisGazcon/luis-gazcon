import React from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './heading.module.scss';

interface HeadingProps {
	children?: ReactNode;
	className?: string;
	level?: '1' | '2' | '3' | '4' | '5' | '6';
}

const Heading: FC<HeadingProps> = ({ children, className, level, ...props }) => {
	const classNames = join(styles.heading, className);
	const HeadingTag: any = `h${level}`;

	return (
		<HeadingTag className={classNames} {...props}>
			{children}
		</HeadingTag>
	);
};

export default Heading;
