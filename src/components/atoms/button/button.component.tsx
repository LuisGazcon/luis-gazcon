import React from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './button.module.scss';

export enum ButtonColor {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	TERTIARY = 'tertiary',
	QUARTERNARY = 'quarternary',
	SUCCESS = 'success',
	WARNING = 'warning',
	DANGER = 'danger',
}

export enum ButtonSize {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large',
}

export enum ButtonVariant {
	DEFAULT = 'default',
	BORDER = 'ghost',
	TRANSLUCENT = 'text',
}

export type ButtonProps = JSX.IntrinsicElements['button'] & {
	children?: ReactNode;
	className?: string;
	variant?: ButtonVariant;
	color?: ButtonColor;
	size?: ButtonSize;
};

export const Button: FC<ButtonProps> = ({ className, variant, color, size, ...props }) => {
	const classNames = join(
		styles.button,
		styles[`variant-${variant}`],
		styles[`color-${color}`],
		styles[`size-${size}`],
		className,
	);

	return <button className={classNames} {...props} />;
};

Button.defaultProps = {
	color: ButtonColor.PRIMARY,
	variant: ButtonVariant.DEFAULT,
	size: ButtonSize.MEDIUM,
};
