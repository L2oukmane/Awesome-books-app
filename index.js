import intitializeDocument from './modules/intitializeDocument.js';
import displayBookListSection from './modules/displayBookListSection.js';
import displayAddBookSection from './modules/displayAddBookSection.js';
import displayContactSection from './modules/displayContactSection.js';

class Application {
  constructor() {
    this.contactForm = document.querySelector('.book_form');
    this.title = document.querySelector('.book_title');
    this.author = document.querySelector('.book_author');
    this.bookList = document.querySelector('.parent_book_container');
    this.dateTime = document.querySelector('.date_time');
    this.bookListSection = document.querySelector('.book_list_section');
    this.addBookSection = document.querySelector('.add_book_section');
    this.contactSection = document.querySelector('.contact_section');

    this.booksArray = [];
    this.monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  addBook() {
    displayBookListSection(this.bookListSection, this.addBookSection, this.contactSection);
    this.booksArray.push({ title: this.title.value, author: this.author.value });
    localStorage.setItem('books', JSON.stringify(this.booksArray));
    this.title.value = '';
    this.author.value = '';
    intitializeDocument(this.bookList, this.booksArray);
/* eslint-disable */
    intitializeRemoveButtonEvents(this);
  }
  // intitializeDocument()

  // removeBook(index)

  // intitializeRemoveButtonEvents()

  // addBook()

  // displayBookListSection()

  // displayAddBookSection()

  // displayContactSection()
}
const application = new Application();

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
		/* eslint-disable */
    intitializeDocument(application.bookList, application.booksArray);
    intitializeRemoveButtonEvents(application);
  });
}

function intitializeRemoveButtonEvents(application) {
  for (let i = (application.booksArray.length - 1); i > -1; i -= 1) {
    removeBook(i, application);
  }
}

application.contactForm.addEventListener('submit', (event) => {
  application.addBook();
  event.preventDefault();
});

document.querySelector('.nav1').addEventListener('click', () => {
  displayBookListSection(application.bookListSection, application.addBookSection,
    application.contactSection);
});

document.querySelector('.nav2').addEventListener('click', () => {
  displayAddBookSection(application.bookListSection, application.addBookSection,
    application.contactSection);
});

document.querySelector('.nav3').addEventListener('click', () => {
  displayContactSection(application.bookListSection, application.addBookSection,
    application.contactSection);
});

if (localStorage.getItem('books') != null) {
  displayBookListSection(application.bookListSection,
    application.addBookSection, application.contactSection);
  application.booksArray = JSON.parse(localStorage.getItem('books'));
  intitializeDocument(application.bookList, application.booksArray);
  intitializeRemoveButtonEvents(application);
}

window.setInterval(() => {
// eslint-disable-next-line no-undef
  application.dateTime.innerHTML = `<p>${luxon.DateTime.local().toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS)
  }</p>`;
}, 1000, this);
