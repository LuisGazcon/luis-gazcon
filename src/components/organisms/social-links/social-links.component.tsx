import React, { Fragment } from 'react';
import type { FC } from 'react';

import {
	faCodepen,
	faFacebook,
	faGithub,
	faLinkedin,
	faNpm,
} from '@fortawesome/free-brands-svg-icons';

import SocialIconLink from '@/components/molecules/social-icon-link';
import { join } from '@/global/utils/classnames';
import styles from './social-links.module.scss';
import { faCode } from '@fortawesome/free-solid-svg-icons';

interface SocialLinksProps {
	className?: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
	const classNames = join(styles.socialLinks, className);

	return (
		<ul className={classNames}>
			<SocialIconLink
				icon={faNpm}
				target='blank'
				href='https://www.npmjs.com/~luis-gazcon'
				label='npm'
			/>
			<SocialIconLink
				icon={faGithub}
				target='blank'
				href='https://www.github.com/LuisGazcon'
				label='GitHub'
			/>
			<SocialIconLink
				icon={faLinkedin}
				target='blank'
				href='https://www.linkedin.com/in/luis-gazcon'
				label='LinkedIn'
			/>
		</ul>
	);
};

export default SocialLinks;
