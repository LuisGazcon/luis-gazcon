import React, { useLayoutEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import { useGesture, useMove } from '@use-gesture/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { FC, ReactNode } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import Heading from '@/components/atoms/heading';
import Card from '@/components/atoms/card';

import { join } from '@/global/utils/classnames';

import styles from './skill-card.module.scss';

interface SkillCardProps {
	children?: ReactNode;
	className?: string;
	icon: IconDefinition;
	title?: string;
	highlighted?: boolean;
}

const SkillCard: FC<SkillCardProps> = ({
	children,
	className,
	title,
	icon,
	highlighted,
}: SkillCardProps) => {
	const classNames = join(styles.card, highlighted ? styles.highlighted : '', className);
	const ref = useRef<HTMLDivElement>(null);
	const [style, api] = useSpring(() => ({
		scale: 1,
		rotateY: 0,
		rotateX: 0,
		y: 0,
		x: 0,
	}));

	const bind = useGesture({
		onMove: ({ xy, type, active, ...props }) => {
			if (ref.current) {
				const entered = type !== 'pointerleave';
				const rect = ref.current.getBoundingClientRect();
				const width = ref.current.clientWidth;
				const height = ref.current.clientHeight;
				const x = xy[0] - rect.left - width / 2;
				const y = xy[1] - rect.top - height / 2;

				api.start({
					rotateX: entered ? -(x / width) * 20 : 0,
					rotateY: entered ? (y / height) * 20 : 0,
					x: entered && active ? x / 5 : 0,
					y: entered && active ? y / 5 : 0,
					scale: entered ? 1.05 : 1,
				});
			}
		},
	});

	return (
		<animated.div style={style} {...bind()} ref={ref} className={styles.wrapper}>
			<Card className={classNames}>
				<Heading level='4' className={styles.title}>
					{title}
				</Heading>
				<FontAwesomeIcon icon={icon} className={styles.icon} />
				<FontAwesomeIcon icon={icon} className={styles.backgroundIcon} />
				<div className={styles.content}>{children}</div>
			</Card>
		</animated.div>
	);
};

export default SkillCard;
