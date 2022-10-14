/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */

const $booksContainer = document.querySelector('#books-container');
const $spinnerContainer = document.querySelector('#spinner-container');
const $emptyInputError = document.querySelector('#empty-input-error');
const $nothingFoundAlert = document.querySelector('#nothing-found-alert');

const $spinnerButton = document.createElement('button');
$spinnerButton.classList.add('font-bold', 'border', 'focus:ring-4', 'focus:outline-none', 'rounded-lg', 'text-sm', 'px-3', 'py-2', 'text-center', 'border-yellow-300', 'text-yellow-300', 'hover:bg-yellow-300/20', 'focus:ring-yellow-900');
$spinnerButton.style.width = '150px';
$spinnerButton.disabled = true;
$spinnerButton.innerHTML = `
  <svg aria-hidden="true" role="status" class="inline mr-2 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
  </svg>
  <span>Removing...</span>
`;

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

const showButtonEl = (el) => {
  el.classList.remove('hidden');
};

const hideButtonEl = (el) => {
  el.classList.add('hidden');
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

  const response = await fetch(`/profile/books/search/?searchQuery=${searchQuery}`);
  const books = await response.json();

  let booksHtml = '';

  if (!books.length) {
    hideSpinner();
    showAlert();
  } else {
    books.forEach((book) => {
      booksHtml += `
      <div key={book.id} class="flex flex-col justify-center items-center w-full rounded-lg border shadow-md bg-[#232323] border-[#2e2e2e] p-4 transform transition duration-300 hover:scale-105 hover:shadow-md hover:shadow-yellow-400">
        <a href=${`/books/${book.id}`} class="text-center">
          <img class="w-40 h-56 max-w-full align-middle rounded-xl" src=${book.photo ? book.photo : '../images/noCover.gif'} alt=${book.title} />
        </a>
        
        ${book.status === 'reading' ? (
    `
          <div class="mx-auto w-max px-2 mt-4 text-sm font-bold rounded-lg bg-[#F7BE38] text-grey-900 text-center">
            ${book.status.charAt(0).toUpperCase() + book.status.slice(1)}
          </div>
          `
  ) : ''}
        ${book.status === 'want to read' ? (
    `
          <div class="mx-auto w-max px-2 mt-4 text-sm font-bold rounded-lg bg-[#e11d48] text-white text-center">
            ${book.status.charAt(0).toUpperCase() + book.status.slice(1)}
          </div>
          `
  ) : ''}
        ${book.status === 'have read' ? (
    `
          <div class="mx-auto w-max px-2 mt-4 text-sm font-bold rounded-lg border bg-black border-yellow-300 text-yellow-300 text-center">
            ${book.status.charAt(0).toUpperCase() + book.status.slice(1)}
          </div>
          `
  ) : ''}
        <div class="p-4 flex flex-col justify-center items-center">
          <p class="short-author text-sm mb-3 font-normal text-gray-400">${book.author ? book.author : 'Author unknown'}</p>
          <div class="h-12 mb-3">
            <a href=${`/books/${book.id}`}>
              <h5 class="text-center short-title text-lg font-bold tracking-tight text-white">${book.title}</h5>
            </a>
          </div>
          <div class="flex justify-between gap-4">
            <a href=${`/books/${book.id}`} class="py-2 px-3 text-sm font-bold text-center text-gray-900 rounded-lg focus:outline-none bg-[#F7BE38] hover:bg-[#F7BE38]/80 focus:ring-yellow-800">
              More info
            </a>
            <button data-id=${book.id} type="button" class="delete-btn font-bold border focus:ring-4 focus:outline-none rounded-lg text-sm px-3 py-2 text-center border-yellow-300 text-yellow-300 hover:bg-yellow-300/20 focus:ring-yellow-900">Remove</button>
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
    const buttonDiv = e.target.parentElement;
    const bookID = e.target.dataset.id;

    hideButtonEl(e.target);
    buttonDiv.insertAdjacentElement('beforeend', $spinnerButton);

    const options = {
      method: 'DELETE',
    };

    const response = await fetch(`/books/${bookID}`, options);

    const bookCard = e.target.parentElement.parentElement.parentElement;

    if (response.ok) {
      bookCard.remove();
    }
  }
};

$booksContainer.addEventListener('click', deleteBook);
document.searchForm.addEventListener('submit', searchBooks);
