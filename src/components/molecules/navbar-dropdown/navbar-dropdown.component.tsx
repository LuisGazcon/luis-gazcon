import React, { useEffect, useRef, useState } from 'react';
import type { FC, ReactNode, EventHandler, MouseEventHandler } from 'react';
import { animated, useSpring } from 'react-spring';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import type { Index } from '@/global/types/utils';

import NavbarItem from '@/components/molecules/navbar-item';

import styles from './navbar-dropdown.module.scss';

const EVENT_KEY = 'Enter';

interface NavbarDropdownProps {
	children?: ReactNode;
	icon?: IconDefinition;
	options: Index<MouseEventHandler>;
}

const NavbarDropdown: FC<NavbarDropdownProps> = ({ children, icon, options }) => {
	const [style, api] = useSpring(() => ({ height: 0 }));
	const [active, setActive] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollHeight = dropdownRef?.current?.scrollHeight ?? 0;
		api.start({
			height: active ? scrollHeight : 0,
		});
	}, [active]);

	return (
		<li
			className={styles.navbarDropdown}
			onKeyPress={({ key, target }) =>
				key === EVENT_KEY && target === document.activeElement && setActive(!active)
			}
			onClick={() => setActive(!active)}
			tabIndex={0}
			role='button'
		>
			<NavbarItem icon={icon} className={styles.navbarItem} as='span'>
				{children}
			</NavbarItem>
			<animated.div style={style} className={styles.dropdown} ref={dropdownRef}>
				<ul className={styles.dropdownList}>{renderOptions(active, options)}</ul>
			</animated.div>
		</li>
	);
};

const renderOptions = (active: Boolean, options: Index<EventHandler<any>>) => {
	return Object.keys(options).map((key) => (
		<li
			className={styles.dropdownItem}
			onClick={options[key]}
			onKeyPress={(event) => event.key === EVENT_KEY && options[key]}
			tabIndex={active ? 0 : -1}
			key={key}
		>
			{key}
		</li>
	));
};

export default NavbarDropdown;
