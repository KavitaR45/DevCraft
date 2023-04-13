import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-LYHP773JR2"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      // Use setTimeout to delay the gtag('config') call by 2000ms (2 seconds)
      setTimeout(function() {
        gtag('config', 'G-LYHP773JR2');
      }, 3000);
    `,
  }}
/>

          <script
  type="text/javascript"
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;
        // Use setTimeout to delay the script execution by 2000ms (2 seconds)
        setTimeout(function() {
          t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        }, 3000);
      })(window, document, "clarity", "script", "gj54bm0k54");
    `,
  }}
/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
