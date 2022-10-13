const React = require('react');

const Layout = require('../Layout');

module.exports = function Books({ user, books }) {
  return (
    <Layout user={user}>
      <script defer src="/script/profileScript.js" />

      <h1 className="text-center mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Your books</h1>

      <form name="searchForm" className="w-3/6">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-gray-300">Search</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input name="searchQuery" type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search in your collection by title" />
          <button type="submit" id="search-btn" className="text-gray-900 absolute right-2.5 bottom-2.5 bg-[#F7BE38]/90 hover:bg-[#F7BE38]/100 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-4 py-2">Search</button>
        </div>
        <div id="nothing-found-alert" className="p-4 my-4 text-sm rounded-lg bg-[#F7BE38] text-gray-900 text-center font-bold hidden" role="alert">
          Nothing found. Try changing your search parameters!
        </div>
        <div id="empty-input-error" className="p-4 my-4 text-sm rounded-lg bg-red-200 text-red-800 text-center font-bold hidden" role="alert">
          Input field cannot be empty! Please, try again.
        </div>
        <div id="spinner-container" role="status" className="text-center mt-16 hidden">
          <svg className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </form>
      <div id="books-container" className="container mx-auto grid grid-cols-1 justify-center items-center gap-5 lg:grid-cols-4 md:grid-cols-2 mt-10">
        { books.length ? (
          books.map((book) => (
            <div key={book.id} className="flex flex-col justify-center items-center w-full rounded-lg border shadow-md bg-[#232323] border-[#2e2e2e] p-4 transform transition duration-300 hover:scale-105 hover:shadow-md hover:shadow-yellow-400">
              <a href={`/books/${book.id}`} className="text-center">
                <img className="w-40 h-56 max-w-full align-middle rounded-xl" src={book.photo ? book.photo : '../images/noCover.gif'} alt={book.title} />
              </a>
              { book.status === 'reading' ? (
                <div className="mx-auto w-max px-2 mt-4 text-sm font-bold rounded-lg bg-[#F7BE38] text-grey-900 text-center" role="alert">
                  {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                </div>
              ) : null }
              { book.status === 'want to read' ? (
                <div className="mx-auto w-max px-2 mt-4 text-sm font-bold rounded-lg bg-[#e11d48] text-white text-center" role="alert">
                  {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                </div>
              ) : null }
              { book.status === 'have read' ? (
                <div className="mx-auto w-max px-2 mt-4 text-sm font-bold rounded-lg border bg-black border-yellow-300 text-yellow-300 text-center" role="alert">
                  {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                </div>
              ) : null }
              <div className="p-4 flex flex-col justify-center items-center">
                <p className="short-author text-sm mb-3 font-normal text-gray-400">{book.author ? book.author : 'Author unknown'}</p>
                <div className="h-12 mb-3">
                  <a href={`/books/${book.id}`}>
                    <h5 className="text-center short-title text-lg font-bold tracking-tight text-white">{book.title}</h5>
                  </a>
                </div>
                <div className="flex justify-between gap-4">
                  <a href={`/books/${book.id}`} className="py-2 px-3 text-sm font-bold text-center text-gray-900 rounded-lg focus:outline-none bg-[#F7BE38] hover:bg-[#F7BE38]/80 focus:ring-yellow-800">
                    More info
                  </a>
                  <button data-id={book.id} type="button" className="delete-btn font-bold border focus:ring-4 focus:outline-none rounded-lg text-sm px-3 py-2 text-center border-yellow-300 text-yellow-300 hover:bg-yellow-300/20 focus:ring-yellow-900">Remove</button>
                </div>
              </div>
            </div>
          ))
        )
          : (
            <div className="col-span-4 text-center">
              <p className="mx-auto mt-5 text-3xl text-gray-400">
                You do not have any books in your collection yet.
              </p>
              <p className="mx-auto mt-5 text-3xl text-gray-400">But you can add your own book by clicking the red button above or find one at the home page.</p>
              <a
                href="/"
                className="mt-6 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
              >
                Home page
              </a>
            </div>
          )}
      </div>
    </Layout>
  );
};
