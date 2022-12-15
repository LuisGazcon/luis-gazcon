import React, { Fragment } from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import Spinner from '@/components/atoms/spinner';
import { Button, ButtonProps } from '@/components/atoms/button/button.component';

import styles from './spinner-button.module.scss';

export type SpinnerButtonProps = ButtonProps & {
	loading: boolean;
};

const SpinnerButton: FC<SpinnerButtonProps> = ({ loading, children, className, ...props }) => {
	const classNames = join(styles.spinnerButton, className);

	return (
		<Button className={classNames} {...props}>
			<Spinner hide={!loading} className={join(styles.spinner, loading ? styles.loading : '')} />
			{children}
		</Button>
	);
};

export default SpinnerButton;
