import React from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './section.module.scss';

interface SectionProps {
	children?: ReactNode;
	className?: string;
}

const Section: FC<SectionProps> = ({ children, className }: SectionProps) => {
	const classNames = join(styles.section, className);
	return <section className={classNames}>{children}</section>;
};

export default Section;
