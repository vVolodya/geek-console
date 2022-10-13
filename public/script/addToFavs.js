const URL = 'http://localhost:7777';
const $booksContainer = document.querySelector('#books-container');
const $duplicateBookError = document.querySelector('#duplicate-book-error');

const showError = () => {
  $duplicateBookError.classList.remove('hidden');
  $duplicateBookError.classList.add('block');
};

const hideError = () => {
  $duplicateBookError.classList.remove('block');
  $duplicateBookError.classList.add('hidden');
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const addToFavs = async (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.classList.contains('add-to-favs-btn')) {
    if ($duplicateBookError.classList.contains('block')) {
      hideError();
    }

    const bookID = e.target.dataset.gid;

    const url = `https://www.googleapis.com/books/v1/volumes/${bookID}`;

    const response = await fetch(url);
    const book = await response.json();

    const bookObj = JSON.stringify(book);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bookObj,
    };

    const res = await fetch(`${URL}/books/new`, options);

    if (res.ok) {
      e.target.classList.add('cursor-not-allowed');
      e.target.setAttribute('disabled', 'disabled');
      e.target.textContent = 'Added to collection';
    } else {
      e.target.classList.add('cursor-not-allowed');
      e.target.setAttribute('disabled', 'disabled');
      e.target.textContent = 'Already in collection';
      showError();
      scrollTop();
      setTimeout(hideError, 3000);
    }
  }
};

$booksContainer.addEventListener('click', addToFavs);
