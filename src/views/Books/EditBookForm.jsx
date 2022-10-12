const React = require('react');

const Layout = require('../Layout');

module.exports = function NewBookForm({ user, book }) {
  return (
    <Layout user={user}>
      <section className="bg-[#1c1c1c]">
        <div className="px-4 mx-auto max-w-screen-md">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white md:text-5xl lg:text-6xl">Edit Your Book</h1>
          <p className="mb-4 lg:mb-12 font-light text-center text-yellow-400 sm:text-xl">Want to change a few things up? Alright, go ahead.</p>
          <form action={`/books/book-form/${book.id}`} method="POST" className="space-y-8 flex flex-col justify-center">
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-yellow-400">Title</label>
              <input name="title" type="text" value={book.title} id="title" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="Romeo & Juliet" required />
            </div>
            <div>
              <label htmlFor="author" className="block mb-2 text-sm font-medium text-yellow-400">Author</label>
              <input name="author" type="text" value={book.author} id="author" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="William Shakespear" required />
            </div>
            <div>
              <label htmlFor="year" className="block mb-2 text-sm font-medium text-yellow-400">Publish date</label>
              <input name="year" type="number" value={book.year} id="year" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="1597" />
            </div>
            <div>
              <label htmlFor="photo" className="block mb-2 text-sm font-medium text-yellow-400">Cover link</label>
              <input name="photo" type="url" id="photo" value={book.photo} pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="Book cover http or https link" />
            </div>
            <div>
              <label htmlFor="url" className="block mb-2 text-sm font-medium text-yellow-400">External link</label>
              <input name="url" type="url" id="url" value={book.url} pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90 shadow-sm-light" placeholder="External link for your book (marketplace, library, etc.)" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="desc" className="block mb-2 text-sm font-medium text-yellow-400">Description</label>
              <textarea name="desc" value={book.desc} id="desc" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90" placeholder="Book description" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="comments" className="block mb-2 text-sm font-medium text-yellow-400">Your comments</label>
              <textarea name="comment" value={book.comment} id="comments" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90" placeholder="Share your thoughts about this book or leave some comments for your future reference" />
            </div>
            <button type="submit" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none font-bold rounded-lg text-lg px-5 py-3.5 text-center focus:ring-[#F7BE38]/50">Edit your book &#x270E;</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};
