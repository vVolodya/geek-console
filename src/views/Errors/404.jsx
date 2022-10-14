const React = require('react');

const Layout = require('../Layout');

module.exports = function NotFound({ user }) {
  return (
    <Layout user={user}>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <div className="mx-auto flex flex-col items-center">
        <a
          href="/"
          className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
        >
          Go
          back home
        </a>
        <lottie-player className="lottie" src="https://assets1.lottiefiles.com/packages/lf20_aaesnvcw.json" style={{ width: 800, height: 800, frameBorder: 0 }} background="transparent" speed="1" loop autoplay />
        <div className="mt-6" />
      </div>
    </Layout>
  );
};
