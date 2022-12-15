import React, { Fragment } from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './spinner.module.scss';

interface SpinnerProps {
	className?: string;
	hide: boolean;
}

const Spinner: FC<SpinnerProps> = ({ className, hide }) => {
	const classNames = join(styles.spinner, hide ? styles.hide : '', className);
	return <div className={classNames} />;
};

export default Spinner;
