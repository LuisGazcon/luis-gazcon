import React from 'react';
import type { FC } from 'react';

import Section from '@/components/atoms/section';

import styles from './projects.module.scss';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}: ProjectsProps) => {
	return <Section className={styles.projects}></Section>;
};

export default Projects;
