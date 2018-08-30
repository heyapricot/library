function Table(){
    this.table = document.createElement('table');
    this.tableHead = table.createTHead();
    this.rows = table.rows;
}

Table.prototype.createHeader = function (){
  this.table.createTHead();

};

module.exports = {
    Table: Table
};