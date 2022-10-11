const React = require('react');

const Layout = require('./Layout');

module.exports = function Books({ user, books }) {
  return (
    <Layout user={user}>
      <script defer src="/script/addToFavs.js" />

      <div id="books-container" className="container flex md:flex-col justify-center items-start pl-40 mt-6 mb-6">
        { books.length
          ? books.map((book) => (
            <aside className="py-4 lg:py-8 bg-white dark:bg-gray-900">
              <div className="px-4 mx-auto max-w-screen-xl">
                <article className="flex mb-8">
                  <a href={book.volumeInfo.infoLink} className="shrink-0" target="_blank" rel="noopener noreferrer">
                    <img src={book.volumeInfo.imageLinks === undefined ? '../images/noCover.gif' : book.volumeInfo.imageLinks.thumbnail} className="mr-5 w-32 h-32 max-w-full align-middle rounded-full" alt={book.volumeInfo.title} />
                  </a>
                  <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                        {book.volumeInfo.title}
                      </a>
                    </h2>
                    <p className="short mb-2 font-light text-gray-500 dark:text-gray-400">
                      {book.volumeInfo.description === undefined ? 'No description available' : book.volumeInfo.description}
                    </p>
                    <a href={book.volumeInfo.infoLink} className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                    { user ? (
                      <div className="mt-2">
                        <button data-gid={book.id} type="submit" className="add-to-favs-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to Favorites</button>
                      </div>
                    ) : null }
                  </div>
                </article>
              </div>
            </aside>
          )) : null}
      </div>
    </Layout>
  );
};
