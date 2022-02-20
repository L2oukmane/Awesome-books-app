import intitializeDocument from './intitializeDocument.js';
import intitializeRemoveButtonEvents from './intitializeRemoveButtonEvents.js';

function removeBook(index, application) {
  document.querySelector(`.remove_button_${index}`).addEventListener('click', () => {
    const tempbooksArray = [];
    for (let j = 0; j < application.booksArray.length; j += 1) {
      if (j !== index) {
        tempbooksArray.push({
          title: application.booksArray[j].title,
          author: application.booksArray[j].author,
        });
      }
    }
    application.booksArray = tempbooksArray;
    localStorage.setItem('books', JSON.stringify(application.booksArray));
    intitializeDocument(application.bookList, application.booksArray);
    intitializeRemoveButtonEvents(application);
  });
}

export default removeBook;