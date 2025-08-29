"use strict";

//Задача 1

function solveEquation(a, b, c) {
	const d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return [];
	} else if (d === 0) {
		return [-b / (2 * a)];
	} else {
		const sqrtD = Math.sqrt(d);
		return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
	}
}

// Тесты
function testCase() {
	console.log(solveEquation(1, -3, 2)); // [2, 1]
	console.log(solveEquation(1, 2, 1)); // [-1]
	console.log(solveEquation(1, 1, 1)); // []
}
testCase();

//Задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	function convertToNumber(value) {
		if (typeof value === 'string') {
			const parsedValue = parseFloat(value.replace(',', '.'));
			return isNaN(parsedValue) ? false : parsedValue;
		} else if (typeof value === 'number') {
			return value;
		} else {
			return false;
		}
	}

	const percentNum = convertToNumber(percent);
	const contributionNum = convertToNumber(contribution);
	const amountNum = convertToNumber(amount);
	const countMonthsNum = convertToNumber(countMonths);

	if (percentNum === false || contributionNum === false || amountNum === false || countMonthsNum === false) {
		return false;
	}

	const loanBody = amountNum - contributionNum;

	if (loanBody <= 0) {
		return 0;
	}

	const monthlyPercent = percentNum / 100 / 12;

  const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonthsNum - 1));

	const totalAmount = monthlyPayment * countMonthsNum;

	return Number(totalAmount.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52