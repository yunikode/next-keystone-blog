import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body  style={{ display: "flex", justifyContent: "center", flexDirection: 'column', backgroundColor: 'beige', alignItems: 'center', minHeight: '100vh' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}