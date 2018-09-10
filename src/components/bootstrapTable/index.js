const {BootstrapTable} = require('./bootstrapTable');
let div = document.getElementById('main');
const headers = ["Title", "Author", "# of Pages", "is Read?"];
let btable = new BootstrapTable(headers);
div.appendChild(btable.HTML);