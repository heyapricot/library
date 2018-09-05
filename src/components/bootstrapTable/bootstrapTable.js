const {Row} = require('./components/row/row');
const {RowPlaceholder} = require('./components/rowPlaceholder/rowPlaceholder');

function BootstrapTable(headers){
    this.table = document.createElement('table');
    this.headers = headers;
    this.body = document.createElement('tbody');
    this.footer = this.table.createTFoot();
    this.rows = this.table.rows;
    this.HTMLhead = this.table.createTHead();
    this.rowPlaceholder = new RowPlaceholder(this.headers);
    this.initialize();
}

BootstrapTable.prototype = {
    initialize: function(){
        this.table.classList.toggle('table');
        this.HTMLhead.insertRow();
        this.table.appendChild(this.body);
        this.setColumnHeaders(this.headers);
        let buttonFunction = function(){
            let inputArray = this.rowPlaceholder.fieldContent(this.rowPlaceholder.inputFields);
            if (!inputArray.includes("")) { this.addRow(this.rowPlaceholder.createRow(inputArray)) }
        };
        this.rowPlaceholder.button.setClickFunction(buttonFunction.bind(this));
        this.renderFooter(this.rowPlaceholder.HTML);
    },
    addRow: function(HTMLRow){
        let row = new Row(HTMLRow, this.table);
        this.body.appendChild(row.HTML);
    },
    deleteRow: function(index){
        this.HTML.deleteRow(index);
    },
    renderFooter: function(HTMLRow){
      this.footer.appendChild(HTMLRow);
    },
    rowFromArray: function (array) {
        let row = this.body.insertRow();
        array.forEach((elem)=>{
            let cell = row.insertCell();
        })
    },
    setTableClass: function(cssClass){
        this.table.classList.toggle(cssClass)
    },
    setColumnHeaders: function(array){
        array.forEach((colHeader)=>{
            const th = document.createElement('th');
            th.setAttribute('scope','col');
            th.textContent = colHeader;
            this.HTMLhead.rows.item(0).appendChild(th);
        });
        const th = document.createElement('th');
        th.setAttribute('scope','col');
        this.HTMLhead.rows.item(0).appendChild(th);
    },
};

module.exports = {
    BootstrapTable: BootstrapTable
};