import Banner from '@/components/banner'
import Card from '@/components/card';
import Contact from '@/components/contact';
import Layout from '@/components/Layout';
import SEO from '@/components/seo';
import { Grid } from "@material-ui/core";
import Slider from '@/components/slider';
import { useTheme } from "@material-ui/styles";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default function Home() {
  const theme = useTheme();
  const BannerData = {
    title1: "Creative Web Development Solutions for Your Business Growth",
    para: <>Get top-quality web development services for WordPress , E-Commerce, Website Revamping, Landing Page, Static or Dynamic sites and Headless CMS. From creating a stunning website to improving your online presence, I offer tailored and affordable solutions for your unique needs.</>,
    img: "/images/banner/sideImg.png",
    banner: "/images/banner/banner.png",
    btn: "Hire Me",
    link: "/#contact",
    sectionClass: "banner-section",
    imgClass: "mob-display-none",
    bannerColor: "#E2F1F6",
    id: "banner"
  }
  const AboutData = {
    title2: "About Me",
    para: <>Hi, I'm a freelance developer with 2+ years of experience. My focus is on building accessible and high-performing digital experiences for clients. I stay up-to-date with the latest technologies and best practices in the industry.<br /><br />I started my journey in web development field in 2019, with HTML, CSS, and JavaScript. As time passed, I shifted to WordPress and WooCommerce, and gradually started working on React.js, Next.js, Firebase and many more. <br /><br /> I'm dedicated to delivering quality work and providing excellent customer service. Let's work together!</>,
    img: "/images/about/main.png",
    bannerColor: "#fff",
    id: "about"
  }
  const CardData = {
    title2: "What I Offer",
    para: 'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',
    img: "/images/banner/sideImg.png",
    banner: "/images/services/banner.png",
    id: "services",
    bannerColor: "#E2F1F6",
    cardD: [
      { title3: "Wordpress Development", para: 'High-quality and cost-effective WordPress development solutions for businesses of all sizes.',bg:"linear-gradient(90deg, #009688, #4caf50)" },
      { title3: "Website Development", para: 'Take your business to the next level with a website that looks awesome on any screen size.',bg:"linear-gradient(90.05deg, rgb(9, 31, 247) -5.66%, rgb(100, 71, 150) 115.61%, rgb(223, 124, 20) 115.63%)" },
      { title3: "E-Commerce Development", para: 'Launch your online store with ease! From product listings to checkout, I\'ve got you covered.',bg:"linear-gradient(90deg, #642b73, #c6426e)" },
      { title3: "Website Revamping", para: 'Tired of your outdated website? Revamp it with us for a fresh, modern look that matches your brand identity.',bg:"linear-gradient(90deg, #8c00ff 0%, #ff0084 100%)" },
      { title3: "Landing Page", para: 'First impression matters! Get a professional landing page to represent your brand and boost conversions.',bg:"linear-gradient(90deg, #f12711, #f5af19)" },
      { title3: "Static / Dynamic Site", para: 'From simple static to complex dynamic sites, I provide comprehensive web development services.',bg:"linear-gradient(90deg, #9400D3 -5.66%, #4B0082 115.61%, #000080 115.63%)" },
    ]
  }
  const ImgData = [
    {link:"https://webwizardry.netlify.app/",img:'/images/project/portfolio.png',info:"Portfolio Site"},
    {link:"https://netart.io/",img: '/images/project/web.png',info:"Website Revamping"},
    {link:"http://parrotcrow.in/",img:'/images/project/ecom.png',info:"E-Commerce Development"},
    {link:"https://webwizardry.netlify.app/",img:'/images/project/landing.png',info:"Dynamic Site"},
    {link:"https://blockbuster-review.netlify.app/",img:'/images/project/movie.png',info:"Dynamic Site"},
    {link:"https://syncmedia.io/",img:'/images/project/sync.png',info:'Website Development'},
    {link:"https://nishakreates.com/",img:'/images/project/personal.png',info:"Wordpress Site"},
  ]
  return (
    <>
      <SEO title='DevCraft - Freelance Web Developer | WordPress | E-Commerce' description='Looking for a freelance web developer for your WordPress or eCommerce website? DevCraft offers professional web development services to businesses of all sizes.' canonicalUrl='https://www.devcraft.site/' />
      <Layout>
        <LazyLoadComponent>
          <Banner {...BannerData} />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Banner {...AboutData} />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Card {...CardData} />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <section id='portfolio'>
            <Grid container alignItems="center" justifyContent="center">
            <h2 style={{ ...theme.typography.h2,marginBottom:"30px"}}>My Portfolio</h2>
               </Grid>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              {ImgData.map((x, i) =><Grid justifyContent='center' container item xs={11} sm={6} md={3} key={'portfolio_Slider' + i}><a href={x.link} target='_blank'><img alt='portfolio-image'  style={{ width: "100%",}} src={x.img} /></a><p style={{...theme.typography.p,fontWeight:"bold"}}>{x.info}</p></Grid>)}
            </Grid>
             
          </section>
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Contact />
        </LazyLoadComponent>
      </Layout>
    </>
  )
}
