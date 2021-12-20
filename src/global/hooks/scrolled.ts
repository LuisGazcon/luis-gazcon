import { useEffect, useState } from 'react';

export function useScrolled(offset: number): boolean {
	const [scrolled, setScrolled] = useState<boolean>(false);

	const handleOnScroll = () => {
		setScrolled(document.documentElement.scrollTop >= offset);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleOnScroll);
		window.addEventListener('wheel', handleOnScroll);
	}, []);

	return scrolled;
}
