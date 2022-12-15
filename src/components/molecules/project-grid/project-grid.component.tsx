import React from 'react';

import { join } from '@/global/utils/classnames';

import type { FC } from 'react';

import styles from './project-grid.module.scss';

export type ProjectGridProps = JSX.IntrinsicElements['div'] & {};

export const ProjectGrid: FC<ProjectGridProps> = ({ children, className, ...props }) => {
	const classNames = join(styles.projectGrid, className);
	return (
		<div className={classNames} {...props}>
			{children}
		</div>
	);
};
