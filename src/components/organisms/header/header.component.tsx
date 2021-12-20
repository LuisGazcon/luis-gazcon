import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import { animated, useSpring } from 'react-spring';

import { faBriefcase, faCode, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

import Heading from '@/components/atoms/heading';
import Navbar from '@/components/molecules/navbar';
import NavbarItem from '@/components/molecules/navbar-item';
import HeaderToggle from '@/components/molecules/header-toggle';
import SocialLinks from '@/components/organisms/social-links';

import { CSSUnit } from '@/global/utils/units';
import { useVisualViewport } from '@/global/hooks/visual-viewport';
import { useScrolled } from '@/global/hooks/scrolled';
import { join } from '@/global/utils/classnames';

import styles from './header.module.scss';
import { useTranslation } from 'next-i18next';

interface HeaderProps {
	className?: string;
}

const Header: FC<HeaderProps> = ({ className }: HeaderProps) => {
	const { t } = useTranslation();
	const ref = useRef<any>();
	const [height, setHeight] = useState<number>();
	const [active, setActive] = useState<boolean>(false);
	const scrolled = useScrolled(1);
	const [style, api] = useSpring(() => ({}));

	const handleOnToggleClick = () => setActive(!active);

	const handleOnResizeViewport = () => {
		const computedStyle = window.getComputedStyle(ref.current);
		const height = computedStyle.getPropertyValue('--header-height');
		setHeight(CSSUnit.remToNumber(height));
	};

	const classNames = join(
		styles.header,
		scrolled ? styles.scrolled : '',
		active ? styles.active : '',
		className,
	);

	useLayoutEffect(() => {
		window.visualViewport.addEventListener('resize', handleOnResizeViewport);
		window.visualViewport.addEventListener('move', handleOnResizeViewport);
	}, [height]);

	useLayoutEffect(() => {
		api.start({
			height: active ? ref.current.scrollHeight : height,
		});
	}, [active, height]);

	return (
		<animated.header style={style} className={classNames} ref={ref}>
			<Heading level='3' className={styles.brand}>
				Luis Gazcón
			</Heading>
			<Navbar>
				<NavbarItem icon={faCode}>{t('header:skills')}</NavbarItem>
				<NavbarItem icon={faUser}>{t('header:about')}</NavbarItem>
				<NavbarItem icon={faBriefcase}>{t('header:portfolio')}</NavbarItem>
				<NavbarItem icon={faEnvelope}>{t('header:contact')}</NavbarItem>
				<div className={styles.social}>
					<SocialLinks />
				</div>
			</Navbar>
			<HeaderToggle onClick={handleOnToggleClick} className={styles.headerToggle} />
		</animated.header>
	);
};

export default Header;
