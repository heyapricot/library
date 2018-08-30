const {Book, addBookToLibrary} = require("../book");

let testBook = new Book();
title = "Turtles All The Way Down";
author = "John Green";
pageQty = 298;

describe("Book", ()=>{
   it("has a title", ()=>{expect(testBook).toHaveProperty('title');});
   it("has an author", ()=>{expect(testBook).toHaveProperty('author');});
   it("has the number of pages", ()=>{expect(testBook).toHaveProperty('pageQty');});
   it("has a read? property", ()=>{expect(testBook).toHaveProperty('isRead');});
   describe("info", ()=>{
       it("returns a string with all the books properties", ()=>{
           testBook.title = title;
           testBook.author = author;
           testBook. pageQty = pageQty;
           expect(testBook.info()).toBe(title + " by " + author + ", " + pageQty + " pages, " + "not read yet" )
       })
   })
});

describe("newBookfromInput", ()=>{
    let test = Book.fromInput(title, author, pageQty);
    describe("returns a Book object", ()=> {
        it("has the first input as title", () => { expect(test.title).toBe(title);});
        it("has the second input as author", () => { expect(test.author).toBe(author);});
        it("has the third input as page quantity", () => { expect(test.pageQty).toBe(pageQty);});
    });
});

describe("addBookToLibrary", ()=>{
   it("adds a Book object to the end of a library array", () =>{
       let library = [];
       library.push(new Book("Title", "Author", 999));
       expect(addBookToLibrary(testBook,library)).toContain(testBook)
   });
});