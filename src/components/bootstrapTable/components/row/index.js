const {RowButton} = require('../rowButton/rowButton');
const {Row} = require('./row');
let tbody = {
    HTML: document.getElementById('main')
};
let contents = ["Title", "Author", "999"];
let row = new Row(contents,tbody);
const setupDelButton= function(){
    const delRow = function(row){
        let parent = row.parent;
        let idx = row.getIndex();
        parent.HTML.removeChild(row.HTML);
        console.log("Bye bye row#" + idx);
    };
    const wrapper = function(){delRow(row)};
    let button = new RowButton();
    button.setClickFunction(wrapper);
    return button;
};
const setupToggleButton = function(){
    const modifyRowContent = function(row, button){
        let newContent = [...row.content];
        console.log("Row values are: " + row.values());
        let index = newContent.indexOf(button);
        console.log("I'm row#" + row.getIndex());
        console.log("Button is column#" + index);
    };
    let button = new RowButton(["fas","fa-book"],["btn", "btn-primary"], true);
    const wrapper = function () {modifyRowContent(row,button)};
    button.setClickFunction(wrapper);
    return button;
};
let toggle = setupToggleButton();
row.content.push(toggle);
row.addCell(toggle);
row.addCell(setupDelButton());
tbody.HTML.appendChild(row.HTML);