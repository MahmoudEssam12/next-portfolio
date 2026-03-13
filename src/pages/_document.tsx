import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="author" content="Mahmoud Essam Fathy Rashed" />
        <meta
          name="description"
          content="Mahmoud Essam — Frontend & Fullstack JavaScript developer from Egypt. Portfolio with React, Next.js, Node.js projects, skills, and resume. Hire for frontend, backend, and fullstack web development."
        />
        <meta
          name="keywords"
          content="Mahmoud Essam, frontend developer Egypt, fullstack developer, JavaScript developer, React developer, Next.js, Node.js, MERN stack, web developer portfolio, hire developer Egypt"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="yYw-a3fG0zSen4-ZpIHSTucuJ_X_0OM8lRmkFMVm-yQ"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQ5B6443"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
