const {Row} = require('./components/row/row');
const {RowPlaceholder} = require('./components/rowPlaceholder/rowPlaceholder');

function BootstrapTable(headers){
    this.HTML = document.createElement('table');
    this.header = {
        content: [...headers],
        HTML: this.HTML.createTHead()
    };
    this.body = {
        content: [],
        HTML: this.HTML.createTBody(),
    };
    this.footer ={
        content: {},
        HTML: this.HTML.createTFoot()
    };
    this.initialize();
}

BootstrapTable.prototype = {
    initialize: function(){
        this.setupTable();
        this.setupHeader();
        this.setupFooter();
    },
    addRow: function(parent){
        let row = new Row(this);
        parent.HTML.appendChild(row.HTML);
    },
    deleteRow: function(index){
        this.HTML.deleteRow(index);
    },
    setupFooter: function(){
        let footer = this.footer;
        let rp = footer.content.rowPlaceholder = new RowPlaceholder(this.header.content);
        footer.HTML.appendChild(rp.HTML);
    },
    setupHeader: function(){
        let row = document.createElement('tr');
        let headerContent = [...this.header.content];
        headerContent.forEach((headerText)=>{
            let cell = document.createElement('th');
            cell.setAttribute('scope','col');
            cell.textContent = headerText;
            row.appendChild(cell);
        });
        this.header.HTML.appendChild(row);
    },
    setupTable: function(){
        ["table", "table-dark"].forEach((cssClass)=>{
            this.HTML.classList.toggle(cssClass);
        });
    },
    newRowFromPlaceholder: function(){
        let inputArray = this.rowPlaceholder.fieldContent(this.rowPlaceholder.inputFields);
        if (!inputArray.includes("")) { this.addRow(this.rowPlaceholder.createRow(inputArray)) }
    },
};

module.exports = {
    BootstrapTable: BootstrapTable
};