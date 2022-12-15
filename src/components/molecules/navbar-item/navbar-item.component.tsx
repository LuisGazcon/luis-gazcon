import React, { Component, Fragment, ElementType } from 'react';
import type { FC, ReactNode, MouseEventHandler } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { join } from '@/global/utils/classnames';

import styles from './navbar-item.module.scss';

interface NavbarItemProps {
	children?: ReactNode | string;
	className?: string;
	icon?: IconDefinition;
	onClick?: MouseEventHandler;
	as?: ElementType;
}

const NavbarItem: FC<NavbarItemProps> = ({
	children,
	className,
	onClick,
	icon,
	as,
	...props
}: NavbarItemProps) => {
	const classNames = join(styles.navbarItem, className);
	const Element: ElementType = as ?? 'li';

	return (
		<Element className={classNames} onClick={onClick ?? undefined}>
			{icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
			<Fragment>{children}</Fragment>
		</Element>
	);
};

export default NavbarItem;

