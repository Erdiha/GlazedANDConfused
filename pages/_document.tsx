import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Fresh mini donut truck" />
          <meta name="keywords" content="mini donut, donut, donut catering, donut truck mini donut truck, fresh donuts" />
          {/* <meta name="author" content="Your Name" /> */}
          <link rel="icon" href="/homerdonut.png" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Dancing+Script:wght@500&family=Gloria+Hallelujah&family=Henny+Penny&family=Kalam:wght@700&family=Permanent+Marker&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
