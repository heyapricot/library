function RowButton(text, cssClass, clickFunction){
    this.HTML = document.createElement('button');
    this.text = text;
    this.initialize(cssClass, clickFunction);
}

RowButton.prototype = {
    initialize: function(cssClass, clickFunction){
        this.setCSS(cssClass);
        this.HTML.textContent = this.text;
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