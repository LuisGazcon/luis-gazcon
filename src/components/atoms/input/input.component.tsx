import React from 'react';
import type { FC, ReactNode, InputHTMLAttributes } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './input.module.scss';

interface InputProps {
	className?: string;
	type?: string;
	id?: string;
	name: string;
	label?: ReactNode;
	textarea?: boolean;
}

const Input: FC<InputProps & InputHTMLAttributes<any>> = ({
	className,
	label,
	id,
	name,
	textarea,
	...props
}: InputProps) => {
	const classNames = join(styles.container, className);
	const inputId = id ? id : name;
	const element = textarea ? (
		<textarea className={styles.input} id={inputId} {...props} />
	) : (
		<input className={styles.input} id={inputId} {...props} />
	);
	return (
		<div className={classNames}>
			<label className={styles.label} htmlFor={inputId}>
				{label}
			</label>
			{element}
		</div>
	);
};

export default Input;
