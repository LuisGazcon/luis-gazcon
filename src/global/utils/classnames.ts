export function join(...classNames: Array<string | undefined>): string {
	return classNames.filter((className) => !!className).join(' ');
}

export function toArray(classNames: string): string[] {
	return classNames.split(' ').filter((className) => !!className);
}
