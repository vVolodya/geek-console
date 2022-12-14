const $searchBtn = document.querySelector('#search-btn');
const $spinnerContainer = document.querySelector('#spinner-container');
const $emptyInputError = document.querySelector('#empty-input-error');
const BOOKS_API = 'AIzaSyDDHnVxUHa0UhTkZ9RiZ11maiNkpXMAvvc';

const showSpinner = () => {
  $spinnerContainer.classList.remove('hidden');
  $spinnerContainer.classList.add('block');
};

const showError = () => {
  $emptyInputError.classList.remove('hidden');
  $emptyInputError.classList.add('block');
};

const hideError = () => {
  $emptyInputError.classList.remove('block');
  $emptyInputError.classList.add('hidden');
};

const getBooks = async (e) => {
  e.preventDefault();

  const searchValue = document.querySelector('#default-search').value;

  if (!searchValue) {
    return showError();
  }

  if ($emptyInputError.classList.contains('block')) {
    hideError();
  }

  showSpinner();

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${BOOKS_API}&maxResults=20`;

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

  const res = await fetch('/books', options);

  if (res.ok) {
    window.location.replace('/books');
  }
};

$searchBtn.addEventListener('click', getBooks);
