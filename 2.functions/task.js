// Задача 1

function getArrayParams() {
	if (arguments.length === 0) return {
		min: 0,
		max: 0,
		avg: 0
	};

	let min = arguments[0];
	let max = arguments[0];
	let sum = 0;

	for (let i = 0; i < arguments.length; i++) {
		let num = arguments[i];
		if (num < min) min = num;
		if (num > max) max = num;
		sum = sum + num;
	}

	let avg = sum / arguments.length;
	avg = Math.round(avg * 100) / 100; 
	return {
		min: min,
		max: max,
		avg: avg
	};
}

//  Задача 2

function summElementsWorker() {
	if (arguments.length === 0) return 0;
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum = sum + arguments[i];
	}
	return sum;
}

function differenceMaxMinWorker() {
	if (arguments.length === 0) return 0;
	let min = arguments[0];
	let max = arguments[0];
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] < min) min = arguments[i];
		if (arguments[i] > max) max = arguments[i];
	}
	return max - min;
}

function differenceEvenOddWorker() {
	if (arguments.length === 0) return 0;
	let sumEven = 0;
	let sumOdd = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] % 2 === 0) sumEven = sumEven + arguments[i];
		else sumOdd = sumOdd + arguments[i];
	}
	return sumEven - sumOdd;
}

function averageEvenElementsWorker() {
	if (arguments.length === 0) return 0;
	let sumEven = 0;
	let countEven = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] % 2 === 0) {
			sumEven = sumEven + arguments[i];
			countEven = countEven + 1;
		}
	}
	if (countEven === 0) return 0;
	return sumEven / countEven;
}

// Задача 3
function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let arr = arrOfArr[i];
		let result = func.apply(null, arr);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}

console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.8 }

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker)); // 328
console.log(makeWork(arr, differenceMaxMinWorker)); // 86
console.log(makeWork(arr, differenceEvenOddWorker)); // 92
console.log(makeWork(arr, averageEvenElementsWorker)); // 72