import { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";

const testimonialData = [
  {
    rating: 5,
    quote: "Working with DevCraft was an exceptional experience. Their attention to detail, creativity, and dedication to delivering high-quality web development solutions truly set them apart. I'm extremely satisfied with the results.",
    avatar: "/assets/img/images/testi_avatar01.png",
    name: "Sarah Thompson",
    position: "Marketing Manager, Tech Innovators",
  },
  {
    rating: 4,
    quote: "I hired DevCraft for a website redesign project, and the outcome exceeded my expectations. Their expertise in responsive design and commitment to delivering on time made the collaboration seamless. Highly recommended!",
    avatar: "/assets/img/images/testi_avatar02.png",
    name: "John Reynolds",
    position: "Founder, Digital Solutions Co.",
  },
  {
    rating: 5,
    quote: "It was a pleasure working with DevCraft on our e-commerce development. They brought innovative solutions to the table and ensured our online store not only looked great but also functioned flawlessly. Fantastic job!",
    avatar: "/assets/img/images/testi_avatar03.png",
    name: "Alexandra Bennett",
    position: "E-commerce Director, TrendyMart",
  },
  {
    rating: 4,
    quote: "I appreciate DevCraft's client-centric approach and their ability to understand our unique business needs. Their WordPress development skills transformed our online presence, and the results speak for themselves.",
    avatar: "/assets/img/images/testi_avatar04.png",
    name: "David Miller",
    position: "CEO, TechWizards",
  },
  // Add other testimonial items as needed
];


const TestimonialItem = ({ rating, quote, avatar, name, position }) => (
  <div className="testimonial-item">
    <div className="testimonial-content">
      <div className="content-top">
        <div className="rating">
          {[...Array(rating)].map((_, index) => (
            <i key={index} className="fas fa-star" />
          ))}
        </div>
        <div className="testimonial-quote">
          <img src="/assets/img/icons/quote.svg" alt="" />
        </div>
      </div>
      <p>{quote}</p>
      {/* <div className="testimonial-avatar">
        <div className="avatar-thumb">
          <img src={avatar} alt="" />
        </div>
        <div className="avatar-info">
          <h2 className="title">{name}</h2>
          <span>{position}</span>
        </div>
      </div> */}
    </div>
  </div>
);

const Testimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <section className="testimonial-area-five">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="testimonial-img-five">
                <img src="/assets/img/images/h5_testimonial_img.png" alt="" />
                <img src="/assets/img/images/h5_testimonial_shape01.png" alt="" className="shape-one" />
                <img src="/assets/img/images/h5_testimonial_shape02.png" alt="" className="shape-two" />
                <img src="/assets/img/images/h5_testimonial_shape03.png" alt="" className="shape-three" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-content-five">
                <div className="section-title title-three mb-50 tg-heading-subheading animation-style1">
                  <span className="sub-title tg-element-title">Our Testimonials</span>
                  <h2 >What our awesome customers say</h2>
                </div>
                <div className="testimonial-item-wrap-five">
                  <Slider ref={sliderRef} {...settings} className="testimonial-active-five">
                    {testimonialData.map((testimonial, index) => (
                      <TestimonialItem key={index} {...testimonial} />
                    ))}
                  </Slider>
                  <div className="testimonial-nav-five">
                    <button type="button" className="slick-prev slick-arrow" onClick={previous}>
                      <i className="flaticon-right-arrow" />
                    </button>
                    <button type="button" className="slick-next slick-arrow" onClick={next}>
                      <i className="flaticon-right-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
