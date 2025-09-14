// Задача 1: Печатное издание

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this._state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Примеры использования Задачи 1
console.log('=== Задача 1: Печатное издание ===');

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); // 2019
console.log(sherlock.state); // 100
sherlock.fix();
console.log(sherlock.state); // 100

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); // "Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); // 10
picknick.fix();
console.log(picknick.state); // 15

// Задача 2: Библиотека

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const book = this.books[i];
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}

// Примеры использования Задачи 2
console.log('\n=== Задача 2: Библиотека ===');

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); // null
console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); // 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); // 3

// Тестовый сценарий
console.log('\n=== Тестовый сценарий ===');

// Создаем библиотеку
const testLibrary = new Library("Тестовая библиотека");

// Добавляем несколько печатных изданий
testLibrary.addBook(new NovelBook("Лев Толстой", "Война и мир", 1869, 1225));
testLibrary.addBook(new FantasticBook("Айзек Азимов", "Основание", 1951, 255));
testLibrary.addBook(new Magazine("Наука и жизнь", 1919, 80));

// Находим книгу, изданную в 1919 году
const book1919 = testLibrary.findBookBy("releaseDate", 1919);
if (book1919) {
  console.log("Найдена книга 1919 года:", book1919.name);
} else {
  console.log("Книга 1919 года не найдена");
}

// Выдаем любую книгу
const issuedBook = testLibrary.giveBookByName("Основание");
if (issuedBook) {
  console.log("Выдана книга:", issuedBook.name);
  
  // Повреждаем выданную книгу
  issuedBook.state = 20;
  console.log("Книга повреждена, состояние:", issuedBook.state);
  
  // Восстанавливаем книгу
  issuedBook.fix();
  console.log("Книга восстановлена, состояние:", issuedBook.state);
  
  // Пытаемся добавить восстановленную книгу обратно
  testLibrary.addBook(issuedBook);
  console.log("Количество книг после попытки вернуть:", testLibrary.books.length);
}