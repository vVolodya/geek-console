const React = require('react');
const AuthLayout = require('./AuthLayout');

module.exports = function SignupForm({ error }) {
  return (
    <AuthLayout>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 border-r-4">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto mx-auto"
                src="/images/brain.png"
                alt="Your Company"
              />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 text-center">Become a member</h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="text-center p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                    Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Register
                    </button>

                    <div className="text-sm mt-4 text-center">
                      <a href="/login" className="font-medium text-blue-600 hover:text-blue-800">
                        Already have an account?
                      </a>
                    </div>

                    {error ? (
                      <div className="p-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center" role="alert">
                        {error}
                      </div>
                    ) : null}

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <lottie-player className="lottie" src="https://assets6.lottiefiles.com/packages/lf20_DMgKk1.json" style={{ width: 900, height: 900, frameBorder: 0 }} background="transparent" speed="1" loop autoplay />
          {/* <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/loginRightSide.avif"
            alt="Login Building"
          /> */}
        </div>
      </div>
    </AuthLayout>
  );
};
