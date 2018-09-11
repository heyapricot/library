const {Book, addBookToLibrary, bookToHTMLTableRow, deleteBookFromLibrary} = require("./components/book/book");
const {BootstrapTable} = require('./components/bootstrapTable/bootstrapTable');

const mainSection = document.querySelector('#main');

const testDelete = function(table){
    console.log("this was defined in src/index. Bye bye row#" + table.lastDeletedRowIndex);
};

const createRowForBT = function(row, BootstrapTable){
    let newRow = row;
    newRow.parent = BootstrapTable;
    const testDeleteWrapper = function(){testDelete(BootstrapTable)};
    newRow.deleteButton.setClickFunction(testDeleteWrapper);
    BootstrapTable.body.HTML.appendChild(newRow.HTML);
};

let buttonFunction = function(){
    let inputArray = this.rowPlaceholder.fieldContent(this.rowPlaceholder.inputFields);
    if (!inputArray.includes("")) {
        //this.addRow(this.rowPlaceholder.createRow(inputArray));
        let book = Book.fromInput(...inputArray);
        library.push(book);
        console.log(library);
    }
};


const headers = ["Title", "Author", "# of Pages"];
let library = [
    new Book("Turtles All The Way Down", "John Green", 298),
    new Book("The Fault in Our Stars", "John Green", 300)
];
let btable = new BootstrapTable(headers);
btable.addHeader("is Read?");
let rpWrapper = function(){createRowForBT(btable.footer.content.rowPlaceholder.createRow(), btable)};
btable.footer.content.rowPlaceholder.buttons[1].setClickFunction(rpWrapper);

//btable.rowPlaceholder.button.setClickFunction(buttonFunction.bind(btable));

//btable.rowFunction = del;

// library.forEach((book)=>{
//     let row = btable.footer.content.rowPlaceholder.createRow(Object.values(book));
//     createRowForBT(row,btable);
// });

mainSection.appendChild(btable.HTML);