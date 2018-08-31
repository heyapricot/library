function BootstrapTable(){
    this.table = document.createElement('table');
    this.head = this.table.createTHead();
    this.body = document.createElement('tbody');
    this.rows = this.table.rows;
    this.initialize();
}

BootstrapTable.prototype = {
    initialize: function(){
        this.table.classList.toggle('table');
        this.head.insertRow();
        this.table.appendChild(this.body);
    },
    addRow: function(HTMLRow){
        this.body.appendChild(HTMLRow);
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
            this.head.rows.item(0).appendChild(th);
        });
    },
};

module.exports = {
    BootstrapTable: BootstrapTable
};