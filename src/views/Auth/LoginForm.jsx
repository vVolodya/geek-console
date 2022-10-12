const React = require('react');
const AuthLayout = require('./AuthLayout');

module.exports = function LoginForm({ error }) {
  return (
    <AuthLayout>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 border-r-4 border-[#F7BE38]">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto mx-auto"
                src="/images/brain.png"
                alt="Your Company"
              />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white text-center">Sign in to your account</h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-yellow-400">
                      Email address
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
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a href="/" className="font-medium text-[#6873B9] hover:text-[#6873B9]/90">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-bold text-gray-900 shadow-sm bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:outline-none focus:ring-2 focus:ring-[#F7BE38]/50 focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                    <div className="text-sm mt-4 text-center">
                      <a href="/signup" className="font-medium text-[#4250A8] hover:text-[#4250A8]/90">
                        Do not have an account yet?
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
        <div className="relative hidden w-0 flex-1 pl-64 lg:flex items-center">
          <lottie-player className="lottie" src="https://assets6.lottiefiles.com/packages/lf20_DMgKk1.json" style={{ width: 900, height: 900 }} background="transparent" speed="1" loop autoplay />
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
