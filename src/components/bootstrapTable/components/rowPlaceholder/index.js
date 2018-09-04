const {RowPlaceholder} = require('./rowPlaceholder');

let div = document.getElementById('main');
let rowP = new RowPlaceholder(["One", "Two", "Three"]);
let myFunc = function(){console.log("Passed as argument")};
rowP.button.setClickFunction(myFunc);
div.appendChild(rowP.HTML);