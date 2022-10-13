const React = require('react');
const AuthLayout = require('./AuthLayout');

module.exports = function SignupForm({ error }) {
  return (
    <AuthLayout>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 xl:flex-none lg:px-20 xl:px-24 xl:border-r-4 xl:border-[#F7BE38]">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <a href="/">
                <img
                  className="h-12 w-auto mx-auto"
                  src="/images/brain.png"
                  alt="Your Company"
                />
              </a>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white text-center">Become a member</h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-yellow-400">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-yellow-400">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-white border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90"
                      />
                    </div>
                  </div>
                  <div className="text-center font-bold p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                    Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-bold text-gray-900 shadow-sm bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:outline-none focus:ring-2 focus:ring-[#F7BE38]/50 focus:ring-offset-2"
                    >
                      Register
                    </button>
                    <div className="text-sm mt-4 text-center">
                      <a href="/login" className="font-medium text-[#4250A8] hover:text-[#4250A8]/90">
                        Already have an account?
                      </a>
                    </div>
                    {error ? (
                      <div className="p-4 my-4 text-sm font-bold text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center" role="alert">
                        {error}
                      </div>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 pt-32 pl-80 flex-1 xl:block items-center">
          <lottie-player className="lottie" src="https://assets3.lottiefiles.com/packages/lf20_wt880ps8.json" style={{ width: 700, height: 700, frameBorder: 0 }} background="transparent" speed="1" loop autoplay />
        </div>
      </div>
    </AuthLayout>
  );
};
