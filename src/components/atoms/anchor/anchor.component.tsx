import React from 'react';
import type { FC, ReactNode } from 'react';
import Link from 'next/link';

import { join } from '@/global/utils/classnames';

import styles from './anchor.module.scss';

interface AnchorProps {
	children?: ReactNode;
	className?: string;
	href?: string;
	target?: string;
}

const Anchor: FC<AnchorProps> = ({ children, className, href = '#', ...props }: AnchorProps) => {
	const classNames = join(styles.anchor, className);

	return (
		<Link href={href}>
			<a className={classNames} {...props}>
				{children}
			</a>
		</Link>
	);
};

export default Anchor;
