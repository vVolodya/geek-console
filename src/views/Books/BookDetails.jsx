const React = require('react');
const Layout = require('../Layout');

module.exports = function BookDetails({ user, book }) {
  return (
    <Layout user={user}>
      <article className="p-4 mx-auto max-w-xl bg-white rounded-lg shadow-md border border-gray-200 dark:border-gray-800 dark:bg-gray-800">
        <img className="mb-5 rounded-lg" src={book.photo ? book.photo : '../images/noCover.gif'} alt={book.title} />
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
          {book.title}
        </h2>
        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">{book.desc ? book.desc : 'No description'}</p>
        <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline">
          Edit
          {' '}
          <svg className="mt-px ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </a>
      </article>
    </Layout>
  );
};
