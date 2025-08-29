"use strict";

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