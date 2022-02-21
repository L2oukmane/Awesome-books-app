function intitializeDocument(bookList, booksArray) {
  bookList.innerHTML = '';
  for (let i = (booksArray.length - 1); i > -1; i -= 1) {
    let bgConst = '';
    if (i % 2 === 0) {
      bgConst = 'bg-color';
    }
    bookList.innerHTML = `${bookList.innerHTML}<div class="books-list ${bgConst}">
      <p>${booksArray[i].title} by ${booksArray[i].author}</p>
      <button class="rem_button remove_button_${i}">remove</button>
      </div>`;
  }
}

export default intitializeDocument;
