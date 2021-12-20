import React from 'react';
import type { FC, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import { join } from '@/global/utils/classnames';

import styles from './header-toggle.module.scss';

interface HeaderToggleProps {
	className?: string;
	onClick?: MouseEventHandler;
}

const HeaderToggle: FC<HeaderToggleProps> = ({ className, onClick }: HeaderToggleProps) => {
	const classNames = join(styles.headerToggle, className);
	return <FontAwesomeIcon icon={faEllipsisH} onClick={onClick} className={classNames} />;
};

export default HeaderToggle;
