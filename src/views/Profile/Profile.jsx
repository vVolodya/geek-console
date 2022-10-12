const React = require('react');

const Layout = require('../Layout');

module.exports = function Profile({ user, userInfo }) {
  return (
    <Layout user={user}>
      <div aria-live="polite" className="container mx-auto mt-10">
        <form method="POST" action="/profile" className="form-widget">
          <div className="container mx-auto w-72 py-2">
            <div className="relative">
              <input type="text" name="userName" value={userInfo.nickname} id="userName" className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-[#F7BE38]/60 peer" placeholder="Your name" />
              <label htmlFor="userName" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#1c1c1c]/90 px-2 peer-focus:px-2 peer-focus:text-[#F7BE38]/90 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Your name</label>
            </div>
          </div>
          <div className="container mx-auto w-72 py-2">
            <div className="relative">
              <input
                type="email"
                name="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-[#F7BE38]/60 peer"
                placeholder="email"
                id="email"
                value={userInfo.email}
              />
              <label htmlFor="email" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#1c1c1c]/90 px-2 peer-focus:px-2 peer-focus:text-[#F7BE38]/90 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Your email</label>
            </div>
          </div>
          <div className="text-center py-4 space-x-8">
            <button type="submit" className="py-2 px-3 text-sm font-bold text-center text-gray-900 rounded-lg focus:outline-none bg-[#F7BE38] hover:bg-[#F7BE38]/80 focus:ring-yellow-800">
              Update Profile
            </button>
            <a
              href="/logout"
              className="font-bold border focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center border-yellow-300 text-yellow-300 hover:bg-yellow-300/20 focus:ring-yellow-900"
            >
              Logout
            </a>
          </div>
        </form>

      </div>
    </Layout>
  );
};
