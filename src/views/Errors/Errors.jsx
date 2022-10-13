const React = require('react');
const Layout = require('../Layout');

module.exports = function Error({ user, errorDetails }) {
  return (
    <Layout user={user}>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <div className="mx-auto flex flex-col items-center">
        <h1 className="mt-16 mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Oops. Something went wrong</h1>
        <h2 className="text-xl mb-16 text-yellow-400">If you think this is a bug, please report it to the developer</h2>
        <div>
          <a href="mailto:vladimir.yevseev@gmail.com?subject=Throubleshooting&body=Hey, I've caught a bug in your application. This is ..." className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-2 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">Report</a>
        </div>
        <lottie-player className="lottie" src="https://assets1.lottiefiles.com/packages/lf20_vhnlnxlf.json" style={{ width: 600, height: 600, frameBorder: 0 }} background="transparent" speed="1" loop autoplay />
        { errorDetails.stackHighlited ? (
          <pre
            className="error"
        // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: errorDetails.stackHighlited }}
          />
        ) : null }
      </div>

    </Layout>
  );
};
