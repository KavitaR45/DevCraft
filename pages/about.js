import Banner from '@/components/banner';
import Contact from '@/components/contact';
import Layout from '@/components/Layout';
import SEO from '@/components/seo';
import About from "@/components/about";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import ServicesSection from '@/components/services';
import Faq from '@/components/faq';

export default function AboutPage() {
  const BannerData = {
    title1: "Crafting Digital Experiences with Precision",
    para: "As a skilled freelance developer, I bring your digital ideas to life. Specializing in web development, I create tailored solutions for your online presence, ensuring functionality, aesthetics, and user satisfaction.",
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
    linkHref: `${process.env.NEXT_PUBLIC_APP_URL}/#portfolio`,
    linkText: "Explore My Work",
    id: "about"
  };
  
  const faqData = {
    parallaxConfig: { "y": 100 },
    sectionTitle: {
        subTitle: "Get to Know Us",
        title: "Frequently Asked Questions"
    },
    content: "As a dedicated team of skilled developers, we strive to bring your digital ideas to life with precision and creativity. ",
    accordionData: [
      {
        key: 1,
        title: 'What sets your e-commerce solutions apart?',
        content: 'Our e-commerce solutions are designed to boost your online sales by providing comprehensive development services. We focus on creating a seamless and user-friendly shopping experience for your customers.'
      },
      {
        key: 2,
        title: 'Tell us about your approach to Headless CMS development.',
        content: 'We harness the power of Headless CMS to streamline content management. This approach allows for greater flexibility, scalability, and efficient content delivery, ensuring an optimal user experience.'
      },
      {
          key: 3,
          title: 'Do you provide ongoing support after the website is launched?',
          content: 'Yes, I offer ongoing support to ensure your website continues to function smoothly. Whether you need updates, maintenance, or assistance with any issues.'
      },
    ],
}


  return (
    <>
        <SEO title='About Us - DevCraft Freelance Web Developer' description='Looking for a freelance website developer? DevCraft offers professional web development services to businesses of all sizes.' canonicalUrl={`${process.env.NEXT_PUBLIC_APP_URL}/about/`} />
            <Layout>
        <LazyLoadComponent>
          <Banner {...BannerData} />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <About content={content} />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Faq faqData={faqData}/>
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Contact />
        </LazyLoadComponent>
      </Layout>
    </>
  )
}


