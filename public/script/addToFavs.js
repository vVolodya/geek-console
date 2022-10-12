const URL = 'http://localhost:7777';
const $booksContainer = document.querySelector('#books-container');

const addToFavs = async (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.classList.contains('add-to-favs-btn')) {
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
      e.target.textContent = 'Added to favorites';
    } else {
      // TODO ERROR HANDLING
    }
  }
};

$booksContainer.addEventListener('click', addToFavs);
