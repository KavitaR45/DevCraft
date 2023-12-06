import ContactSection from '@/components/contact';
import Layout from '@/components/Layout';
import SEO from '@/components/seo';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default function Contact() {

    return (
        <>
            <SEO title='Contact Us - DevCraft Freelance Web Developer' description='Looking for a freelance website developer? DevCraft offers professional web development services to businesses of all sizes.' canonicalUrl={`${process.env.NEXT_PUBLIC_APP_URL}/contact/`} />
            <Layout>
                <LazyLoadComponent>
                    <ContactSection />
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1811455939587!2d72.84514652395913!3d19.361307592956237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aeff1d8beecd%3A0x4243e4de1324dcc8!2sMITTAL%20ENCLAVE%2C%20St%20Marys%20Rd%2C%20Residential%20Colony%2C%20Naigaon%20East%2C%20Maharashtra%20401208!5e0!3m2!1sen!2sin!4v1701847638213!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </LazyLoadComponent>
            </Layout>
        </>
    )
}

