BootstrapTable.prototype = {
    initialize: function(){
        this.table.classList.toggle('table');
        this.HTMLhead.insertRow();
        this.table.appendChild(this.body);
        this.setColumnHeaders(this.headers);
        this.renderRowPlaceholder();
    },
    addRow: function(HTMLRow){
        this.body.appendChild(HTMLRow);
    },
    renderRowPlaceholder: function(){
        let rowPlaceHolder = document.createElement('tr');
        this.headers.forEach((header)=>{
            let input = document.createElement('input');
            input.classList.toggle('form-control');
            input.setAttribute('placeholder', header);
            let cell = document.createElement('td');
            cell.appendChild(input);
            rowPlaceHolder.appendChild(cell);
        });

        let cell = document.createElement('td');
        let button = document.createElement('button');
        button.classList.toggle('btn');
        button.classList.toggle('btn-success');
        button.textContent = "+";
        button.addEventListener('click', ()=>{
            console.log("Lolo");
        });
        cell.appendChild(button);
        rowPlaceHolder.appendChild(cell);
        this.footer.appendChild(rowPlaceHolder);
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