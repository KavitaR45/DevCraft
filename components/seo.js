import Head from "next/head";

const SEO = ({ title, description, canonicalUrl,articleSchema,faqSchema }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/images/logo.jpg'/>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
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
