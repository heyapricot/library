const {RowButton} = require('./rowButton');

let div = document.getElementById('main');
let testFunction = function(){
    this.toggleAppearance();
    console.log(this.activeStatus);
};
let button = new RowButton(["fas", "fa-question-circle"], ["btn","btn-danger"]);
button.setClickFunction(testFunction.bind(button));
div.appendChild(button.HTML);