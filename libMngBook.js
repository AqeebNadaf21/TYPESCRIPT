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
var Book = /** @class */ (function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = true; // Initially, the book is available
    }
    Book.prototype.borrowBook = function () {
        if (this.available) {
            this.available = false;
            console.log("You have borrowed \"".concat(this.title, "\"."));
        }
        else {
            console.log("Sorry, \"".concat(this.title, "\" is currently not available."));
        }
    };
    Book.prototype.returnBook = function () {
        this.available = true;
        console.log("You have returned \"".concat(this.title, "\"."));
    };
    Book.prototype.getBookInfo = function () {
        console.log("Title: ".concat(this.title, ", Author: ").concat(this.author, ", Available: ").concat(this.available));
    };
    return Book;
}());
// LibraryMember class definition
var LibraryMember = /** @class */ (function () {
    function LibraryMember(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }
    LibraryMember.prototype.borrowBook = function (book) {
        if (book.available) {
            book.borrowBook();
            this.borrowedBooks.push(book);
        }
        else {
            console.log("\"".concat(book.title, "\" is not available for borrowing."));
        }
    };
    LibraryMember.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
        }
        else {
            console.log("You do not have \"".concat(book.title, "\" borrowed."));
        }
    };
    LibraryMember.prototype.listBorrowedBooks = function () {
        if (this.borrowedBooks.length > 0) {
            console.log("".concat(this.name, "'s borrowed books:"));
            this.borrowedBooks.forEach(function (book) { return console.log("- ".concat(book.title)); });
        }
        else {
            console.log("".concat(this.name, " has no borrowed books."));
        }
    };
    return LibraryMember;
}());
// Librarian class definition
var Librarian = /** @class */ (function () {
    function Librarian(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }
    Librarian.prototype.addBook = function (library, book) {
        library.push(book);
        console.log("\"".concat(book.title, "\" has been added to the library."));
    };
    Librarian.prototype.removeBook = function (library, book) {
        var index = library.indexOf(book);
        if (index !== -1) {
            library.splice(index, 1);
            console.log("\"".concat(book.title, "\" has been removed from the library."));
        }
        else {
            console.log("\"".concat(book.title, "\" is not in the library."));
        }
    };
    Librarian.prototype.listBooks = function (library) {
        console.log("Library Inventory:");
        library.forEach(function (book) {
            console.log("- ".concat(book.title, " (Available: ").concat(book.available, ")"));
        });
    };
    return Librarian;
}());
// Demonstration of the library management system
var library = [];
var librarian = new Librarian("Alice", 1);
var member = new LibraryMember("Bob", 101);
// Adding books to the library
var book1 = new Book("1984", "George Orwell", "123456789");
var book2 = new Book("To Kill a Mockingbird", "Harper Lee", "987654321");
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
