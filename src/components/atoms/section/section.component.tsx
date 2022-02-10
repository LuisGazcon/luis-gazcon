import React from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './section.module.scss';

interface SectionProps {
	children?: ReactNode;
	className?: string;
}

const Section: FC<SectionProps & JSX.IntrinsicElements['section']> = ({
	children,
	className,
	...props
}) => {
	const classNames = join(styles.section, className);
	return (
		<section className={classNames} {...props}>
			{children}
		</section>
	);
};

export default Section;
