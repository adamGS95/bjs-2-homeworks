// Задача 1: Инкапсуляция студента

// 1. Создаем функцию-конструктор Student
function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = []; // массив для оценок
}

// 2. Метод для установки предмета
Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
};

// 3. Метод для добавления оценок
Student.prototype.addMarks = function(...marksToAdd) {
	// Проверяем, существует ли свойство marks и не отчислен ли студент
	if (!this.marks) {
		console.log("Студент отчислен, нельзя добавить оценки");
		return;
	}

	// Добавляем все переданные оценки в массив
	this.marks.push(...marksToAdd);
};

// 4. Метод для вычисления среднего балла
Student.prototype.getAverage = function() {
	// Проверяем, есть ли оценки у студента
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}

	// Считаем сумму всех оценок
	let sum = 0;
	for (let i = 0; i < this.marks.length; i++) {
		sum += this.marks[i];
	}

	// Возвращаем среднее арифметическое
	return sum / this.marks.length;
};

// 5. Метод для отчисления студента
Student.prototype.exclude = function(reason) {
	// Удаляем свойства subject и marks
	delete this.subject;
	delete this.marks;

	// Добавляем причину отчисления
	this.excluded = reason;
};

// Примеры использования:
console.log('=== Задача 1: Инкапсуляция студента ===');

// Создаем студентов
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log("Средний балл до оценок:", student1.getAverage()); // 0

student1.addMarks(4, 5, 4, 5);
console.log("Средний балл после оценок:", student1.getAverage()); // 4.5
console.log("Информация о студенте 1:", student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log("Информация о студенте 2 после отчисления:", student2);

// Проверяем, что нельзя добавить оценки отчисленному студенту
student2.addMarks(5, 5, 5); // Должно появиться сообщение в консоли
console.log("Попытка добавить оценки отчисленному:", student2);



