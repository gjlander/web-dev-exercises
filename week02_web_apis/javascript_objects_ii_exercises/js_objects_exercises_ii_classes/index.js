class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${
            this.pages
        }, Read: ${this.isRead ? 'Yes' : 'No'}`;
    }
}

let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 236, true);
console.log(theHobbit);
console.log(theHobbit.summary());
