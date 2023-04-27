import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Small e-commerce site for an avocado store built with Next.js and TypeScript. The home page displays all available avocados, with the option to click on individual avocados to view more information about them. Users can add avocados to their shopping cart and proceed to checkout to complete their purchase." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
