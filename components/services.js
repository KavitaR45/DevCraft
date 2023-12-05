import Link from "next/link";

// Create a separate component for the service items
const ServiceItem = ({ icon, title, description }) => (
    <div className="col-xl-3 col-lg-4 col-md-6">
        {/* <Link href="/services-details" className="link-btn"> */}
            <div className="features-item-three">
                <div className="features-icon-three">
                    <i className={icon} />
                </div>
                <div className="features-content-three">
                    <h3 className="title">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        {/* </Link> */}
    </div>
);

// Main component for the services section
const ServicesSection = (props) => {

    return (
        <section className={'services-area-seven'} id="services" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title-two text-center mb-50">
                            <span className="sub-title tg-element-title">{props.subTitle}</span>
                            <h2 className="title">{props.title}</h2>
                            <p>{props.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {props.servicesData.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
