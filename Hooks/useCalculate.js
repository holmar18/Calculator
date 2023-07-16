import React, { useState, useEffect } from 'react';
// Utils
import { isNumeric } from '../Utils/Helpers';
import Eval from '../Utils/Calculate';

const useCalculate = () => {
	const [displayCalc, setDisplayCalc] = useState('0');
	const [displayEqual, setDisplayEqual] = useState('0');

	useEffect(() => {}, [displayCalc]);

	/**
	 *
	 * @param {string} val - Button value
	 * @returns
	 */
	const updateEquation = (val) => {
		if (val === '=') {
			CallCalculate(displayCalc);
			return;
		}
		// To stop that a user can press +/- etc when the display only contains empty screen
		if (!isNumeric(val) && displayCalc === '0') return;

		// Need to overwrite the zero not add to the end of the number
		if (displayCalc == '0') {
			setDisplayCalc(val);
		} else {
			setDisplayCalc(displayCalc + val);
		}
	};

	const CallCalculate = () => {
		let outCome = Eval(displayCalc);
		setDisplayEqual('=' + outCome);
	};

	const RemoveLast = () => {
		setDisplayCalc(displayCalc.slice(0, -1));
	};

	// Clear display screens
	const clear = () => {
		setDisplayEqual('0');
		setDisplayCalc('0');
	};

	return {
		displayCalc: displayCalc,
		displayEqual: displayEqual,
		updateEquation: updateEquation,
		clear: clear,

		RemoveLast: RemoveLast,
	};
};

export default useCalculate;
