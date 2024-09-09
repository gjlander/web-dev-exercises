class LibraryItem {
    #title;
    #author;
    constructor(title, author) {
        this.#title = title;
        this.#author = author;
    }
    getTitle() {
        return this.#title;
    }
    getAuthor() {
        return this.#author;
    }
    getInfo() {
        return `Title: ${this.#title}, Author: ${this.#author}`;
    }
}

class Book extends LibraryItem {
    #pages;
    constructor(title, author, pages) {
        super(title, author);
        this.#pages = pages;
    }
    getInfo() {
        return `Title: ${this.getTitle()}, Author: ${this.getAuthor()}, Pages: ${
            this.#pages
        }`;
    }
}

class Member {
    #name;
    #booksCheckedOut;
    constructor(name) {
        this.#name = name;
        this.#booksCheckedOut = [];
    }
    checkOutBook(book) {
        this.#booksCheckedOut.push(book);
    }
    returnBook(book) {
        this.#booksCheckedOut = this.#booksCheckedOut.filter(
            (currBook) => currBook !== book
        );
    }
    listBooks() {
        return `${this.#name} has checked out: ${this.#booksCheckedOut.map(
            (book, i, array) =>
                i < array.length - 1
                    ? ` ${book.getTitle()}`
                    : ` ${book.getTitle()}.`
        )}`;
    }
}

const movie1 = new LibraryItem('Fury Road', 'Somebody');

console.log(movie1.getInfo());

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 236);
const fellowship = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 400);
const twoTowers = new Book('The Two Towers', 'J.R.R Tolkien', 450);
const rotK = new Book('The Return of the King', 'J.R.R Tolkien', 452);

// console.log(theHobbit.getInfo());

const dave = new Member('Dave Pilky');
dave.checkOutBook(theHobbit);
dave.checkOutBook(fellowship);
dave.checkOutBook(twoTowers);
dave.checkOutBook(rotK);
console.log(dave);

console.log(dave.listBooks());

dave.returnBook(fellowship);
dave.returnBook(theHobbit);
dave.returnBook(rotK);
dave.returnBook(twoTowers);

console.log(dave.listBooks());
