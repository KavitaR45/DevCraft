import React from 'react';
import Link from 'next/link';

export default function Choose({chooseData}) {
  const { sectionTitle, description, services } = chooseData;

  return (
    <>
      <section className='services-area-seven'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-three text-center mb-60 tg-heading-subheading animation-style1">
                <span className="sub-title tg-element-title">{sectionTitle.subTitle}</span>
                <h2 className="title tg-element-title">{sectionTitle.title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="services-item-four">
                  <div className="services-icon-four">
                    <i className={service.icon} />
                  </div>
                  <div className="services-content-four">
                    <h2 className="title">
                      <Link href={service.link}>{service.title}</Link>
                    </h2>
                    <p>{service.description}</p>
                    <Link href={service.link} className="btn transparent-btn-two">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
