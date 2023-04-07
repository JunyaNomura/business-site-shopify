import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
      <meta charSet="utf-8" />
      {/* For Safari and Edge to prevent row of numbers from being recognized "tel" */} 
      <meta name="format-detection" content="telephone=no" />
      <meta name="robots" content="index, follow" />
      {/* favicon/webclipicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="webclip.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
