import Head from "next/head";

const SEO = ({ title, description, canonicalUrl, articleSchema, faqSchema }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/images/icon.jpg' />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.devcraft.site/images/logo.png" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
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
