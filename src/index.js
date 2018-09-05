const {Book, addBookToLibrary, bookToHTMLTableRow} = require("./components/book/book");
const {BootstrapTable} = require('./components/bootstrapTable/bootstrapTable');

const mainSection = document.querySelector('#main');
const headers = ["Title", "Author", "# of Pages", "is Read?"];
let library = [
    new Book("Turtles All The Way Down", "John Green", 298),
    new Book("The Fault in Our Stars", "John Green", 300)
];
let btable = new BootstrapTable(headers);
btable.setTableClass('table-dark');
let buttonFunction = function(){
    let inputArray = this.rowPlaceholder.fieldContent(this.rowPlaceholder.inputFields);
    if (!inputArray.includes("")) {
        //this.addRow(this.rowPlaceholder.createRow(inputArray));
        let book = Book.fromInput(...inputArray);
        library.push(book);
        console.log(library);
    }
};
btable.rowPlaceholder.button.setClickFunction(buttonFunction.bind(btable));

library.forEach((book)=>{btable.addRow(bookToHTMLTableRow(book))});

mainSection.appendChild(btable.table);