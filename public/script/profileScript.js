const URL = 'http://localhost:7777';

const $booksContainer = document.querySelector('#books-container');
const $spinnerContainer = document.querySelector('#spinner-container');
const $emptyInputError = document.querySelector('#empty-input-error');
const $nothingFoundAlert = document.querySelector('#nothing-found-alert');

const showSpinner = () => {
  $spinnerContainer.classList.remove('hidden');
  $spinnerContainer.classList.add('block');
};
const hideSpinner = () => {
  $spinnerContainer.classList.remove('block');
  $spinnerContainer.classList.add('hidden');
};

const showError = () => {
  $emptyInputError.classList.remove('hidden');
  $emptyInputError.classList.add('block');
};

const hideError = () => {
  $emptyInputError.classList.remove('block');
  $emptyInputError.classList.add('hidden');
};

const showAlert = () => {
  $nothingFoundAlert.classList.remove('hidden');
  $nothingFoundAlert.classList.add('block');
};

const hideAlert = () => {
  $nothingFoundAlert.classList.remove('block');
  $nothingFoundAlert.classList.add('hidden');
};

const searchBooks = async (e) => {
  e.preventDefault();

  const searchQuery = e.target.searchQuery.value;

  if (!searchQuery) {
    return showError();
  }

  if ($emptyInputError.classList.contains('block')) {
    hideError();
  }

  if ($nothingFoundAlert.classList.contains('block')) {
    hideAlert();
  }

  $booksContainer.innerHTML = '';

  showSpinner();

  const response = await fetch(`${URL}/profile/books/search/?searchQuery=${searchQuery}`);
  const books = await response.json();

  let booksHtml = '';

  if (!books.length) {
    hideSpinner();
    showAlert();
  } else {
    books.forEach((book) => {
      booksHtml += `
      <div class="flex flex-col justify-center items-center w-full rounded-lg border shadow-md bg-[#232323] border-[#2e2e2e] p-4 transform transition duration-300 hover:scale-105 hover:shadow-md hover:shadow-yellow-400">
        <a href="${book.url}" class="text-center" target="_blank" rel="noopener noreferrer">
          <img class="w-40 h-56 max-w-full align-middle rounded-xl" src=${book.photo ? book.photo : '../images/noCover.gif'} alt=${book.title} />
        </a>
        <div class="p-5 flex flex-col justify-center items-center">
          <p class="short-author text-sm mb-3 font-normal text-gray-400">${book.author ? book.author : 'Unknown'}</p>
          <div class="h-12 mb-3">
            <a href="${book.url}" target="_blank" rel="noopener noreferrer">
              <h5 class="text-center short-title text-lg font-bold tracking-tight text-white">${book.title}</h5>
            </a>
          </div>
          <p class="mb-3 font-normal text-gray-400">${book.year}</p>
          <div class="flex justify-between gap-4">
            <a href="/books/${book.id}" class="py-2 px-3 text-sm font-bold text-center text-gray-900 rounded-lg focus:outline-none bg-[#F7BE38] hover:bg-[#F7BE38]/80 focus:ring-yellow-800">
              More info
            </a>
            <button data-id="${book.id}" type="button" class="delete-btn font-bold border focus:ring-4 focus:outline-none rounded-lg text-sm px-3 py-2 text-center border-yellow-300 text-yellow-300 hover:bg-yellow-300/20 focus:ring-yellow-900">Remove</button>
          </div>
        </div>
      </div>
      `;
    });

    hideSpinner();

    e.target.searchQuery.value = '';
    $booksContainer.insertAdjacentHTML('afterbegin', booksHtml);
  }
};

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
document.searchForm.addEventListener('submit', searchBooks);
