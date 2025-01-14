import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>502 Bad Gateway</title>
      <meta name="description" content="Your source for bizarre and hilarious fake news!" />

      <meta property="og:url" content="https://thevillagelunatic.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="The Village Lunatic" />
      <meta property="og:description" content="Your source for bizarre and hilarious fake news!" />
      <meta property="og:image" content="/metadata_banner.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="thevillagelunatic.com" />
      <meta property="twitter:url" content="https://thevillagelunatic.com/" />
      <meta name="twitter:title" content="The Village Lunatic" />
      <meta name="twitter:description" content="Your source for bizarre and hilarious fake news!" />
      <meta name="twitter:image" content="/metadata_banner.png" />
      <link rel="icon" href="site.png" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
