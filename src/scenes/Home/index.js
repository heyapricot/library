function Book(title, author, pageQty) {
    this.title = title;
    this.author = author;
    this.pageQty = pageQty;
    this.isRead = false;

    Book.fromInput = function(...input) {
        return new Book(input[0], input[1], input[2]);
    }
}

Book.prototype.info = function(){
    let isRead;
    this.isRead ? isRead = "already read" : isRead = "not read yet";
    return this.title + " by " + this.author + ", " + pageQty + " pages, " + isRead;
};

function addBookToLibrary(book,library){
    return [...library] + [book]
}

let library = [
    new Book("Turtles All The Way Down", "John Green", 298),
    new Book("The Fault in Our Stars", "John Green", 300)
];
console.log(library);
const headers = ["Title", "Author", "# of Pages", "is Read?"];
const mainSection = document.querySelector('#main');
const table = document.createElement('table');
table.classList.toggle('table');
table.classList.toggle('table-dark');
table.createTHead();
table.tHead.insertRow();
const tHeadRow = table.tHead.rows.item(0);

headers.forEach((elem)=>{
    const th = document.createElement('th');
    th.setAttribute('scope','col');
    th.textContent = elem;
    tHeadRow.appendChild(th);
});
const tbody = document.createElement('tbody');
table.appendChild(tbody);

library.forEach((elem)=>{
    row = tbody.insertRow();
    let cell = row.insertCell();
    cell.textContent = elem.title;
    cell = row.insertCell();
    cell.textContent = elem.author;
    cell = row.insertCell();
    cell.textContent = elem.pageQty;
});


mainSection.appendChild(table);