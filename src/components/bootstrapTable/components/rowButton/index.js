const {RowButton} = require('./rowButton');
let div = document.getElementById('main');
let button = new RowButton(["fas", "fa-question-circle"], ["btn","btn-danger"],true);
div.appendChild(button.HTML);