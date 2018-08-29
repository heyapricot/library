const book = require("../book");
const Book = book.Book;

describe.only("Book", ()=>{
   let book = new Book();
   it("has a title", ()=>{expect(book).toHaveProperty('title');});
   it("has an author", ()=>{expect(book).toHaveProperty('author');});
   it("has the number of pages", ()=>{expect(book).toHaveProperty('pageQty');});
   it("has a read? property", ()=>{expect(book).toHaveProperty('isRead');});
   describe("info", ()=>{
       it("returns a string with all the books properties", ()=>{
           book.title = title = "Turtles All The Way Down";
           book.author = author = "John Green";
           book. pageQty = pageQty = 298;
           expect(book.info()).toBe(title + " by " + author + ", " + pageQty + " pages, " + "not read yet" )
       })
   })
});

describe("addBookToLibrary", ()=>{
   it("adds a Book object to the end of a library array", () =>{
       let library = [];
       let book;
       expect(addBookToLibrary(book,library)).toContain(book)
   });
});