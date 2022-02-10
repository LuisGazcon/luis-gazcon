import React from 'react';
import type { FC, ReactNode } from 'react';
import Link from 'next/link';

import NavbarItem from '@/components/molecules/navbar-item';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import styles from './navbar-link.module.scss';

interface NavbarLinkProps {
	href: string;
	target?: '_blank' | '_self' | '_parent' | '_top' | string;
	icon: IconDefinition;
	children: ReactNode;
}

const NavbarLink: FC<NavbarLinkProps> = ({ children, href, icon, target }) => {
	return (
		<li className={styles.navbarLink}>
			<Link href={href}>
				<a href={href} target={target} className={styles.anchor} tabIndex={0}>
					<NavbarItem as='span' icon={icon} children={children} className={styles.navbarItem} />
				</a>
			</Link>
		</li>
	);
};

export default NavbarLink;
