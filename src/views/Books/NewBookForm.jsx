const React = require('react');

const Layout = require('../Layout');

module.exports = function NewBookForm({ user }) {
  return (
    <Layout user={user}>
      <section className="bg-[#1c1c1c]">
        <div className="px-4 mx-auto max-w-screen-md">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white md:text-5xl lg:text-6xl">Remember a Book</h1>
          <p className="mb-4 lg:mb-12 font-light text-center text-yellow-400 sm:text-xl">Want to track a book you have read or reading now? Just add it here.</p>
          <form action="/books/new-form" method="POST" className="space-y-8 flex flex-col justify-center">
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-yellow-400">Book title</label>
              <input name="title" type="text" id="title" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="Romeo & Juliet" required />
            </div>
            <div>
              <label htmlFor="author" className="block mb-2 text-sm font-medium text-yellow-400">Book author</label>
              <input name="author" type="text" id="author" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="William Shakespear" required />
            </div>
            <div>
              <label htmlFor="year" className="block mb-2 text-sm font-medium text-yellow-400">Book year</label>
              <input name="year" type="number" id="author" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="1597" />
            </div>
            <div>
              <label htmlFor="url" className="block mb-2 text-sm font-medium text-yellow-400">Book cover</label>
              <input name="url" type="url" id="url" pattern="https://.*" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="Book cover http link" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="comments" className="block mb-2 text-sm font-medium text-yellow-400">Your comments</label>
              <textarea name="comment" id="comments" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90" placeholder="Share your thoughts about this book or leave some comments for your future reference" />
            </div>
            <button type="submit" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none font-bold rounded-lg text-lg px-5 py-3.5 text-center focus:ring-[#F7BE38]/50">Add this book to collection &#128230;</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};
