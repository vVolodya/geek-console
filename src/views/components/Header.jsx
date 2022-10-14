const React = require('react');

module.exports = function Header({ user }) {
  return (
    <header className="bg-zinc-900">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-center lg:justify-between border-b border-white py-6 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <img className="h-12 w-auto" src="/images/geekConsole3.png" alt="Header logo" />
            </a>
          </div>
          <div className="ml-10 space-x-4 hidden lg:block">
            { user ? (
              <>
                <a
                  href="/books/new-form"
                  className="text-white bg-[#e11d48] hover:bg-[#e11d48]/90 focus:ring-2 focus:outline-none focus:ring-[#e11d48]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                >
                  Add new book
                </a>
                <a
                  href="/profile/books"
                  className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
                >
                  Collection
                </a>
                <a
                  href="/profile"
                  className="font-bold text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                >
                  Profile
                </a>
                <a
                  href="/logout"
                  className="font-bold border focus:ring-2 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center border-yellow-300 text-yellow-300 hover:bg-yellow-300/20 focus:ring-yellow-900"
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
                >
                  Sign in
                </a>
                <a
                  href="/signup"
                  className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                >
                  Sign up
                </a>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          { user ? (
            <>
              <a
                href="/books/new-form"
                className="text-white bg-[#e11d48] hover:bg-[#e11d48]/90 focus:ring-2 focus:outline-none focus:ring-[#e11d48]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Add new book
              </a>
              <a
                href="/profile/books"
                className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
              >
                Collection
              </a>
              <a
                href="/profile"
                className="font-bold text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Profile
              </a>
              <a
                href="/logout"
                className="font-bold border focus:ring-2 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center border-yellow-300 text-yellow-300 hover:bg-yellow-300/20 focus:ring-yellow-900"
              >
                Logout
              </a>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
              >
                Sign in
              </a>
              <a
                href="/signup"
                className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Sign up
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
