const $searchBtn = document.querySelector('#search-btn');
const $spinnerContainer = document.querySelector('#spinner-container');
const $booksContainer = document.querySelector('#books-container');
const BOOKS_API = 'AIzaSyDDHnVxUHa0UhTkZ9RiZ11maiNkpXMAvvc';

const showSpinner = () => $spinnerContainer.classList.remove('invisible');
const hideSpinner = () => $spinnerContainer.classList.add('invisible');

const showContainer = () => $booksContainer.classList.remove('invisible');
const hideContainer = () => $booksContainer.classList.add('invisible');

const getBooks = async (e) => {
  e.preventDefault();

  $booksContainer.innerHTML = '';

  if (!$booksContainer.classList.contains('invisible')) hideContainer();

  showSpinner();

  const searchValue = document.querySelector('#default-search').value;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${BOOKS_API}&maxResults=5`;

  const response = await fetch(url);
  const data = await response.json();

  // ${book.volumeInfo.imageLinks.thumbnail}

  console.log(data);

  data.items.forEach((book) => {
    const $bookCard = document.createElement('div');
    $bookCard.classList.add('book-card');

    $bookCard.innerHTML = `
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href= "${book.volumeInfo.infoLink}">
            <img class="rounded-t-lg" src=${book.volumeInfo.imageLinks === undefined ? '../images/noCover.gif' : `${book.volumeInfo.imageLinks.thumbnail}`} alt="${book.volumeInfo.title}" />
        </a>
        <div class="p-5">
            <a href="${book.volumeInfo.infoLink}">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${book.volumeInfo.title}</h5>
            </a>
            <p class="desc-para mb-3 font-normal text-gray-700 dark:text-gray-400">${book.volumeInfo.description === undefined ? 'No description available' : `${book.volumeInfo.description}`}</p>
            <a href="${book.volumeInfo.infoLink}" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    `;

    $booksContainer.insertAdjacentElement('afterbegin', $bookCard);
  });

  hideSpinner();
  showContainer();

  console.log(data);
};

$searchBtn.addEventListener('click', getBooks);
