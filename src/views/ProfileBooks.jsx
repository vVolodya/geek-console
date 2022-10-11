const React = require('react');

const Layout = require('./Layout');

module.exports = function Books({ user, books }) {
  return (
    <Layout user={user}>
      <script defer src="/script/removeBook.js" />

      <h1 className="text-center my-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your books</h1>

      <div id="books-container" className="container mx-auto grid grid-cols-1 justify-items-center align-center gap-5 py-10 lg:grid-cols-4 md:grid-cols-2">
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
