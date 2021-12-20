import React from 'react';
import type { FC, ReactNode } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './navbar.module.scss';

interface NavbarProps {
	children?: ReactNode;
	className?: string;
}

const Navbar: FC<NavbarProps> = ({ children, className }: NavbarProps) => {
	const classNames = join(styles.navbar, className);

	return (
		<nav className={classNames}>
			<ul>{children}</ul>
		</nav>
	);
};

export default Navbar;
