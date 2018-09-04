const {RowPlaceholder} = require('./rowPlaceholder');

let div = document.getElementById('main');
let rowP = new RowPlaceholder(["One", "Two", "Three"]);
div.appendChild(rowP.HTML);