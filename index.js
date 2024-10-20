let myLibrary =[];

function Book(name,author,pages,read) {
    this.name =  name,
    this.author = author,
    this.pages = pages,
    this.read = read,

    this.addBookToLibrary = function (){
        myLibrary.push(this);

    };

   
};

function displayBooks(){

    const bookContainer = document.getElementById("book-container");

    bookContainer.innerHTML='';

    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        
        bookCard.classList.add('book-card');
        
        bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.read}</p>
    `;

bookContainer.appendChild(bookCard);


    });
};


const book1 = new Book("Book1", "amandi", 310, "Read");
const book2 = new Book("Book2", "ranasinghe", 328, "Not read yet");
const book3 = new Book("Book3", "Vidu", 281, "Read");

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();

displayBooks();

console.log(myLibrary);