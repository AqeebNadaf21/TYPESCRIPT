// A Library system with classes for Book, LibraryMember, and Librarian.:
// Assignment: Library Management System
//  Create a TypeScript program that models a simple library management system. Your system should include the following classes:
// 1. Book:
// Properties:
// title: string
// author: string
// isbn: string
// available: boolean (indicates if the book is available for borrowing)
// Methods:
// borrowBook(): If the book is available, mark it as borrowed (not available) and print a message.
// returnBook(): Mark the book as available and print a message.
// getBookInfo(): Print the book's title, author, and availability.
// 1
// A Library system with classes for Book, LibraryMember, and Librarian.:
// Assignment: Library Management System
//  Create a TypeScript program that models a simple library management system. Your system should include the 
// following classes:
// 1. LibraryMember:
// Properties:
// name: string
// memberId: number
// borrowedBooks: Book[] (an array to keep track of borrowed books)
// Methods:
// borrowBook(book: Book): Borrow a book if it's available and add it to the member's borrowed books list.
// returnBook(book: Book): Return a borrowed book and remove it from the member's borrowed books list.
// listBorrowedBooks(): Print the titles of all borrowed books.
// 2
//  A Library system with classes for Book, LibraryMember, and Librarian.:
// Assignment: Library Management System
//  Create a TypeScript program that models a simple library management system. Your system 
// should include the following classes:
// 1. Librarian:
// Properties:
// name: string
// employeeId: number
// Methods:
// addBook(library: Book[], book: Book): Add a new book to the library.
// removeBook(library: Book[], book: Book): Remove a book from the library.
// listBooks(library: Book[]): Print the titles of all books in the library and their availability.
// Instructions : 
// 1. Implement the Book, LibraryMember, and Librarian classes as shown.
// 2. Create instances of these classes and demonstrate borrowing and returning books.
// 3. Ensure your program correctly updates the availability of books and the member's borrowed books list.
// 4. Print the library's inventory before and after borrowing/returning books.
// 3


// Book class definition
class Book {
    title: string;
    author: string;
    isbn: string;
    available: boolean;

    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = true; // Initially, the book is available
    }

    borrowBook(): void {
        if (this.available) {
            this.available = false;
            console.log(`You have borrowed "${this.title}".`);
        } else {
            console.log(`Sorry, "${this.title}" is currently not available.`);
        }
    }

    returnBook(): void {
        this.available = true;
        console.log(`You have returned "${this.title}".`);
    }

    getBookInfo(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, Available: ${this.available}`);
    }
}

// LibraryMember class definition
class LibraryMember {
    name: string;
    memberId: number;
    borrowedBooks: Book[];

    constructor(name: string, memberId: number) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }

    borrowBook(book: Book): void {
        if (book.available) {
            book.borrowBook();
            this.borrowedBooks.push(book);
        } else {
            console.log(`"${book.title}" is not available for borrowing.`);
        }
    }

    returnBook(book: Book): void {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log(`You do not have "${book.title}" borrowed.`);
        }
    }

    listBorrowedBooks(): void {
        if (this.borrowedBooks.length > 0) {
            console.log(`${this.name}'s borrowed books:`);
            this.borrowedBooks.forEach(book => console.log(`- ${book.title}`));
        } else {
            console.log(`${this.name} has no borrowed books.`);
        }
    }
}

// Librarian class definition
class Librarian {
    name: string;
    employeeId: number;

    constructor(name: string, employeeId: number) {
        this.name = name;
        this.employeeId = employeeId;
    }

    addBook(library: Book[], book: Book): void {
        library.push(book);
        console.log(`"${book.title}" has been added to the library.`);
    }

    removeBook(library: Book[], book: Book): void {
        const index = library.indexOf(book);
        if (index !== -1) {
            library.splice(index, 1);
            console.log(`"${book.title}" has been removed from the library.`);
        } else {
            console.log(`"${book.title}" is not in the library.`);
        }
    }

    listBooks(library: Book[]): void {
        console.log("Library Inventory:");
        library.forEach(book => {
            console.log(`- ${book.title} (Available: ${book.available})`);
        });
    }
}

// Demonstration of the library management system
const library: Book[] = [];
const librarian = new Librarian("Alice", 1);
const member = new LibraryMember("Bob", 101);

// Adding books to the library
const book1 = new Book("1984", "George Orwell", "123456789");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "987654321");
librarian.addBook(library, book1);
librarian.addBook(library, book2);

// Listing books in the library
librarian.listBooks(library);

// Member borrowing a book
member.borrowBook(book1);
member.listBorrowedBooks();

// Listing books after borrowing
librarian.listBooks(library);

// Member returning a book
member.returnBook(book1);
member.listBorrowedBooks();

// Listing books after returning
librarian.listBooks(library);


