import React, { Fragment } from 'react';
import type { FC, ReactNode } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { join } from '@/global/utils/classnames';

import styles from './navbar-item.module.scss';

interface NavbarItemProps {
	children?: ReactNode | string;
	className?: string;
	href?: string;
	target?: string;
	icon?: IconDefinition;
}

const NavbarItem: FC<NavbarItemProps> = ({
	children,
	className,
	href,
	icon,
	...props
}: NavbarItemProps) => {
	const classNames = join(styles.navbarItem, className);

	return (
		<li className={classNames}>
			<Link href={href || ''}>
				<a {...props}>
					{icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
					<Fragment>{children}</Fragment>
				</a>
			</Link>
		</li>
	);
};

export default NavbarItem;
