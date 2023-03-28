window.onload = function () {
    console.log("work");
    booksList.init();
};


class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.id = Date.now();
    }
}

class BooksList {
    constructor () {
        this.books = [];
    }

    init() {
        document.getElementById("saveButton").addEventListener("click", 
        (event) => this.saveButton(event));
        
        this.loadDataFromStorage();
    }

    loadDataFromStorage() {
        const data = storage.getItems();
        if(data == null || data == undefined) return;
        this.books = data;
        data.forEach((value, index) => {
            ui.addBookToTable(value);
        })
    }

    saveButton(event) {
        const author = document.getElementById("bookAuthor").value;
        const title = document.getElementById("bookTitle").value;
        event.preventDefault();
        if(author === "" || title === "") {
            alert("null value");
            return;
        }

        const book = new Book(title, author);
        this.addBook(book);
    }

    addBook(book) {
        this.books.push(book);
        ui.addBookToTable(book);
        this.saveData();
    }

    removeBookById(bookId) {
        this.books.forEach((element, index) => {
            if(element.id == bookId) this.books.splice(index, 1);
        });

        this.saveData();
    }

    saveData() {
        storage.saveItems(this.books);
    }
}



const booksList = new BooksList();

class Ui {

    deleteBook(event) {
        const bookId = event.target.getAttribute("data-book-id");
        event.target.parentElement.parentElement.remove();
        booksList.removeBookById(bookId);
    }

    addBookToTable(book) {
        const tbody = document.querySelector("#booksTable tbody");
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td> ${book.title} </td>
            <td> ${book.author} </td>
            <td> 
                <button type="button" data-book-id="${book.id}" class="btn btn-danger brn-small delete">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);

        let deleteButton = document.querySelector(`button.delete[data-book-id='${book.id}']`)
        deleteButton.addEventListener("click", (event) => this.deleteBook(event));
        this.clearForm();
    }

    clearForm() {
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
    }
}

const ui = new Ui();


class Storage {

    getItems() {
        let books = null;
        if(localStorage.getItem("books") !== null){
            books = JSON.parse(localStorage.getItem("books"));
        } else {
            books = [];
        }

        return books;
    }

    saveItems (books) {
        localStorage.setItem("books", JSON.stringify(books));
    }
}

const storage = new Storage();