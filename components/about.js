import Link from "next/link";

// Create a separate component for the About section content
const AboutContent = ({ title, subTitle, description, listItems, linkHref, linkText, imgSrc }) => (
    <div className="col-lg-6">
        <div className="about-content-six">
            <div className="section-title section-title-three mb-30 tg-heading-subheading animation-style1">
                <span className="sub-title tg-element-title">{subTitle}</span>
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
            <div className="about-list">
                <ul className="list-wrap">
                    {listItems.map((item, index) => (
                        <li key={index}><i className="fas fa-arrow-right" />{item}</li>
                    ))}
                </ul>
            </div>
            <Link href={linkHref} className="btn btn-three">{linkText}</Link>
        </div>
    </div>
);


// Modify the About component to accept props
const About = ({ content }) => (
    <>
        <section  id={content.id}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-img-six">
                            <img src={content.imgSrc} alt="" />
                            <img src="/assets/img/images/h5_about_shape01.png" alt="" />
                            <img src="/assets/img/images/h5_about_shape02.png" alt="" />
                        </div>
                    </div>
                    {/* Pass the data as props */}
                    <AboutContent {...content} />
                </div>
            </div>
        </section>
    </>
);

export default About;
