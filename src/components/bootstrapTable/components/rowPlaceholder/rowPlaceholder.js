const {RowButton} = require('../rowButton/rowButton');

function RowPlaceholder(headers, onClickFunction){
    this.headers = headers;
    this.HTML = document.createElement('tr');
    this.inputFields = [];
    this.button = new RowButton("+", ["btn", "btn-success"]);
    this.initialize();
}

RowPlaceholder.prototype = {
    initialize: function(){
        this.headers.forEach((header)=>{ this.inputFields.push(this.renderInputField(header))});
        this.inputFields.forEach((inputField)=>{this.renderCell(inputField)});
        this.renderCell(this.button.HTML);
    },
    createRow: function(array){
        let row = document.createElement('tr');
        array.forEach((inputValue)=>{
            let cell = document.createElement('td');
            cell.textContent = inputValue;
            row.appendChild(cell);
        });
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
    renderCell: function(child){
        let cell = document.createElement('td');
        cell.appendChild(child);
        this.HTML.appendChild(cell);
    }
};

module.exports = {
    RowPlaceholder: RowPlaceholder
};
