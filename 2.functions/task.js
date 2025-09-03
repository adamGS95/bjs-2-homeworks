"use strict";

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = Infinity;
	let max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];

		if (num > max) {
			max = num;
		}

		if (num < min) {
			min = num;
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];

		if (num % 2 === 0) {
			sumEvenElement = sumEvenElement + num;
		} else {
			sumOddElement = sumOddElement + num;
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];

		if (num % 2 === 0) {
			sumEvenElement = sumEvenElement + num;
			countEvenElement = countEvenElement + 1;
		}
	}

	if (countEvenElement === 0) {
		return 0; 
	}

	return sumEvenElement / countEvenElement;
}

function testCase() {
	console.log(summElementsWorker());
	console.log(summElementsWorker(10, 10, 11, 20, 10));

	console.log(differenceMaxMinWorker());
	console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

	console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
	console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

	console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
	console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
}

testCase();