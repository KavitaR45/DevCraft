import Head from "next/head";

const SEO = ({ title, description, canonicalUrl,articleSchema,faqSchema }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/images/icon.jpg'/>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <script
  dangerouslySetInnerHTML={{
    __html: `
      {
        "@context": "http://schema.org/",
        "@type": "Organization",
        "name": "DevCraft",
        "url": "https://www.devcraft.site/",
        "logo": "https://www.devcraft.site/images/logo.png",
        "description": "DevCraft is a full-service web design and development solutions for your business growth, that offers custom website design, development, and maintenance services for businesses of all sizes.",
        "sameAs": [
          "https://www.linkedin.com/company/devcraft",
          "https://www.facebook.com/DevCraft-103402765330063",
          "https://twitter.com/DevCraft2"
        ]
      }
    `,
  }}
/>
<meta property="og:type" content="website" />
<meta property="og:title" content="DevCraft - Web Design and Development Services" />
<meta property="og:description" content="DevCraft is a full-service web design and development agency that offers custom website design, development, and maintenance services for businesses of all sizes." />
<meta property="og:image" content="https://www.devcraft.site/images/logo.png" />
<meta property="og:url" content="https://www.devcraft.site/" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="DevCraft - Web Design and Development Services" />
<meta name="twitter:description" content="DevCraft is a full-service web design and development agency that offers custom website design, development, and maintenance services for businesses of all sizes." />
<meta name="twitter:image" content="https://www.devcraft.site/images/logo.png" />

     {articleSchema && <script type="application/ld+json">
        {articleSchema}
      </script>}
     {faqSchema && <script type="application/ld+json">
        {faqSchema}
      </script>}
    </Head>
  );
};
export default SEO;
