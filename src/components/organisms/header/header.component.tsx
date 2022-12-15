import React, { MouseEventHandler, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import { animated, useSpring } from 'react-spring';
import { useTranslation } from 'next-i18next';

import {
	faBriefcase,
	faCode,
	faEnvelope,
	faUser,
	faLanguage,
} from '@fortawesome/free-solid-svg-icons';

import { Anchor } from '@/components/atoms/anchor/anchor.component';
import Heading from '@/components/atoms/heading';
import Navbar from '@/components/molecules/navbar';
import HeaderToggle from '@/components/molecules/header-toggle';
import SocialLinks from '@/components/organisms/social-links';
import NavbarDropdown from '@/components/molecules/navbar-dropdown';
import NavbarLink from '@/components/molecules/navbar-link';

import { CSSUnit } from '@/global/utils/units';
import { join } from '@/global/utils/classnames';
import { useScrolled } from '@/global/hooks/scrolled';
import { languages } from '@/global/utils/languages';

import styles from './header.module.scss';
import Image from 'next/image';

interface HeaderProps {
	className?: string;
}

const Header: FC<HeaderProps> = ({ className }: HeaderProps) => {
	const { t, i18n } = useTranslation();
	const ref = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number>();
	const [active, setActive] = useState<boolean>(false);
	const scrolled = useScrolled(1);
	const [style, api] = useSpring(() => ({
		height: 0,
	}));

	const handleOnToggleClick: MouseEventHandler = (event) => {
		event.preventDefault();
		setActive(!active);
	};

	const handleOnResizeViewport = () => {
		const computedStyle = ref.current ? window.getComputedStyle(ref.current) : null;
		const height = computedStyle ? computedStyle.getPropertyValue('--header-height') : '0rem';
		setHeight(CSSUnit.remToNumber(height));
	};

	const classNames = join(
		styles.header,
		scrolled ? styles.scrolled : '',
		active ? styles.active : '',
		className,
	);

	useLayoutEffect(handleOnResizeViewport, []);
	useLayoutEffect(() => {
		if (window.visualViewport) {
			window.visualViewport.addEventListener('resize', handleOnResizeViewport);
			window.visualViewport.addEventListener('move', handleOnResizeViewport);
		}
		ref.current?.addEventListener('resize', handleOnResizeViewport);
	}, [height]);

	useLayoutEffect(() => {
		api.start({
			height: active ? ref?.current?.scrollHeight : height,
		});

		const body = document.getElementsByTagName('body')[0];
		body.style.overflowY = active ? 'hidden' : 'scroll';
	}, [active, height, api]);

	return (
		<animated.header style={style} className={classNames} ref={ref}>
			<Anchor href='/' className={styles.anchor}>
				<div className={styles.logo}>
					<Image width='64' height='64' src='/logo.png' alt='' />
				</div>
				<Heading level='3' className={styles.brand}>
					Luis Gazcón
				</Heading>
				<HeaderToggle onClick={handleOnToggleClick} className={styles.headerToggle} />
			</Anchor>
			<Navbar>
				<NavbarLink icon={faCode} href='#skills'>
					{t('header:skills')}
				</NavbarLink>
				<NavbarLink icon={faUser} href='#about'>
					{t('header:about')}
				</NavbarLink>
				<NavbarLink icon={faBriefcase} href='#projects'>
					{t('header:projects')}
				</NavbarLink>
				<NavbarLink icon={faEnvelope} href='#contact'>
					{t('header:contact')}
				</NavbarLink>
				<NavbarDropdown
					icon={faLanguage}
					options={{
						Español: () => i18n.changeLanguage('es'),
						English: () => i18n.changeLanguage('en'),
					}}
				>
					{languages[i18n.language]}
				</NavbarDropdown>
				<SocialLinks className={styles.social} />
			</Navbar>
		</animated.header>
	);
};

export default Header;
