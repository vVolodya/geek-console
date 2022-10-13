const React = require('react');
const Layout = require('../Layout');

module.exports = function BookDetails({ user, book }) {
  return (
    <Layout user={user}>
      <h1 className="text-center mb-16 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Book Details</h1>
      <article className="flex justify-start items-center space-x-10 p-8 mx-auto bg-[#232323] border-[#2e2e2e] rounded-lg shadow-md border dark:border-gray-800 dark:bg-gray-800">
        <div className="w-1/4">
          <img className="h-full w-full rounded-lg" src={book.photo ? book.photo : '../images/noCover.gif'} alt={book.title} />
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
        </div>
        <div className="w-3/4">
          <h2 className="mb-2 text-left text-xl font-bold tracking-tight lg:text-2xl text-white">
            {book.title}
          </h2>
          <div>
            <h4 className="text-yellow-400 font-bold">Author</h4>
            <p className="mb-3 font-light text-gray-500 dark:text-gray-400">{book.author ? book.author : 'Author unknown'}</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold">Year</h4>
            <p className="mb-3 font-light text-gray-500 dark:text-gray-400">{book.year ? book.year : 'Year unknown'}</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold">Description</h4>
            <p className="short-desc mb-3 font-light text-gray-500 dark:text-gray-400">{book.desc ? book.desc : 'No description'}</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold">Your comments</h4>
            <p className="mb-3 font-light text-gray-500 dark:text-gray-400">{book.comment ? book.comment : 'No comments yet. Add one!'}</p>
          </div>
          <div className="flex space-x-4">
            <a href={book.url} className="font-bold border focus:ring-2 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center border-yellow-300 text-yellow-300 hover:bg-yellow-300/20 focus:ring-yellow-900" target="_blank" rel="noopener noreferrer">External link</a>
            <a href={`/books/book-form/${book.id}`} className="font-bold text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              Edit
              {' '}
              <svg className="mt-px ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
};
