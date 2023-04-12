import Layout from '@/components/Layout';
import SEO from '@/components/seo';
import { Box, Grid } from '@material-ui/core';
import { useTheme } from "@material-ui/styles";
import Link from 'next/link';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase.config"
import ReactMarkdown from 'react-markdown';
import { ContactForm } from '@/components/contact';

export default function Home({ blogContent, latestPosts }) {
    // console.log("BLOG CONTENT Single", blogContent, latestPosts)
    const theme = useTheme();
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
    return (
        <>
            <SEO title={blogContent.meta_title} description={blogContent.meta_desc} canonicalUrl={"https://www.devcraft.site/" + blogContent.canonical_url} articleSchema={blogContent.schemaMarkup} faqSchema={blogContent.faqSchema} />
            <Layout>
                <LazyLoadComponent>
                    <section style={{ background: "#F1F2F3" }}>
                        <Grid container spacing={4} alignItems="stretch" justifyContent="space-around">
                            <Grid item xs={12} sm={12} md={8}>
                                <Box style={{ background: "white", padding: "20px", borderRadius: "4px" }}>
                                    {blogContent && <img src={'/images' + blogContent.featured_img} style={{ width: "100%", }} alt={blogContent.featured_img} />}
                                    <div style={{ padding: "0 20px 20px" }}>
                                        {blogContent && <p style={{ ...theme.typography.p, marginBottom: "0px", }}>{blogContent.date} by {blogContent.author}</p>}
                                        <h1 style={{ ...theme.typography.h2, padding: "0px" }}>{blogContent.title}</h1>
                                        <ReactMarkdown>{blogContent.Description}</ReactMarkdown>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Box style={{ padding: "20px", background: "white", height: "max-content" }}>
                                    <div style={{marginBottom:"40px",background: "#F5F5F5", padding: "20px 15px", borderRadius: "8px", color: "#091FF7" }}>
                                    <h2 style={{ ...theme.typography.h3, padding: "0px" }}>Get In Touch</h2>
                                    <ContactForm />
                                    </div>
                                    <div>
                                    <h2 style={{ ...theme.typography.h3, padding: "0px" }}>Recent Posts</h2>
                                    <LazyLoadComponent>
                                        {rearrangeObjectsByDate(latestPosts).map((x, i) => {
                                            return (
                                                <Link href={x.canonical_url} key={'blogContent' + x.title + i} style={{ display: "flex", margin: "15px 0", fontWeight: "bold", color: "#091FF7", lineHeight: "25px" }}>
                                                    <LazyLoadImage alt={x.featured_img} src={'/images' + x.featured_img} style={{ width: "155px", padding: "0 20px 0 10px", objectFit: "contain", }} />
                                                    {x.title}
                                                </Link>
                                            )
                                        })}
                                    </LazyLoadComponent>
                                    </div>
                                </Box>

                            </Grid>
                        </Grid>
                    </section>
                </LazyLoadComponent>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    try {
        const blogsRef = collection(db, 'blog');
        const blogsSnapshot = await getDocs(blogsRef);
        const blogContent = blogsSnapshot.docs.map(doc => doc.data());

        // Generate paths based on the slug field in each blog post
        const paths = blogContent.map(post => {
            // Assuming that the slug field is available in each post object
            return { params: { slug: post.slug } };
        });

        return {
            paths,
            fallback: false // or 'blocking' if you want to use Incremental Static Regeneration
        };
    } catch (error) {
        console.error("Error generating static paths: ", error);
        return {
            paths: [],
            fallback: false // or 'blocking' if you want to use Incremental Static Regeneration
        };
    }
}

export async function getStaticProps({ params }) {
    try {
        const { slug } = params; // Extract the slug from the params
        const blogsRef = collection(db, 'blog');
        const blogsSnapshot = await getDocs(blogsRef);
        const blogContent = blogsSnapshot.docs.map(doc => doc.data());
        const latestPosts = blogContent.slice(0, 5);
        const singleBlogContent = blogContent.find(post => post.slug === slug); // Find the blog entry with the matching slug

        return {
            props: {
                blogContent: singleBlogContent, // Pass the single blog entry as props
                latestPosts,
            },
            revalidate: 1, // Enable Incremental Static Regeneration with a revalidate time of 1 second
        };
    } catch (error) {
        console.error("Error fetching blog content:", error);
        return {
            props: {
                blogContent: null, // Return null if there is an error fetching the blog content,
                latestPosts: []
            },
            revalidate: 1, // Enable Incremental Static Regeneration with a revalidate time of 1 second
        };
    }
}

