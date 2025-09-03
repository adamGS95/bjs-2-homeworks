// Задача 1
function getArrayParams(...arr) {
	// Если массив пустой, возвращаем undefined для всех значений
	if (arr.length === 0) {
		return {
			min: undefined,
			max: undefined,
			avg: undefined
		};
	}

	let min = arr[0]; // первый элемент как начальный минимум
	let max = arr[0]; // первый элемент как начальный максимум
	let sum = 0; // сумма начинается с нуля

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}

		sum = sum + arr[i];
	}

	let avg = sum / arr.length;

	avg = Number(avg.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

console.log('=== Задача 1: getArrayParams ===');
console.log('getArrayParams(-99, 99, 10) =', getArrayParams(-99, 99, 10));
// Должно быть: { min: -99, max: 99, avg: 3.33 }

console.log('getArrayParams(1, 2, 3, -100, 10) =', getArrayParams(1, 2, 3, -100, 10));
// Должно быть: { min: -100, max: 10, avg: -16.80 }

console.log('getArrayParams(5) =', getArrayParams(5));
// Должно быть: { min: 5, max: 5, avg: 5 }

console.log('getArrayParams() =', getArrayParams());
// Должно быть: { min: undefined, max: undefined, avg: undefined }
console.log('');

// Задача 2

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

	let min = arr[0];
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	}

	let sumEven = 0; // сумма чётных чисел
	let sumOdd = 0; // сумма нечётных чисел

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 === 0) {
			sumEven = sumEven + arr[i];
		} else {
			sumOdd = sumOdd + arr[i];
		}
	}

	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	
	if (arr.length === 0) {
		return 0;
	}

	let sumEven = 0; // сумма чётных чисел
	let countEven = 0; // количество чётных чисел

	for (let i = 0; i < arr.length; i++) {
	
		if (arr[i] % 2 === 0) {
			sumEven = sumEven + arr[i];
			countEven = countEven + 1;
		}
	}

	if (countEven === 0) {
		return 0;
	}

	return sumEven / countEven;
}

console.log('=== Задача 2: Насадки для мясорубки ===');

console.log('summElementsWorker():', summElementsWorker());
console.log('summElementsWorker(10, 10, 11, 20, 10):', summElementsWorker(10, 10, 11, 20, 10));

console.log('differenceMaxMinWorker():', differenceMaxMinWorker());
console.log('differenceMaxMinWorker(10, 10, 11, 20, 10):', differenceMaxMinWorker(10, 10, 11, 20, 10));

console.log('differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17):', differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log('differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35):', differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

console.log('averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9):', averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log('averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35):', averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
console.log('');

// Задача 3

function makeWork(arrOfArr, func) {

	if (arrOfArr.length === 0) {
		return 0;
	}

	let maxResult = func(...arrOfArr[0]);

	for (let i = 1; i < arrOfArr.length; i++) {

		const currentResult = func(...arrOfArr[i]);

		if (currentResult > maxResult) {
			maxResult = currentResult;
		}
	}

	return maxResult;
}

console.log('=== Задача 3: makeWork (мясорубка) ===');

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];

console.log('Массив данных:', arr);
console.log('makeWork(arr, summElementsWorker):', makeWork(arr, summElementsWorker));
console.log('makeWork(arr, differenceMaxMinWorker):', makeWork(arr, differenceMaxMinWorker));
console.log('makeWork(arr, differenceEvenOddWorker):', makeWork(arr, differenceEvenOddWorker));
console.log('makeWork(arr, averageEvenElementsWorker):', makeWork(arr, averageEvenElementsWorker));