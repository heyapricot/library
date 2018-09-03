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

function BootstrapTable(headers){
    this.table = document.createElement('table');
    this.headers = headers;
    this.body = document.createElement('tbody');
    this.footer = this.table.createTFoot();
    this.rows = this.table.rows;
    this.HTMLhead = this.table.createTHead();
    this.initialize();
}

BootstrapTable.prototype = {
    initialize: function(){
        this.table.classList.toggle('table');
        this.HTMLhead.insertRow();
        this.table.appendChild(this.body);
        this.setColumnHeaders(this.headers);
        this.renderRowPlaceholder();
    },
    addRow: function(HTMLRow){
        this.body.appendChild(HTMLRow);
    },
    renderRowPlaceholder: function(){
        let rowPlaceHolder = document.createElement('tr');
        this.headers.forEach((header)=>{
            let input = document.createElement('input');
            input.classList.toggle('form-control');
            input.setAttribute('placeholder', header);
            let cell = document.createElement('td');
            cell.appendChild(input);
            rowPlaceHolder.appendChild(cell);
        });

        let cell = document.createElement('td');
        let button = document.createElement('button');
        button.classList.toggle('btn');
        button.classList.toggle('btn-success');
        button.textContent = "+";
        button.addEventListener('click', ()=>{
           console.log("Lolo");
        });
        cell.appendChild(button);
        rowPlaceHolder.appendChild(cell);
        this.footer.appendChild(rowPlaceHolder);
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
            this.HTMLhead.rows.item(0).appendChild(th);
        });
        const th = document.createElement('th');
        th.setAttribute('scope','col');
        this.HTMLhead.rows.item(0).appendChild(th);
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
let btable = new BootstrapTable(headers);
let library = [
    new Book("Turtles All The Way Down", "John Green", 298),
    new Book("The Fault in Our Stars", "John Green", 300)
];

btable.setTableClass('table-dark');
library.forEach((book)=>{btable.addRow(bookToHTMLTableRow(book))});

mainSection.appendChild(btable.table);