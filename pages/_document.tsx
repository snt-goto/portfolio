import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import config from 'config';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/img/ico/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/ico/favicon-16x16.png" />
        <link rel="manifest" href="/img/ico/site.webmanifest" />
        <link rel="mask-icon" href="/img/ico/safari-pinned-tab.svg" color="#333333" />
        <meta name="msapplication-TileColor" content="#333333" />
        <meta name="theme-color" content="#ffffff" />

        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${config.GTAG}`} strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');`
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${config.GTM}');
              `
          }}
        />
      </Head>
      <body>
        {/* Google Tag Manager */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${config.GTM}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
