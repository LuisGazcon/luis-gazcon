import React from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './card.module.scss';

interface CardProps {
	children?: ReactNode;
	className?: string;
}

const Card: FC<CardProps> = ({ children, className }: CardProps) => {
	const classNames = join(styles.card, className);

	return <div className={classNames}>{children}</div>;
};

export default Card;
