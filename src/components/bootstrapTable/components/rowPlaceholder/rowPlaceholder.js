const {RowButton} = require('../rowButton/rowButton');
const {Row} = require('../row/row');

function RowPlaceholder(headers){
    this.headers = headers;
    this.HTML = document.createElement('tr');
    this.inputFields = [];
    this.buttons = [new RowButton(["fas", "fa-check"], ["btn", "btn-success"], true), new RowButton(["fas", "fa-plus"], ["btn", "btn-primary"])];
    this.initialize();
}

RowPlaceholder.prototype = {
    initialize: function(){
        this.headers.forEach((header)=>{ this.inputFields.push(this.renderInputField(header))});
        this.inputFields.forEach((inputField)=>{
            this.HTML.appendChild(this.createCell(inputField));
        });
        this.buttons.forEach((button)=>{
           let div = document.createElement('div');
           ["d-flex", "justify-content-center"].forEach((cssClass)=>{div.classList.toggle(cssClass)});
           div.appendChild(button.HTML);
           let cell = this.createCell(div);
           this.HTML.appendChild(cell);
        });
    },
    createCell: function(child){
        let cell = document.createElement('td');
        cell.appendChild(child);
        return cell;
    },
    createRow: function(){
        let contents = this.fieldContent(this.inputFields);
        let tbIndex = contents.length;
        let toggleButton = new RowButton(["fas", "fa-check"], ["btn", "btn-success"], true);
        contents.push(toggleButton);
        let row = new Row(contents);
        let TB = row.content[row.content.length - 1];
        TB.setClickFunction(function(){toggleFn(row)}.bind(row));
        let delButton = new RowButton(["fas", "fa-trash"], ["btn", "btn-danger"]);
        delButton.setClickFunction(row.selfdestruct.bind(row));
        row.addCell(delButton);
        return row;
    },
    fieldContent: function(array){
        let output = [];
        array.forEach((inputField)=>{ output.push(inputField.value) });
        return output;
    },
    renderInputField: function(placeholder){
        let input = document.createElement('input');
        input.classList.toggle('form-control');
        input.setAttribute('placeholder', placeholder);
        return input;
    },
    renderCell: function(cell){
        this.HTML.appendChild(cell);
    }
};

function toggleFn(row){
    console.log("I'm row#" + row.getIndex())
}

module.exports = {
    RowPlaceholder: RowPlaceholder
};
