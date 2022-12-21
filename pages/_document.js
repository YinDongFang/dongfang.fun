import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head />
        <body
          className='font-sans text-gray-700 dark:text-gray-200 antialiased'
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
