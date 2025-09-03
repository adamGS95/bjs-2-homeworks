"use strict";

function getArrayParams(arr) {
	if (!arr || arr.length === 0) {
		return {
			min: 0,
			max: 0,
			avg: 0
		};
	}

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];

		if (num > max) {
			max = num;
		}

		if (num < min) {
			min = num;
		}

		sum = sum + num;
	}

	let avg = sum / arr.length;
	avg = Number(avg.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

// Проверка
function testCase() {
	console.log(getArrayParams([-99, 99, 10]));
	// { min: -99, max: 99, avg: 3.33 }

	console.log(getArrayParams([1, 2, 3, -100, 10]));
	// { min: -100, max: 10, avg: -16.80 }

	console.log(getArrayParams([5]));
	// { min: 5, max: 5, avg: 5 }
}

testCase();

"use strict";

// Функция суммирования элементов
function summElementsWorker(arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}

	return sum;
}

// Функция разницы между max и min
function differenceMaxMinWorker(arr) {
	if (!arr || arr.length === 0) {
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

// Функция разницы суммы чётных и нечётных
function differenceEvenOddWorker(arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0; // сумма чётных
	let sumOddElement = 0; // сумма нечётных

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

// Функция среднего значения чётных элементов
function averageEvenElementsWorker(arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0; // сумма чётных
	let countEvenElement = 0; // количество чётных

	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];

		if (num % 2 === 0) {
			sumEvenElement = sumEvenElement + num;
			countEvenElement = countEvenElement + 1;
		}
	}

	if (countEvenElement === 0) {
		return 0; // если чётных нет
	}

	return sumEvenElement / countEvenElement;
}

// Проверка
function testCase() {
	console.log(summElementsWorker([]));
	console.log(summElementsWorker([10, 10, 11, 20, 10]));

	console.log(differenceMaxMinWorker([]));
	console.log(differenceMaxMinWorker([10, 10, 11, 20, 10]));

	console.log(differenceEvenOddWorker([94, 51, 57, 41, 47, 66, 58, 10, 38, 17]));
	console.log(differenceEvenOddWorker([15, 97, 85, 64, 67, 10, 69, 40, 15, 35]));

	console.log(averageEvenElementsWorker([1, 2, 3, 4, 5, 6, 7, 8, 9]));
	console.log(averageEvenElementsWorker([15, 97, 85, 64, 67, 10, 69, 40, 15, 35]));
}

testCase();

