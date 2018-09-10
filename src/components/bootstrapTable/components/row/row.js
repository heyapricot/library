function Row(content, parent){
    this.content = [...content];
    this.HTML = document.createElement('tr');
    this.parent = parent;
    this.initialize();
}
Row.prototype = {
    initialize: function(){
        this.content.forEach((cellContent)=>{
           this.addCell(cellContent);
        });
    },
    addCell: function(content){
        let cell = document.createElement('td');
        if(typeof content === 'string'){
            cell.textContent = content;
        }
        else {
            let div = document.createElement('div');
            ["d-flex", "justify-content-center"].forEach((cssClass)=>{
                div.classList.toggle(cssClass);
            });
            div.appendChild(content.HTML);
            cell.appendChild(div);
        }
        this.HTML.appendChild(cell);
    },
    getIndex: function(){
        let index = 0;
        let child = this.HTML;
        while((child = child.previousSibling) != null)
            console.log("Shoud say hello");
            index++;
        return index;
    },
    removeFromTable: function (){
        let index = this.getIndex();
        if (this.parentTable != NaN){
            this.parentTable.lastDeletedRowIndex = index;
        }
        this.HTML.parentNode.removeChild(this.HTML);
    },
};

module.exports = {
    Row: Row
};