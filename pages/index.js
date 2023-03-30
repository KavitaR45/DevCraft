import Banner from '@/components/banner'
import Card from '@/components/card';
import Layout from '@/components/Layout';
import { useTheme } from "@material-ui/styles";

export default function Home() {
  const theme = useTheme();
  const BannerData={
    title1:"Work that we produce for our clients for our clients",
    para:'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',
    img:"/images/banner/sideImg.png",
    banner:"/images/banner/banner.png",
    btn:"Hire Us",
    btnLink:"#",
    sectionClass:"banner-section",
    imgClass:"mob-display-none",
    bannerColor:"#E2F1F6"
  }
  const AboutData={
    title2:"About Me",
    para:'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',
    img:"/images/about/main.png",
    bannerColor:"#fff",
  }
  const CardData={
    title2:"Our Services",
    para:'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',
    img:"/images/banner/sideImg.png",
    btn:"Hire Us",
    btnLink:"#",
    bannerColor:"#E2F1F6",
    cardD:[
      {title3:"Our Services",para:'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',btn:"Hire Us", btnLink:"#",},
      {title3:"Our Services",para:'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',btn:"Hire Us", btnLink:"#",},
      {title3:"Our Services",para:'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',btn:"Hire Us", btnLink:"#",},
      {title3:"Our Services",para:'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',btn:"Hire Us", btnLink:"#",},
      {title3:"Our Services",para:'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',btn:"Hire Us", btnLink:"#",},
      {title3:"Our Services",para:'Great platform for the job seeker that searching Great platform for the job seeker that searching Great platform for the job seeker that searching for new career heights and passionate about startups',btn:"Hire Us", btnLink:"#",},
    ]
  }
  return (
    <>
    <Layout>

        <Banner {...BannerData}/>
        <Banner {...AboutData}/>
        <Card {...CardData}/>
    </Layout>
    </>
  )
}
