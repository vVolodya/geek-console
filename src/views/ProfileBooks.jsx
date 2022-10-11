const React = require('react');

const Layout = require('./Layout');

module.exports = function Books({ user, books }) {
  return (
    <Layout user={user}>
      <script defer src="/script/removeBook.js" />
      <script defer src="/script/searchYourBooks.js" />

      <h1 className="text-center my-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your books</h1>

      <form name="searchForm" className="w-3/6">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input name="searchQuery" type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#F7BE38]/50 focus:border-[#F7BE38]/50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search books" required />
          <button type="submit" id="search-btn" className="text-gray-900 absolute right-2.5 bottom-2.5 bg-[#F7BE38]/90 hover:bg-[#F7BE38]/100 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
        {/* <div id="empty-input-error" className="p-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center font-bold invisible" role="alert">
          Input field cannot be empty! Please, try again.
        </div> */}
        <div id="spinner-container" role="status" className="text-center mt-8 invisible">
          <svg className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </form>

      <div id="books-container" className="container mx-auto grid grid-cols-1 justify-items-center align-center gap-5 lg:grid-cols-4 md:grid-cols-2">
        { books.length ? (
          books.map((book) => (
            <div key={book.id} className="flex flex-col justify-center items-center w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-4">
              <a href={book.url} className="text-center" target="_blank" rel="noopener noreferrer">
                <img className="w-40 h-40 max-w-full align-middle rounded-full" src={book.photo ? book.photo : '../images/noCover.gif'} alt={book.title} />
              </a>
              <div className="p-5 flex flex-col justify-center items-center">
                <p className="short-author text-sm mb-3 font-normal text-gray-400 dark:text-gray-400">{book.author ? book.author : 'Unknown'}</p>
                <div className="h-12 mb-3">
                  <a href={book.url} target="_blank" rel="noopener noreferrer">
                    <h5 className="text-center short-title text-lg font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
                  </a>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.year}</p>
                <div className="flex justify-between gap-4">
                  <a href={book.url} className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                  <button data-id={book.id} type="button" className="delete-btn focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
                </div>
              </div>
            </div>
          ))
        ) : null}

      </div>

    </Layout>
  );
};
