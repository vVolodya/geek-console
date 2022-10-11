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

        <link rel="icon" type="image/png" href="/css/favicon.ico" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>

      <body className="min-h-full flex flex-col justify-between">

        <Header user={user} />

        <main className="container mx-auto">
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
};
