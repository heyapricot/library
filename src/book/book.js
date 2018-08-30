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
module.exports = {
    Book: Book,
    addBookToLibrary: addBookToLibrary
};