const URL2 = 'http://localhost:7777';
const $booksContainer2 = document.querySelector('#books-container');

const searchBooks = async (e) => {
  e.preventDefault();

  const searchQuery = e.target.searchQuery.value;

  const response = await fetch(`${URL2}/profile/books/search/?searchQuery=${searchQuery}`);
  const books = await response.json();

  if (!books.length) {
    $booksContainer2.innerHTML = '<h2>No books found</h2>';
  }
};

document.searchForm.addEventListener('submit', searchBooks);
