function Book(title, author, pageQty) {
    this.title = title;
    this.author = author;
    this.pageQty = pageQty;
    this.isRead = false;

    Book.fromInput = function(...input) {
        return new Book(input[0], input[1], input[2]);
    }
}

Book.prototype.info = function(){
    let isRead;
    this.isRead ? isRead = "already read" : isRead = "not read yet";
    return this.title + " by " + this.author + ", " + pageQty + " pages, " + isRead;
};

function BootstrapTable(){
    this.table = document.createElement('table');
    this.head = this.table.createTHead();
    this.body = document.createElement('tbody');
    this.rows = this.table.rows;
    this.initialize();
}

BootstrapTable.prototype = {
    initialize: function(){
        this.table.classList.toggle('table');
        this.head.insertRow();
        this.table.appendChild(this.body);
    },
    addRow: function(HTMLRow){
        this.body.appendChild(HTMLRow);
    },
    rowFromArray: function (array) {
        let row = this.body.insertRow();
        array.forEach((elem)=>{
            let cell = row.insertCell();
        })
    },
    setTableClass: function(cssClass){
        this.table.classList.toggle(cssClass)
    },
    setColumnHeaders: function(array){
        array.forEach((colHeader)=>{
            const th = document.createElement('th');
            th.setAttribute('scope','col');
            th.textContent = colHeader;
            this.head.rows.item(0).appendChild(th);
        });
    },
};

function addBookToLibrary(book,library){
    return [...library] + [book]
}

function bookToHTMLTableRow(book){
    let row = document.createElement('tr');
    Object.values(book).forEach((bookProperty)=>{
        let cell = row.insertCell();
        cell.textContent = bookProperty
    });
    return row;
}

//Main program
const mainSection = document.querySelector('#main');
const headers = ["Title", "Author", "# of Pages", "is Read?"];
let btable = new BootstrapTable();
let library = [
    new Book("Turtles All The Way Down", "John Green", 298),
    new Book("The Fault in Our Stars", "John Green", 300)
];

btable.setTableClass('table-dark');
btable.setColumnHeaders(headers);
library.forEach((book)=>{btable.addRow(bookToHTMLTableRow(book))});

mainSection.appendChild(btable.table);