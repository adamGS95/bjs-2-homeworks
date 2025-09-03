"use strict";

function getArrayParams(...arr) {
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

// Функция для проверки работы
function testCase() {
	console.log(getArrayParams(-99, 99, 10));
	// Ожидаем: { min: -99, max: 99, avg: 3.33 }

	console.log(getArrayParams(1, 2, 3, -100, 10));
	// Ожидаем: { min: -100, max: 10, avg: -16.80 }

	console.log(getArrayParams(5));
	// Ожидаем: { min: 5, max: 5, avg: 5 }
}

testCase();