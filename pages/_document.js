/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Document, { Head, Html, Main, NextScript, } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* google search console */}
          <meta name="google-site-verification" content="d4WDvavE6o6YacQgWn4vefmFO-r3JTSk3vL2AyRtTBY" />
          {/* Global site tag (gtag.js) - Google Analytics to track on page load */}
          {/* kbcqna = G-3KB9YC31ZX */}
          {/* kbcqna1 = UA-151632739-1 */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-3KB9YC31ZX"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-151632739-1', {    
                  page_path: window.location.pathname,
                });
          `,
            }}
          />
          {/* Adsense script */}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6253335086938766"
            crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};