// Retrieved from this article - https://medium.com/swlh/server-side-rendering-styled-components-with-nextjs-1db1353e915e
import { DocumentContext } from 'next/document';

import React from 'react';
import Document from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
}
