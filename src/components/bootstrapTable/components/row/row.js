const {RowButton} = require('../rowButton/rowButton');

function Row(HTMLRow = document.createElement('tr'), parentTable, iconClass = ["fas", "fa-trash"]){
    this.button = new RowButton(iconClass, ["btn", "btn-danger"]);
    this.HTML = HTMLRow;
    this.parentTable = parentTable;
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
    getIndex: function(){
        let index = 0;
        let child = this.HTML;
        while((child = child.previousSibling) != null)
            index++;
        return index;
    },
    removeFromTable: function (){
        let index = this.getIndex();
        if (this.parentTable != NaN){
            this.parentTable.lastDeletedRowIndex = index;
        }
        this.HTML.parentNode.removeChild(this.HTML);
    }
};

module.exports = {
    Row: Row
};