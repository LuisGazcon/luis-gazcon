import React from 'react';
import type { FC, ReactNode } from 'react';
import { join } from '@/global/utils/classnames';

import styles from './label.module.scss';

interface LabelProps {
	children?: ReactNode;
	className?: string;
}

const Label: FC<LabelProps> = ({ children, className, ...props }: LabelProps) => {
	const classNames = join(styles.label, className);

	return (
		<label className={classNames} {...props}>
			{children}
		</label>
	);
};

export default Label;
