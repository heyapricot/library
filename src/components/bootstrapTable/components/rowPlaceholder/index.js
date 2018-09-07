const {RowPlaceholder} = require('./rowPlaceholder');

let div = document.getElementById('main');
let rowP = new RowPlaceholder(["One", "Two"]);
let myFunc = function(){console.log("Passed as argument")};
rowP.buttons[1].setClickFunction(myFunc);
div.appendChild(rowP.HTML);