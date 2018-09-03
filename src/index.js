const {Book, addBookToLibrary, bookToHTMLTableRow} = require("./components/book/book");
const {BootstrapTable} = require('./components/bootstrapTable/bootstrapTable');

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