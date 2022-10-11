const React = require('react');

const Layout = require('./Layout');

module.exports = function Profile({ user, userInfo }) {
  return (
    <Layout user={user}>
      <div aria-live="polite" className="container mx-auto mt-10">
        <form method="POST" action="/profile" className="form-widget">
          <div className="container mx-auto w-72 py-2">
            <div className="relative">
              <input type="text" name="userName" value={userInfo.nickname} id="userName" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Your name" />
              <label htmlFor="userName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Your name</label>
            </div>
          </div>
          <div className="container mx-auto w-72 py-2">
            <div className="relative">
              <input
                type="email"
                name="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="email"
                id="email"
                value={userInfo.email}
              />
              <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Your email</label>
            </div>
          </div>
          <div className="text-center py-4">
            <button type="submit" className="w-44 h-11 rounded-full text-gray-50 bg-indigo-600 hover:bg-indigo-700">
              Update Profile
            </button>
          </div>
          <div className="text-center">
            <a
              href="/logout"
              className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2"
            >
              Logout
            </a>
          </div>
        </form>

      </div>
    </Layout>
  );
};
