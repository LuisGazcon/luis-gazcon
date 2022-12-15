import React, { Fragment } from 'react';
import type { FC, ReactNode } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { Anchor } from '@/components/atoms/anchor/anchor.component';

import { join } from '@/global/utils/classnames';

import styles from './social-link.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialLinkProps {
	className?: string;
	children?: ReactNode;
	icon: IconDefinition;
	href?: string;
	target?: string;
}

const SocialLink: FC<SocialLinkProps> = ({
	children,
	className,
	icon,
	...props
}: SocialLinkProps) => {
	const classNames = join(styles.socialLink, className);

	return (
		<Anchor className={classNames} {...props}>
			<FontAwesomeIcon className={styles.icon} icon={icon} />
			{children}
		</Anchor>
	);
};

export default SocialLink;

