import Layout from '@/components/Layout';
import SEO from '@/components/seo';
import { Box, Button, Grid } from '@material-ui/core';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import {  collection, getDocs } from 'firebase/firestore';
import {db} from "../../firebase.config"
import Link from 'next/link';
import { useState } from 'react';

export default function Home({ blogContent }) {
  return (
    <>
      <SEO title='Blog | DevCraft - Freelance Web Developer | WordPress | E-Commerce' description='DevCraft offers professional web development services, specializing in WordPress and E-Commerce websites. Contact us for custom web solutions.' canonicalUrl={`${process.env.NEXT_PUBLIC_APP_URL}/blog/`} />
      <Layout>
        <LazyLoadComponent>
          <section style={{ background: `#E2F1F6`, }}>
            <Grid container alignItems="center" justifyContent="center">
              <h1 style={{ marginBottom: "30px" }}>Latest Updates</h1>
            </Grid>
          </section>
          <section style={{ background: "#F1F2F3" }}>
            <Grid container spacing={4} alignItems="flex-start" justifyContent="flex-start">
              <LazyLoadComponent>

              {blogContent.filter(x=>x.status != 'draft').map((x, i) => {
                return (
                 <>
                  <Grid key={'blogContent' + x.title + i} item xs={12} sm={6} md={6} lg={4}>
                    <Link href={process.env.NEXT_PUBLIC_APP_URL+x.canonical_url+'/'}>
                    <Box style={{ background: "white", borderRadius: "20px", padding: "10px" }}>
                      <LazyLoadImage src={'/images'+x.featured_img} style={{ width: "100%", objectFit: "cover", borderRadius: "20px 20px 0 0" }} alt={x.title} />
                      <div style={{ padding: "0 20px 20px" }}>
                        <h3 style={{margin:"15px 0 10px 0"}}>{x.title}</h3>
                        <p>{x.Description.slice(0,105)+'....'}</p>
                        {/* <Button variant="contained" color="primary" href={x.canonical_url}>Read More</Button> */}
                      </div>
                    </Box>
                    </Link>
                  </Grid>
                 </>
                )
              })}
              </LazyLoadComponent>
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
    let blogContent = blogsSnapshot.docs.map(doc => doc.data());
    function rearrangeObjectsByDate(arr) {
      // Convert the date strings to JavaScript Date objects and attach them to the original objects
      const objectsWithDate = arr.map(obj => {
        const dateString = obj.date;
        const dateObject = new Date(dateString);
        return { ...obj, dateObject };
      });
    
      // Sort the objects based on the date property in descending order (latest date first)
      objectsWithDate.sort((a, b) => b.dateObject - a.dateObject);
    
      // Remove the temporary dateObject property from the sorted objects
      const sortedObjects = objectsWithDate.map(obj => {
        const { dateObject, ...rest } = obj;
        return rest;
      });
    
      return sortedObjects;
    }
    blogContent = rearrangeObjectsByDate(blogContent)
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
