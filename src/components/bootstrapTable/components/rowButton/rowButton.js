function RowButton(fontAwesomeClassArray, cssClassArray, clickFunction){
    this.HTML = document.createElement('button');
    this.initialize(fontAwesomeClassArray, cssClassArray, clickFunction);
}

RowButton.prototype = {
    initialize: function(fontAwesomeClassArray, cssClassArray, clickFunction){
        this.setCSS(cssClassArray);
        this.HTML.appendChild(this.createIcon(fontAwesomeClassArray));
        this.setClickFunction(clickFunction);
    },
    createIcon: function(fontAwesomeClassArray){
        let icon = document.createElement('i');
        fontAwesomeClassArray.forEach((faClass)=>{icon.classList.toggle(faClass)});
        return icon;
    },
    setClickFunction: function(clickFunction){
        this.HTML.addEventListener('click', clickFunction);
    },
    setCSS: function(array){
        array.forEach((cssClass)=>{
            this.HTML.classList.toggle(cssClass);
        })
    }
};

module.exports = {
    RowButton: RowButton
};