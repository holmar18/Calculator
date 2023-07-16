/**
 * Evaluates string, and checks if it is a number or not
 *
 * @param {string} value
 * @returns
 */
export function isNumeric(value) {
	return /^-?\d+$/.test(value);
}

