const React = require('react');

module.exports = function Footer() {
  return (
    <footer className="p-4 py-16 bg-zinc-900">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center">
          <div>
            <div className="mb-6">
              <a href="/">
                <img className="h-8 w-auto" src="/images/geekConsole3.png" alt="Footer logo" />
              </a>
            </div>
            <p className="text-white text-sm">© 2022 GeekConsole™. All Rights Reserved</p>
          </div>
          <form name="newsletter" className="flex flex-col w-full max-w-sm lg:ml-auto">
            <div className="flex">
              <div className="relative w-full">
                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-[#F7BE38]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input type="email" id="email" className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-l-lg border border-[#F7BE38] focus:ring-[#F7BE38]/90 focus:border-[#F7BE38]/90" placeholder="Your email" required />
              </div>
              <button type="submit" id="send-email-button" className="w-24 py-3 px-5 text-sm text-center text-gray-900 rounded-r-lg border cursor-pointer bg-[#F7BE38] border-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/90">Subscribe</button>
              <button disabled id="spinner-button" type="submit" className="w-24 py-3 px-5 text-sm text-center text-gray-900 rounded-r-lg border cursor-pointer bg-[#F7BE38] border-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/90 hidden">
                <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div id="newsletter-alert" className="w-full mt-4 p-4 text-sm font-bold rounded-lg bg-green-200 text-green-800 text-center hidden" role="alert">
              You have been successfully subscribed
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
