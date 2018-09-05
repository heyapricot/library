const {Row} = require('./row');

const table = document.getElementsByClassName('table').item(0);
let tbody = document.getElementById('main');
let HTMLRow = document.createElement('tr');
[1,2,3].forEach((elem)=>{
    let cell = document.createElement('td');
    cell.textContent = elem.toString();
    HTMLRow.appendChild(cell);
});
console.log(table);
let row = new Row(HTMLRow, table);
tbody.appendChild(row.HTML);