const React = require('react');

const Layout = require('../Layout');

module.exports = function NotFound({ user }) {
  return (
    <Layout user={user}>
      <div className="min-h-full bg-cover bg-top sm:bg-top">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-3xl font-bold text-white text-opacity-50">404</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Uh oh! I think you’re lost.</h1>
          <p className="mt-2 text-lg font-medium text-gray-400">
            It looks like the page you’re looking for doesn't
            exist.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
            >
              Go
              back home
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
