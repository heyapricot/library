const {RowButton} = require('../rowButton/rowButton');

function Row(HTMLRow = document.createElement('tr'), parentHTMLTable, iconClass = ["fas", "fa-trash"]){
    this.button = new RowButton(iconClass, ["btn", "btn-danger"]);
    this.HTML = HTMLRow;
    this.parentHTMLTable = parentHTMLTable;
    this.inititalize();
}

Row.prototype = {
    inititalize: function(){
        this.button.setClickFunction(this.removeFromTable.bind(this));
        this.attachButton();
    },
    attachButton: function(){
        let button = this.button.HTML;
        let cell = document.createElement('td');
        cell.appendChild(button);
        this.HTML.appendChild(cell);
    },
    removeFromTable: function (){
        this.parentHTMLTable.deleteRow(this.HTML.rowIndex);
    }
};

module.exports = {
    Row: Row
};