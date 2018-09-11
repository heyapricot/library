const {RowButton} = require('../rowButton/rowButton');

function Row(content, parent){
    this.content = [...content];
    this.deleteButton = new RowButton(["fas", "fa-trash"], ["btn", "btn-danger"]);
    this.deleteCallback = NaN;
    this.HTML = document.createElement('tr');
    this.parent = parent;
    this.initialize();
}
Row.prototype = {
    initialize: function(){
        this.content.forEach((cellContent)=>{
           this.addCell(cellContent);
        });
        this.setupDeleteButton();
    },
    addCell: function(content){
        let cell = document.createElement('td');
        if(typeof content === 'string'){
            cell.textContent = content;
        }
        else {
            let div = document.createElement('div');
            ["d-flex", "justify-content-center"].forEach((cssClass)=>{
                div.classList.toggle(cssClass);
            });
            div.appendChild(content.HTML);
            cell.appendChild(div);
        }
        this.HTML.appendChild(cell);
    },
    getIndex: function(){
        let index = 0;
        let child = this.HTML;
        while((child = child.previousSibling) != null){
            index++;
        }
        return index;
    },
    removeFromTable: function (){
        let index = this.getIndex();
        if (this.parentTable != NaN){
            this.parentTable.lastDeletedRowIndex = index;
        }
        this.HTML.parentNode.removeChild(this.HTML);
    },
    selfdestruct: function(callback = this.deleteCallback){
        const idx = this.getIndex();
        console.log("Bye bye #" + idx);
        this.HTML.parentNode.removeChild(this.HTML);
        callback(idx);
        return idx;
    },
    setupDeleteButton: function(){
        this.deleteButton.setClickFunction(this.selfdestruct.bind(this));
        this.addCell(this.deleteButton);
    },
    values: function(){
        let output = [];
        this.content.forEach((element)=>{
            let value = NaN;
            if(typeof element === 'string'){
                value = element;
            }
            else {
                value = element.value;
            }
            output.push(value);
        });
        return output;
    }
};

module.exports = {
    Row: Row,
};