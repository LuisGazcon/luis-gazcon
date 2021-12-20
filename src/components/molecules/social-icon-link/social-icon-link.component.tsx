import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

import Anchor from '@/components/atoms/anchor';

import { join } from '@/global/utils/classnames';

import styles from './social-icon-link.module.scss';

interface SocialIconLink {
	icon: IconDefinition;
	className?: string;
	href?: string;
	target?: string;
}

const SocialIconLink: FC<SocialIconLink> = ({
	className,
	href = '#',
	icon,
	target,
}: SocialIconLink) => {
	const classNames = join(styles.socialIconLink, className);

	return (
		<span className={classNames}>
			<Anchor className={styles.anchor} href={href} target={target}>
				<FontAwesomeIcon icon={icon} className={styles.icon} />
			</Anchor>
		</span>
	);
};

export default SocialIconLink;
