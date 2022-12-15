import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '@/components/atoms/card';
import Paragraph from '@/components/atoms/paragraph';
import { join } from '@/global/utils/classnames';
import Heading from '@/components/atoms/heading';

import type { FC } from 'react';

import styles from './project-card.module.scss';

import { faSass } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { Anchor } from '@/components/atoms/anchor/anchor.component';
import { Button, ButtonVariant } from '@/components/atoms/button/button.component';

export type ProjectCardProps = {
	className?: string;
	repositoryUrl: string;
	homepageUrl: string;
	thumbnail: any;
	thumbnailUrl: string;
	description: string;
	name: string;
	tags: string[];
};

export const ProjectCard: FC<ProjectCardProps> = ({
	className,
	tags,
	description,
	homepageUrl,
	thumbnailUrl,
	repositoryUrl,
	name,
}) => {
	const router = useRouter();
	const classNames = join(styles.projectCard, className);

	const handleOnHomepage = () => router.push(homepageUrl);
	const handleOnRepository = () => router.push(repositoryUrl);

	return (
		<div className={styles.container}>
			<Card className={classNames}>
				<div className={styles.thumbnail}>
					<img src={thumbnailUrl ?? '/logo.png'} />
				</div>
				<div className={styles.content}>
					<Heading level='5'>{name}</Heading>
					<Paragraph className={styles.description}>{description}</Paragraph>
					<div className={styles.actions}>
						<Button onClick={handleOnRepository}>Repository</Button>
						<Button onClick={handleOnHomepage} variant={ButtonVariant.BORDER}>
							Homepage
						</Button>
					</div>
				</div>
			</Card>
			<div className={styles.tags}>
				{tags.map((tag) => (
					<div key={tag} className={styles.pill}>
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};
