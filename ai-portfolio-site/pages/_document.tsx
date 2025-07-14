import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Plausible Analytics */}
        <script
          async
          defer
          data-domain="aiportfolio.vercel.app"
          src="https://plausible.io/js/plausible.js"
        />
        {/* Add favicon and meta tags for SEO */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="AI Developer Portfolio for Satyam Sharma. Projects, skills, and experience in AI, ML, and backend engineering." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
