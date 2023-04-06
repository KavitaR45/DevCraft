import Layout from '@/components/Layout';
import SEO from '@/components/seo';
import { Box, Button, Grid } from '@material-ui/core';
import { useTheme } from "@material-ui/styles";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import {  collection, getDocs } from 'firebase/firestore';
import {db} from "../../firebase.config"

export default function Home({ blogContent }) {
  const theme = useTheme();

  return (
    <>
      <SEO title='Blog | DevCraft - Freelance Web Developer | WordPress | E-Commerce' description='DevCraft offers professional web development services, specializing in WordPress and E-Commerce websites. Contact us for custom web solutions.' canonicalUrl='https://devcraft.site/blog' />
      <Layout>
        <LazyLoadComponent>
          <section style={{ background: `#E2F1F6`, }}>
            <Grid container alignItems="center" justifyContent="center">
              <h2 style={{ ...theme.typography.h2, marginBottom: "30px" }}>Latest Updates</h2>
            </Grid>
          </section>
          <section style={{ background: "#F1F2F3" }}>
            <Grid container spacing={4} alignItems="flex-start" justifyContent="start">
              {blogContent.map((x, i) => {
                return (
                 <>
                  <Grid key={'blogContent' + x.title + i} item xs={12} sm={6} md={4} lg={4}>
                    <Box style={{ background: "white", borderRadius: "20px", padding: "10px" }}>
                      <img src={'/images'+x.featured_img} style={{ width: "100%", objectFit: "cover", borderRadius: "20px 20px 0 0" }} alt={x.title} />
                      <div style={{ padding: "0 20px 20px" }}>
                        <p style={{ ...theme.typography.p, marginBottom: "0px", color: "gray" }}>{x.author}</p>
                        <h2 style={{ ...theme.typography.h3, padding: "0px" }}>{x.title}</h2>
                        <p style={{ ...theme.typography.p, }}>{x.Description.slice(0,105)+'....'}</p>
                        <Button variant="contained" color="primary" href={x.canonical_url}>Read More</Button>
                      </div>
                    </Box>
                  </Grid>
                 </>
                )
              })}
            </Grid>
          </section>
        </LazyLoadComponent>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  try {
    const blogsRef = collection(db, 'blog');
    const blogsSnapshot = await getDocs(blogsRef);
    const blogContent = blogsSnapshot.docs.map(doc => doc.data());

    return {
      props: {
        blogContent
      }
    };
  } catch (error) {
    console.error("Error fetching blog content: ", error);
    return {
      props: {
        blogContent: []
      }
    };
  }
}
