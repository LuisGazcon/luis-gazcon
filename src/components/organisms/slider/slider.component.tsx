import React, { useEffect, useState } from 'react';
import type { FC } from 'react';

import { join } from '@/global/utils/classnames';

import styles from './slider.module.scss';
import { useSprings } from '@react-spring/core';
import { animated } from '@react-spring/web';

interface SliderProps {
	className?: string;
	slides: Array<any>;
	duration?: number;
}

const Slider: FC<SliderProps> = ({ className, slides, duration = 5000 }: SliderProps) => {
	const classNames = join(styles.slider, className);
	const [activeSlide, setActiveSlide] = useState(0);
	const [previusSlide, setPreviusSlide] = useState(0);
	const [springs, api] = useSprings(slides?.length || 0, (index) => ({}), [activeSlide]);

	const handleActive = (newActiveSlide: number) => {
		setPreviusSlide(activeSlide);
		setActiveSlide(newActiveSlide);
	};

	useEffect(() => {
		setTimeout(() => handleNext(), duration);
	}, [activeSlide]);

	const handleNext = () => handleActive(activeSlide === slides?.length - 1 ? 0 : activeSlide + 1);
	const handlePrev = () => handleActive(activeSlide - 1);
	const isActiveSlide = (slide: number) => slide === activeSlide;

	useEffect(() => {
		api.start((index) => ({}));
	}, [activeSlide]);

	const computeClassName = (index: number) => {
		if (index == 0) {
		}
		if (index == activeSlide) {
			return join(styles.slide, styles.active);
		} else if (index == activeSlide - 1) {
			return join(styles.slide, styles.prev);
		} else if (index == activeSlide + 1) {
			return join(styles.slide, styles.next);
		}
	};

	return (
		<div className={classNames}>
			<div className={styles.prev} onClick={handlePrev}>
				Prev
			</div>
			<div className={styles.content}>
				{springs.map((style, index) => (
					<animated.div className={computeClassName(index)} style={style}>
						{slides[index]()}
					</animated.div>
				))}
			</div>
			<div className={styles.next} onClick={handleNext}>
				Next
			</div>
			<div className={styles.indicator}>Indicator</div>
		</div>
	);
};

export default Slider;
