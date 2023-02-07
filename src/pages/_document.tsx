import Document, { Html, Main, Head, NextScript } from 'next/document'

import { TopNav } from '@/components/TopNav/TopNav'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <TopNav />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

