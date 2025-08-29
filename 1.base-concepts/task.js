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

	percent = Number(percent);
	contribution = Number(contribution);
	amount = Number(amount);
	countMonths = Number(countMonths);

	
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

	let loanBody = amount - contribution;

	if (loanBody <= 0) {
		return 0;
	}

	let monthlyPercent = percent / 100 / 12;

	let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

	let totalPayment = monthlyPayment * countMonths + contribution;

	totalPayment = totalPayment.toFixed(2);

	return Number(totalPayment);
}