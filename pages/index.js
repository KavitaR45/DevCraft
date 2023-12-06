import Banner from '@/components/banner';
import Contact from '@/components/contact';
import Layout from '@/components/Layout';
import SEO from '@/components/seo';
import { Grid, Box } from "@material-ui/core";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase.config";
import Link from 'next/link';
import About from "@/components/about";
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import ServicesSection from '@/components/services';
import Project from '@/components/project';
import Testimonial from '@/components/testimonial';

export default function Home({ blogContent }) {
  const BannerData = {
    title1: "Creative Web Development Solutions for Your Business Growth",
    para: <>Get top-quality web development services for WordPress , E-Commerce, Website Revamping, Landing Page, Static or Dynamic sites and Headless CMS. From creating a stunning website to improving your online presence, I offer tailored and affordable solutions for your unique needs.</>,
    img: `${process.env.NEXT_PUBLIC_APP_URL}/images/banner/sideImg.png`,
    banner: `${process.env.NEXT_PUBLIC_APP_URL}/images/banner/banner.png`,
    btn: "Hire Me",
    link: `${process.env.NEXT_PUBLIC_APP_URL}/contact/`,
    sectionClass: "banner-section",
    imgClass: "mob-display-none",
    bannerColor: "#E2F1F6",
    id: "banner"
  }
  const content = {
    imgSrc: `${process.env.NEXT_PUBLIC_APP_URL}/assets/img/images/h5_about_img.png`,
    title: "Crafting Digital Experiences with Precision",
    subTitle: "About Us",
    description: "As a skilled freelance developer, I bring your digital ideas to life. Specializing in web development, I create tailored solutions for your online presence, ensuring functionality, aesthetics, and user satisfaction.",
    listItems: [
      "Responsive Design",
      "100% Better results",
      "Client-Centric Approach",
      "Customized Solutions",
    ],
    linkHref: "#portfolio",
    linkText: "Explore My Work",
    id: "about"
  };
  
  const Services = {
    subTitle: 'Our Services',
    title: 'Unlocking Digital Potential for Your Business',
    desc: 'As a freelance developer, I specialize in providing top-notch digital solutions to enhance your online presence and meet your unique business needs.',
    servicesData: [
      {
        icon: 'flaticon-design',
        title: 'Web Design & Development',
        description: 'Crafting visually stunning and user-centric websites tailored to your business needs.'
      },
      {
        icon: 'flaticon-shopping-cart',
        title: 'E-commerce Solutions',
        description: 'Boost your online sales with comprehensive e-commerce development services. '
      },
      {
        icon: 'flaticon-code',
        title: 'Headless CMS Development',
        description: 'Experience the power of Headless CMS for streamlined content management.'
      },
      {
        icon: 'flaticon-development',
        title: 'Wordpress Development',
        description: 'Creating powerful and customizable WordPress solutions to elevate your online presence.'
      },
      // Add other service items as needed
    ]
  };
  
  const Projects = {
    title: "Case Studies",
    projectLink: '#',
    id:'portfolio',
    desc: "We’ve Done Lot’s Of Work, Let’s Check Some From Here",
    projectData: [
      {
        imgSrc: `${process.env.NEXT_PUBLIC_APP_URL}/images/project/portfolio.png`,
        projectLink: "https://webwizardry.netlify.app/",
        projectTitle: "Personal Portfolio",
        projectCategory: "Creative Work"
      },
      {
        imgSrc: `${process.env.NEXT_PUBLIC_APP_URL}/images/project/web.png`,
        projectLink: "https://netart.io/",
        projectTitle: "Netart",
        projectCategory: "Design Development"
      },
      {
        imgSrc: `${process.env.NEXT_PUBLIC_APP_URL}/images/project/web-1.png`,
        projectLink: "https://glastonemosaic.com/",
        projectTitle: "Glastone Mosaic",
        projectCategory: "Design Development"
      },
      {
        imgSrc: `${process.env.NEXT_PUBLIC_APP_URL}/images/project/ecom.png`,
        projectLink: "https://parrotcrow.in/",
        projectTitle: "Parrot Crow",
        projectCategory: "Development"
      },
      {
        imgSrc: `${process.env.NEXT_PUBLIC_APP_URL}/images/project/sync.png`,
        projectLink: "https://syncmedia.io/",
        projectTitle: "Sync Media",
        projectCategory: "Creative"
      },
      {
        imgSrc: `${process.env.NEXT_PUBLIC_APP_URL}/images/project/service.png`,
        projectLink: "https://dataasservices.com/",
        projectTitle: "Data As Services",
        projectCategory: "Design Development"
      }
    ]
  }
  return (
    <>
      <SEO title='DevCraft - Freelance Web Developer | WordPress | E-Commerce' description='Looking for a freelance web developer for your WordPress or eCommerce website? DevCraft offers professional web development services to businesses of all sizes.' canonicalUrl='https://www.devcraft.site/' />
      <Layout>
        <LazyLoadComponent>
          <Banner {...BannerData} />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <About content={content} />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <ServicesSection {...Services} />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Project {...Projects} />
        </LazyLoadComponent>
        {/* <LazyLoadComponent>
          <Testimonial />
        </LazyLoadComponent> */}
        <LazyLoadComponent>
          <section style={{ background: `url(/images/services/banner.png) #E2F1F6`, }} id='blog'>
            <Grid container alignItems="center" justifyContent="center">
            <div className="section-title section-title-three text-center mb-60 tg-heading-subheading animation-style1">
  <span className="sub-title tg-element-title">Our Blogs</span>
  <h2 >Read Our Latest Updates</h2>
  <p>Explore insightful articles and stay informed about the latest trends in technology and development. </p>
</div>

            </Grid>
            <Grid container spacing={4} style={{ marginBottom: "20px" }} alignItems="flex-start" justifyContent="start">

              {blogContent.filter(x => x.status != 'draft').slice(0, 3).map((x, i) => {
                return (
                  <>
                    <Grid key={'blogContent' + x.title + i} item xs={12} sm={6} md={6} lg={4}>
                      <Link href={process.env.NEXT_PUBLIC_APP_URL+x.canonical_url+'/'}>
                        <Box style={{ background: "white", borderRadius: "20px", padding: "10px" }}>
                          <LazyLoadImage src={'/images' + x.featured_img} style={{ width: "100%", objectFit: "cover", borderRadius: "20px 20px 0 0" }} alt={x.title} />
                          <div style={{ padding: "0 20px 20px" }}>
                            <h3 style={{margin:"15px 0 10px 0"}}>{x.title}</h3>
                            <p >{x.Description.slice(0, 105) + '....'}</p>
                          </div>
                        </Box>
                      </Link>
                    </Grid>
                  </>
                )
              })}
            </Grid>
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/blog/`} className="btn btn-three" style={{ margin: "20px auto 0 auto", display: "block", width: "max-content" }} >View All</Link>
            </section>
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Contact />
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
    blogContent = blogContent.slice(0, 6);
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
