import React from 'react';
import type { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
	faLaptop,
	faDraftingCompass,
	faPencilRuler,
	faServer,
	faDatabase,
} from '@fortawesome/free-solid-svg-icons';

import Section from '@/components/atoms/section';
import Paragraph from '@/components/atoms/paragraph';
import Heading from '@/components/atoms/heading';
import SkillCard from '@/components/molecules/skill-card';

import styles from './skills.module.scss';

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}: SkillsProps) => {
	const { t } = useTranslation('landing');

	return (
		<Section className={styles.skills}>
			<Heading className={styles.heading} level='3'>
				{t('what-do-i-do')}
			</Heading>
			<div className={styles.content}>
				<SkillCard title={t('front-end-development')} icon={faReact}>
					<Paragraph>{t('front-end-development-description')}</Paragraph>
				</SkillCard>
				<SkillCard title={t('pixel-perfect-interfaces')} highlighted icon={faDraftingCompass}>
					<Paragraph>{t('pixel-perfect-interfaces-description')}</Paragraph>
				</SkillCard>
				<SkillCard title={t('back-end-development')} icon={faDatabase}>
					<Paragraph>{t('back-end-development-description')}</Paragraph>
				</SkillCard>
			</div>
		</Section>
	);
};

export default Skills;
