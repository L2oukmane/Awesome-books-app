import removeBook from './removeBook.js';

function intitializeRemoveButtonEvents(application) {
  for (let i = (application.booksArray.length - 1); i > -1; i -= 1) {
    removeBook(i, application);
  }
}
export default intitializeRemoveButtonEvents;