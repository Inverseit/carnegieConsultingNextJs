import React from 'react';
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner';
import ContactInfo from '@/components/Contact/ContactInfo';
import ContactForm from '@/components/Contact/ContactForm';
import Footer from '@/components/_App/Footer';
 
const Contact = () => {
    return (
        <>  
            <TopHeaderStyleTwo /> 

            <NavbarStyleOne /> 

            <PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact Us"
            />

            <ContactInfo />

            <ContactForm />
        
            <Footer />
        </>
    )
}

export default Contact;