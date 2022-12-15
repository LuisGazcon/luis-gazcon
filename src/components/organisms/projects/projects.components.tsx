import React, { useEffect, useState } from 'react';
import type { FC } from 'react';

import Section from '@/components/atoms/section';

import styles from './projects.module.scss';
import Heading from '@/components/atoms/heading';
import SkillCard from '@/components/molecules/skill-card';
import Paragraph from '@/components/atoms/paragraph';
import { useTranslation } from 'next-i18next';
import { ProjectCard } from '@/components/molecules/project-card/project-card.component';
import { ProjectGrid } from '@/components/molecules/project-grid/project-grid.component';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}: ProjectsProps) => {
	const [projects, setProjects] = useState<[{ id: string }]>([] as any);
	const { t } = useTranslation();

	useEffect(() => {
		const callback = async function () {
			const response = await fetch('/api/projects');
			console.log(response);
			setProjects(await response.json());
		};

		callback();
	}, []);

	return (
		<Section className={styles.projects} id='projects'>
			<Heading className={styles.heading} level='3'>
				{t('projects:projects')}
			</Heading>
			<div>
				<ProjectGrid>
					{projects.map((project) => (
						<ProjectCard key={project.id} {...(project as any)} />
					))}
				</ProjectGrid>
			</div>
		</Section>
	);
};

export default Projects;
