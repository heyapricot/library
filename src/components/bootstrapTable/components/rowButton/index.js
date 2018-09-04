const {RowButton} = require('./rowButton');

let div = document.getElementById('main');
let testFunction = function(){
    console.log("I am a test function");
};
let button = new RowButton("Test", ["btn","btn-danger"]);
button.setClickFunction(testFunction);
div.appendChild(button.HTML);