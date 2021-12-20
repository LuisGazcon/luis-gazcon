import React, { Fragment } from 'react';
import type { FC } from 'react';

import { faCodepen, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import SocialIconLink from '@/components/molecules/social-icon-link';

interface SocialLinksProps {}

const SocialLinks: FC<SocialLinksProps> = ({}: SocialLinksProps) => {
	return (
		<Fragment>
			<SocialIconLink
				icon={faFacebook}
				target='blank'
				href='https://www.facebook.com/LuisGazconz'
			/>
			<SocialIconLink icon={faGithub} target='blank' href='https://www.github.com/LuisGazcon' />
			<SocialIconLink
				icon={faLinkedin}
				target='blank'
				href='https://www.linkedin.com/in/luis-gazcon'
			/>
			<SocialIconLink icon={faCodepen} target='blank' href='https://www.codepen.io/LuisGazcon' />
		</Fragment>
	);
};

export default SocialLinks;
