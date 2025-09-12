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

function clearBookContainer(){
  document.querySelectorAll(".book-container div").forEach(element => {
    element.remove()
  })
}
function refreshLibrary(){
  myLibrary.forEach(element => {
    var book_contents = `
    Title: ${element.title} \n
    Author: ${element.author} \n
    No of Pages: ${element.pages}\n
    Reading Status: ${element.read}
    `
    var div = document.createElement('div')
    div.innerText = book_contents
    bookContainer.appendChild(div)
});
}

const myLibrary = [];
const bookContainer = document.querySelector(".book-container")

function addBookToLibrary(title, author, pages, read) {
    new_id = crypto.randomUUID()
    myLibrary.push(new Book(title, author, pages, read, new_id))
}

addBookToLibrary("man", "goliath", 233, "not yet")
addBookToLibrary("pan", "goliath", 233, "not yet")
console.log(myLibrary);
refreshLibrary()




const dialogue = document.getElementById('modal')
document.querySelector('#addBook').addEventListener("click", (event) => {
  dialogue.showModal()
})

document.getElementById('bookForm').addEventListener('submit', (event) => {
  event.preventDefault()
  bookTitle = document.getElementById('bookTitle').value
  bookAuthor = document.getElementById('bookAuthor').value
  bookPages = document.getElementById('bookPages').value
  bookReadStatus = document.getElementById('bookReadStatus').value

  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookReadStatus)
  dialogue.close()

  clearBookContainer()
  refreshLibrary()
  console.log(myLibrary);
  event.target.reset()
})



