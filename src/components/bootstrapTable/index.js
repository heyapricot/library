const {BootstrapTable} = require('./bootstrapTable');
const createRowForBT = function(RowPlaceholder, BootstrapTable){
    let row = RowPlaceholder.createRow();
    row.parent = BootstrapTable;
    BootstrapTable.body.HTML.appendChild(row.HTML);
};
let div = document.getElementById('main');
const headers = ["Title", "Author", "# of Pages"];
let btable = new BootstrapTable(headers);
btable.addHeader("is Read?");
let wrapper = function(){createRowForBT(btable.footer.content.rowPlaceholder, btable)};
btable.footer.content.rowPlaceholder.buttons[1].setClickFunction(wrapper);
div.appendChild(btable.HTML);