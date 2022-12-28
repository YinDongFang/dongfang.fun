/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head>
          <script src="https://hm.baidu.com/hm.js?792fefb1fce082187658ef6540cd3f62">
          </script>
        </Head>
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
