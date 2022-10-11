const URL = 'http://localhost:7777';
const $booksContainer = document.querySelector('#books-container');

const deleteBook = async (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.classList.contains('delete-btn')) {
    const bookID = e.target.dataset.id;

    const options = {
      method: 'DELETE',
    };

    const response = await fetch(`${URL}/books/${bookID}`, options);

    const bookCard = e.target.parentElement.parentElement.parentElement;

    if (response.ok) {
      bookCard.remove();
    }
  }
};

$booksContainer.addEventListener('click', deleteBook);
