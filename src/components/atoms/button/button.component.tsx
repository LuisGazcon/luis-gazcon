import React from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './button.module.scss';

interface ButtonProps {
	children?: ReactNode;
	className?: string;
	variant?: 'default' | 'ghost' | 'text';
	color?: 'primary' | 'secondary' | 'tertiary' | 'quarternary' | 'success' | 'warning' | 'danger';
	size?: 'small' | 'normal' | 'large';
}

const Button: FC<ButtonProps> = ({ className, children, variant, color, size, ...props }) => {
	const classNames = join(
		styles.button,
		styles[`variant-${variant}`],
		styles[`color-${color}`],
		styles[`size-${size}`],
		className,
	);

	return (
		<button className={classNames} {...props}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	color: 'primary',
	variant: 'default',
};

export default Button;
