export class CSSUnit {
	private static readonly PIXEL_REGEXP = /^[0-9]+px$/;
	private static readonly REM_REGEXP = /^[0-9]+rem$/;

	private value: number = 0;

	private constructor(value: number) {
		this.value = value;
	}

	public toPixel() {
		return `${this.value}px`;
	}

	public static pixelToNumber(value: string): number {
		return parseInt(value.replace(/px/, ''));
	}

	public static remToNumber(value: string): number {
		const computedStyle = window.getComputedStyle(document.documentElement);
		const fontSize = parseInt(computedStyle.fontSize.replace(/px/, ''));
		return parseInt(value.replace(/rem/, '')) * fontSize;
	}

	public static fromPixel(value: string) {
		if (this.isPixel(value)) {
			return new CSSUnit(this.pixelToNumber(value));
		} else throw new Error();
	}

	public static fromREM(value: string) {
		if (this.isREM(value)) {
			return new CSSUnit(this.remToNumber(value));
		} else throw new Error();
	}

	public static isREM(value: string): boolean {
		return this.REM_REGEXP.test(value);
	}

	public static isPixel(value: string): boolean {
		return this.PIXEL_REGEXP.test(value);
	}
}
