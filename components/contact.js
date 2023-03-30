import React from "react"
import { useTheme } from "@material-ui/styles";
import { Grid, Button } from "@material-ui/core";
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailIcon from '@material-ui/icons/Mail';

export default function Contact() {
    const theme = useTheme();
    
    const projectTypes = [
        { value: 'wordpress-development', text: 'WordPress Development' },
        { value: 'ecommerce-development-wordpress', text: 'Ecommerce Development (WordPress)' },
        { value: 'website-development', text: 'Web Development' },
        { value: 'website-revamp', text: 'Website Revamping' },
        { value: 'landing-page', text: 'Landing Page' },
        { value: 'static-site', text: 'Static Site' },
        { value: 'dynamic-site', text: 'Dynamic Site' },
        { value: 'headless-cms-web-development', text: 'Headless CMS Development' },
        { value: 'erp-development', text: 'ERP Next Development' },
        { value: 'other', text: 'Others' },
    ];
    const MarginBottom = { margin: "0 0 14px 0", fontSize: "1.05rem", lineHeight: "1.8rem" }
    const Margin8 = { margin: "0 10px", color: "#091FF7" }
    return (
        <section id='contact'>
            <Grid container spacing={3} justifyContent="space-between" alignItems="center">
                <Grid item xs={12} sm={12} md={6} lg={5}>
                    <h2 style={{ ...theme.typography.h2 }}>Get In Touch</h2>
                    <p className="para-text" style={{ ...theme.typography.p }}>Looking to bring your online presence to the next level? Get in touch with me today and let's make it happen. Whether you need a new website, an e-commerce store, a landing page, or a revamp of your current site, I have the skills and expertise to deliver.</p>
                    <p className="para-text" style={{ ...theme.typography.p }}>Contact me now to discuss your project and take your business to the next level!</p>
                    <p className="para-text" style={{ ...theme.typography.p, fontWeight: "bold" }}>You can also contact us via:</p>
                    <Grid container alignItems="center" rowSpacing={2}>
                        <Grid item xs={12} container alignItems="center" style={MarginBottom}><MailIcon style={Margin8} /> info@devcraft.site</Grid>
                        <Grid item xs={12} container alignItems="center" style={MarginBottom}><LocalPhoneIcon style={Margin8} /> 7721804979</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={5} style={{ background: "#F5F5F5", padding: "30px", borderRadius: "8px", color: "#091FF7" }}>
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
                        <Button type="submit" variant="contained" color="primary"  style={{ ...theme.button.primary }}  >Submit</Button>
                    </form>
                </Grid>
            </Grid >
        </section>

    )
}
