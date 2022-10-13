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
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-yellow-400">Title</label>
              <input name="title" type="text" id="title" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="Romeo & Juliet" required />
            </div>
            <div>
              <label htmlFor="author" className="block mb-2 text-sm font-medium text-yellow-400">Author</label>
              <input name="author" type="text" id="author" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="William Shakespear" required />
            </div>
            <div>
              <label htmlFor="year" className="block mb-2 text-sm font-medium text-yellow-400">Publish date</label>
              <input name="year" type="number" id="publish-date" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="1597" />
            </div>
            <div>
              <label htmlFor="photo" className="block mb-2 text-sm font-medium text-yellow-400">Cover link</label>
              <input name="photo" type="url" id="photo" pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="Book cover http or https link" />
            </div>
            <div>
              <label htmlFor="url" className="block mb-2 text-sm font-medium text-yellow-400">External link</label>
              <input name="url" type="url" id="url" pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="External link for your book (marketplace, library, etc.)" />
            </div>
            <div>
              <label htmlFor="status" className="block mb-2 text-sm font-medium text-yellow-400">Reading status</label>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 flex justify-center">
                <li className="ml-6 w-full border-gray-200 border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input id="horizontal-list-radio-want-to-read" value="want to read" type="radio" name="status" className="w-4 h-4 text-[#F7BE38] bg-gray-100 border-gray-300 focus:ring-[#F7BE38]" />
                    <label htmlFor="horizontal-list-radio-want-to-read" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Want to read</label>
                  </div>
                </li>
                <li className="w-full border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input id="horizontal-list-radio-reading" value="reading" type="radio" name="status" className="w-4 h-4 text-[#F7BE38] bg-gray-100 border-gray-300 focus:ring-[#F7BE38]" />
                    <label htmlFor="horizontal-list-radio-reading" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Reading</label>
                  </div>
                </li>
                <li className="w-full border-gray-200 dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input id="horizontal-list-radio-have-read" value="have read" type="radio" name="status" className="w-4 h-4 text-[#F7BE38] bg-gray-100 border-gray-300 focus:ring-[#F7BE38] focus:ring-2" />
                    <label htmlFor="horizontal-list-radio-have-read" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Have read</label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="desc" className="block mb-2 text-sm font-medium text-yellow-400">Book description</label>
              <textarea name="desc" id="desc" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90" placeholder="Book description" />
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
