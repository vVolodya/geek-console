const React = require('react');

const Layout = require('../Layout');

module.exports = function Books({ user, books }) {
  return (
    <Layout user={user}>
      <script defer src="/script/addToFavs.js" />

      <h1 className="text-center mb-16 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Search Results</h1>

      <div id="books-container" className="container flex gap-6 md:flex-col justify-center items-center mt-6 mb-6">
        { books
          ? books.map((book) => (
            <aside className="w-full py-4 lg:py-8 bg-[#232323] border border-[#2e2e2e] transform transition duration-300 hover:scale-105 hover:shadow-md hover:shadow-yellow-400">
              <div className="px-4 mx-auto max-w-screen-xl">
                <article className="flex mb-8">
                  <a href={book.volumeInfo.infoLink} className="shrink-0" target="_blank" rel="noopener noreferrer">
                    <img src={book.volumeInfo.imageLinks === undefined ? '../images/noCover.gif' : book.volumeInfo.imageLinks.thumbnail} className="mr-5 w-40 h-56 align-middle rounded-xl" alt={book.volumeInfo.title} />
                  </a>
                  <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-xl font-bold leading-tight text-yellow-400">
                      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                        {book.volumeInfo.title}
                      </a>
                    </h2>
                    <p className="short mb-2 font-light text-white">
                      {book.volumeInfo.description === undefined ? 'No description available' : book.volumeInfo.description}
                    </p>
                    <div className="mt-4 flex flex-col">
                      <div className="flex">
                        <a href={book.volumeInfo.infoLink} className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" target="_blank" rel="noopener noreferrer">
                          Read More
                        </a>
                        { user
                          ? <button data-gid={book.id} type="submit" className="add-to-favs-btn text-white bg-[#e11d48] hover:bg-[#e11d48]/90 focus:ring-2 focus:outline-none focus:ring-[#e11d48]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">Add to Collection</button>
                          : null }
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
          ))
          : (
            <p className="mx-auto mt-5 max-w-xl text-3xl text-gray-400">
              Nothing found...
            </p>
          )}
      </div>
    </Layout>
  );
};
