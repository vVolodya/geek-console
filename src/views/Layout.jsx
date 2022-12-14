const React = require('react');

const Header = require('./components/Header');
const Footer = require('./components/Footer');

module.exports = function Layout({ children, user }) {
  return (
    <html className="h-full" lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Geek Console</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap" rel="stylesheet" />

        <link rel="icon" type="image/png" href="https://i.ibb.co/31W7B1y/Png-Item-1032462.png" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/script/newsletter.js" />
        <script src="https://f.convertkit.com/ckjs/ck.5.js" />
      </head>

      <body className="min-h-full flex flex-col justify-between bg-[#1c1c1c]">

        <Header user={user} />

        <main className="container mx-auto flex flex-col items-center p-10">
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
};
