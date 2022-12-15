import React from 'react';
import Link from 'next/link';

import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './anchor.module.scss';

export type AnchorProps = {
	children?: ReactNode;
	className?: string;
	href?: string;
	target?: string;
};

export const Anchor: FC<AnchorProps> = ({ children, className, href = '#', ...props }) => {
	const classNames = join(styles.anchor, className);

	return (
		<Link href={href}>
			<a className={classNames} {...props}>
				{children}
			</a>
		</Link>
	);
};
