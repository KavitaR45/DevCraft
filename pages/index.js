import Banner from '@/components/banner'
import Card from '@/components/card';
import Contact from '@/components/contact';
import Layout from '@/components/Layout';
import SEO from '@/components/seo';
import { useTheme } from "@material-ui/styles";

export default function Home() {
  const theme = useTheme();
  const BannerData={
    title1:"Creative Web Development Solutions for Your Business Growth",
    para:<>Get top-quality web development services for WordPress , E-Commerce, Website Revamping, Landing Page, Static or Dynamic sites and Headless CMS. From creating a stunning website to improving your online presence, I offer tailored and affordable solutions for your unique needs.</>,
    img:"/images/banner/sideImg.png",
    banner:"/images/banner/banner.png",
    btn:"Hire Me",
    btnLink:"#contact",
    sectionClass:"banner-section",
    imgClass:"mob-display-none",
    bannerColor:"#E2F1F6",
    id:"banner"
  }
  const AboutData={
    title2:"About Me",
    para:<>Hi, I'm a freelance developer with 2+ years of experience. My focus is on building accessible and high-performing digital experiences for clients. I stay up-to-date with the latest technologies and best practices in the industry.<br/><br/>I started my journey in web development field in 2019, with HTML, CSS, and JavaScript. As time passed, I shifted to WordPress and WooCommerce, and gradually started working on React.js, Next.js, Firebase and many more. <br/><br/> I'm dedicated to delivering quality work and providing excellent customer service. Let's work together!</>,
   img:"/images/about/main.png",
    bannerColor:"#fff",
    id:"about"
  }
  const CardData={
    title2:"What I Offer",
    para:'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',
    img:"/images/banner/sideImg.png",
    btn:"Hire Us",
    btnLink:"#",
    id:"services",
    bannerColor:"#E2F1F6",
    cardD:[
      {title3:"Wordpress Development",para:'High-quality and cost-effective WordPress development solutions for businesses of all sizes.',},
      {title3:"Website Development",para:'Take your business to the next level with a website that looks great on any screen size.',},
      {title3:"E-Commerce Development",para:'Launch your online store with ease! From product listings to checkout, I\'ve got you covered.',},
      {title3:"Website Revamping",para:'Tired of your outdated website? Revamp it with us for a fresh, modern look that matches your brand identity.',},
      {title3:"Landing Page",para:'First impression matters! Get a professional landing page to represent your brand and boost conversions.',},
      {title3:"Static / Dynamic Site",para:'From simple static to complex dynamic sites, I provide comprehensive web development services.',},
    ]
  }
  return (
    <>
    <SEO title='DevCraft - Freelance Web Developer | WordPress | E-Commerce' description='Looking for a freelance web developer for your WordPress or eCommerce website? DevCraft offers professional web development services to businesses of all sizes.' canonicalUrl='https://devcraft.site'/>
    <Layout>
        <Banner {...BannerData}/>
        <Banner {...AboutData}/>
        <Card {...CardData}/>
        <Contact />
    </Layout>
    </>
  )
}
