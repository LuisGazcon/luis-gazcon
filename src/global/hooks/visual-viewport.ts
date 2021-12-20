import { useEffect, useLayoutEffect } from 'react';

export const useVisualViewport = (
	callback: (visualViewport: VisualViewport) => void,
	dependencies: Array<any> | undefined,
) => {
	useLayoutEffect(() => {
		callback(window.visualViewport);
	}, dependencies);
};
