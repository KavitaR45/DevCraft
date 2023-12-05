import React from "react"
import { Grid, Button } from "@material-ui/core";
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailIcon from '@material-ui/icons/Mail';

export default function Contact() {

    const MarginBottom = { margin: "0 0 14px 0", fontSize: "1.05rem", lineHeight: "1.8rem" }
    const Margin8 = { margin: "0 10px", color: "#091FF7" }
    return (
        <>
            <section className="contact-area contact-bg" data-background="/assets/img/bg/contact_bg.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="contact-content">
                                <div className="section-title mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">GET IN TOUCH</span>
                                    <h2 className="title tg-element-title">We Are Connected To Help Your Business!</h2>
                                </div>
                                <p>Looking To Bring Your Online Presence To The Next Level? Get In Touch With Me Today And Let's Make It Happen. Whether You Need A New Website, An E-Commerce Store, A Landing Page, Or A Revamp Of Your Current Site, I Have The Skills And Expertise To Deliver.</p>
                               </div>
                            <p className="para-text" style={{fontWeight: "bold",marginTop:"10px" }}>You can also contact us via:</p>
                            <Grid container alignItems="center" rowSpacing={2}>
                            <Grid item xs={12} container alignItems="center" style={MarginBottom}><MailIcon style={Margin8} /> info@devcraft.site</Grid>
                            <Grid item xs={12} container alignItems="center" style={MarginBottom}><LocalPhoneIcon style={Margin8} /> 7721804979</Grid>
                        </Grid>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact-form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-shape">
                    <img src="/assets/img/images/contact_shape.png" alt="" />
                </div>
            </section>
        </>
    )
}

export const ContactForm = () => {
    const projectTypes = [
        { value: 'wordpress-development', text: 'WordPress Development' },
        { value: 'ecommerce-development-wordpress', text: 'Ecommerce Development (WordPress)' },
        { value: 'website-development', text: 'Web Development' },
        { value: 'website-revamp', text: 'Website Revamping' },
        { value: 'landing-page', text: 'Landing Page' },
        { value: 'static-site', text: 'Static Site' },
        { value: 'dynamic-site', text: 'Dynamic Site' },
        { value: 'headless-cms-web-development', text: 'Headless CMS Development' },
        { value: 'other', text: 'Others' },
    ];
    return (
        <form id="myForm" name="contactForm" action='https://submit-form.com/YYqB1NvV'>
            <input type="hidden" name="form-name" value="contactForm" />
            <input title="Name should not contains any numeric letters" pattern="[A-Za-z ]{1,32}" placeholder="Name" label="Name" type="text" name="name" required />
            <input title="Please enter a valid email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" label="Email" type="mail" name="email" required />
            <select id="project-type" name="project" required>
                <option value="">Select Project Type</option>
                {projectTypes.map(projectType => (
                    <option key={projectType.value} value={projectType.value}>
                        {projectType.text}
                    </option>
                ))}
            </select>
            <input pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$" title="Please enter a valid phone number" placeholder="Mobile Number" label="Mobile Number" type="tel" name="phone" required />
            <textarea placeholder="Message" label="Message" type="text" name="msg" required></textarea>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    )
}