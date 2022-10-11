const URL = 'http://localhost:7777';

const $searchBtn = document.querySelector('#search-btn');
const $spinnerContainer = document.querySelector('#spinner-container');
const $emptyInputError = document.querySelector('#empty-input-error');
const BOOKS_API = 'AIzaSyDDHnVxUHa0UhTkZ9RiZ11maiNkpXMAvvc';

const showSpinner = () => $spinnerContainer.classList.remove('invisible');
const showError = () => $emptyInputError.classList.remove('invisible');

const getBooks = async (e) => {
  e.preventDefault();

  const searchValue = document.querySelector('#default-search').value;

  if (!searchValue) {
    return showError();
  }

  if (!$emptyInputError.classList.contains('invisible')) {
    $emptyInputError.remove();
  }

  showSpinner();

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${BOOKS_API}&maxResults=5`;

  const response = await fetch(url);
  const data = await response.json();

  const body = JSON.stringify(data);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };

  const res = await fetch(`${URL}/books`, options);

  if (res.ok) {
    window.location.replace(`${URL}/books`);
  }
};

$searchBtn.addEventListener('click', getBooks);
