function Book(title, author, pages, read, id){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read 
  this.id = id
  this.info = () => {
    return `${this.title} by ${this.author}, ${pages} pages, ${read} yet.`
  }
}
const myLibrary = [];
function addBookToLibrary(title, author, pages, read) {
    new_id = crypto.randomUUID()
    myLibrary.push(new Book(title, author, pages, read, new_id))
}

addBookToLibrary("man", "goliath", 233, "not yet")
addBookToLibrary("pan", "goliath", 233, "not yet")
console.log(myLibrary);





