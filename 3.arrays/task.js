function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	const result = arr1.every((element, index) => {
		return element === arr2[index];
	});

	return result;
}

// Примеры для Задачи 1:
console.log('=== Задача 1: compareArrays ===');
console.log('compareArrays([8, 9], [6]) =', compareArrays([8, 9], [6])); // false
console.log('compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) =', compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false
console.log('compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) =', compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false
console.log('compareArrays([1, 2, 3], [2, 3, 1]) =', compareArrays([1, 2, 3], [2, 3, 1])); // false
console.log('compareArrays([8, 1, 2], [8, 1, 2]) =', compareArrays([8, 1, 2], [8, 1, 2])); // true
console.log('');

function getUsersNamesInAgeRange(users, gender) {
	// Если массив пользователей пустой, возвращаем 0
	if (users.length === 0) {
		return 0;
	}

	// Фильтруем пользователей по полу
	const filteredUsers = users.filter(user => {
		return user.gender === gender;
	});

	// Если после фильтрации не осталось пользователей, возвращаем 0
	if (filteredUsers.length === 0) {
		return 0;
	}

	// Получаем массив возрастов отфильтрованных пользователей
	const ages = filteredUsers.map(user => {
		return user.age;
	});

	// Считаем сумму всех возрастов
	const totalAge = ages.reduce((sum, age) => {
		return sum + age;
	}, 0); // начальное значение суммы = 0

	// Вычисляем средний возраст и округляем до одного знака после запятой
	const averageAge = totalAge / filteredUsers.length;

	return averageAge;
}

// Данные для тестирования
const people = [{
		firstName: "Александр",
		secondName: "Карпов",
		age: 17,
		gender: "мужской"
	},
	{
		firstName: "Егор",
		secondName: "Морозов",
		age: 21,
		gender: "мужской"
	},
	{
		firstName: "Мелисса",
		secondName: "Леонова",
		age: 40,
		gender: "женский"
	},
	{
		firstName: "Мелания",
		secondName: "Савельева",
		age: 37,
		gender: "женский"
	},
	{
		firstName: "Мария",
		secondName: "Овчинникова",
		age: 18,
		gender: "женский"
	},
	{
		firstName: "Марьяна",
		secondName: "Котова",
		age: 17,
		gender: "женский"
	},
	{
		firstName: "Фёдор",
		secondName: "Селезнев",
		age: 50,
		gender: "мужской"
	},
	{
		firstName: "Георгий",
		secondName: "Петров",
		age: 35,
		gender: "мужской"
	},
	{
		firstName: "Даниил",
		secondName: "Андреев",
		age: 49,
		gender: "мужской"
	},
	{
		firstName: "Дарья",
		secondName: "Савельева",
		age: 25,
		gender: "женский"
	},
	{
		firstName: "Михаил",
		secondName: "Шаров",
		age: 22,
		gender: "мужской"
	},
	{
		firstName: "Владислав",
		secondName: "Давыдов",
		age: 40,
		gender: "мужской"
	},
	{
		firstName: "Илья",
		secondName: "Казаков",
		age: 35,
		gender: "мужской"
	},
	{
		firstName: "Евгений",
		secondName: "Кузьмин",
		age: 19,
		gender: "мужской"
	},
];

// Примеры для Задачи 2:
console.log('=== Задача 2: getUsersNamesInAgeRange ===');
console.log('getUsersNamesInAgeRange(people, "мужской") =', getUsersNamesInAgeRange(people, "мужской")); // ≈ 32
console.log('getUsersNamesInAgeRange(people, "женский") =', getUsersNamesInAgeRange(people, "женский")); // ≈ 27.4
console.log('getUsersNamesInAgeRange([], "женский") =', getUsersNamesInAgeRange([], "женский")); // 0
console.log('getUsersNamesInAgeRange(people, "инопланетянин") =', getUsersNamesInAgeRange(people, "инопланетянин")); // 0