const React = require('react');

const navigation = [
  { name: 'Features', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Support', href: '#' },
  { name: 'About', href: '#' },
];

module.exports = function Header({ user }) {
  return (
    <header className="bg-zinc-900">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src="https://i.ibb.co/3pXQzjv/1665489877-trans-Png17.png" alt="" />
            </a>
            {/* <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div> */}
          </div>
          <div className="ml-10 space-x-4">

            { user ? (
              <>
                <a
                  href="/profile"
                  className="font-bold text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50"
                >
                  Profile
                </a>
                <a
                  href="/profile/books"
                  className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2"
                >
                  Books
                </a>
                <a
                  href="/"
                  className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2"
                >
                  Add Book
                </a>
                <a
                  href="/logout"
                  className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2"
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2"
                >
                  Sign in
                </a>
                <a
                  href="/signup"
                  className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2"
                >
                  Sign up
                </a>
              </>
            )}

          </div>
        </div>
        {/* <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div> */}
      </nav>
    </header>
  );
};
