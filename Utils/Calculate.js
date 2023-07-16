/**
 *
 * Functions takes in a string equation ex: 34+23-12
 * and returns the answer
 *
 * @param {string} equation - Equation from calculator display
 */
function Eval(equation) {
	return new Function('return ' + equation)();
}

export default Eval;
