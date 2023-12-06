import React from 'react';



export default function Approach({approachData}) {
  const { sectionTitle, features, shapes } = approachData;

  return (
    <>
      <section >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title text-center mb-50">
                <span className="sub-title">{sectionTitle.subTitle}</span>
                <h2 className="title">{sectionTitle.title}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="features-item">
                  <div className="features-content">
                    <div className="content-top">
                      <div className="icon">
                        <i className={feature.icon} />
                      </div>
                      <h2 className="title">{feature.title}</h2>
                    </div>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="features-shape-wrap">
          {shapes.map((shape, index) => (
            <img key={index} src={shape} alt="" />
          ))}
        </div>
      </section>
    </>
  );
}
