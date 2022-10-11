const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Geek Console</title>
        <link rel="icon" type="image/png" href="/css/favicon.ico" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className="h-full">
        {children}
      </body>
    </html>
  );
};
