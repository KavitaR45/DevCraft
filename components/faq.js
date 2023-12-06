import React, { useState } from 'react';



export default function Faq({faqData}) {
    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
        setActiveKey((prevKey) => (prevKey === key ? null : key));
    };

    return (
        <>
            <section className='services-area-seven'>
                <div className="container">
                    <div className="row align-items-end justify-content-center">
                       
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="section-title mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">{faqData.sectionTitle.subTitle}</span>
                                    <h2 className="title tg-element-title">{faqData.sectionTitle.title}</h2>
                                </div>
                                <p>{faqData.content}</p>
                                <div className="accordion-wrap">
                                    <div className="accordion" id="accordionExample">
                                    {faqData.accordionData.map((item) => (
                                            <div key={item.key} className="accordion-item">
                                                <h2 className="accordion-header" onClick={() => handleToggle(item.key)}>
                                                    <button
                                                        className={activeKey === item.key ? 'accordion-button' : 'accordion-button collapsed'}
                                                        type="button"
                                                    >
                                                        {item.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${item.key}`}
                                                    className={activeKey === item.key ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}
                                                >
                                                    <div className="accordion-body">
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9">
                                <img  src={`${process.env.NEXT_PUBLIC_APP_URL}/images/faqs.png`} alt="" data-parallax={JSON.stringify(faqData.parallaxConfig)} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
