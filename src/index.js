const {Book, addBookToLibrary, bookFromInput, bookToHTMLTableRow, deleteBookFromLibrary} = require("./components/book/book");
const {BootstrapTable} = require('./components/bootstrapTable/bootstrapTable');

let library = [];

const mainSection = document.querySelector('#main');

const testDelete = function(table, library){
    let rowIdx = table.lastDeletedRowIndex;
    library.splice(rowIdx,1);
    console.log(library);
};

const updateLibrary = function(table, library){
    let rowIdx = table.lastUpdatedRowIndex;
    let values = table.body.content[rowIdx].values();
    let bool = values[values.length - 1];
    library[rowIdx].isRead = bool;
    console.log(library);
};

const createRowForBT = function(row, BootstrapTable, library){
    let newRow = row;
    newRow.parent = BootstrapTable;
    const testDeleteWrapper = function(){testDelete(BootstrapTable,library)};
    newRow.deleteButton.setClickFunction(testDeleteWrapper);
    newRow.content[newRow.content.length - 1].setClickFunction(function () {
       updateLibrary(BootstrapTable, library);
    });
    BootstrapTable.body.content.push(newRow);
    let newBook = bookFromInput(...newRow.values());
    console.log(newBook);
    library.push(newBook);
    BootstrapTable.body.HTML.appendChild(newRow.HTML);
    console.log(library);
};

const headers = ["Title", "Author", "# of Pages"];
let btable = new BootstrapTable(headers);
btable.addHeader("is Read?");
let rpWrapper = function(){createRowForBT(btable.footer.content.rowPlaceholder.createRow(), btable, library)};
btable.footer.content.rowPlaceholder.buttons[1].setClickFunction(rpWrapper);

mainSection.appendChild(btable.HTML);