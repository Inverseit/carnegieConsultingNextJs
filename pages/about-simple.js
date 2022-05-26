import React from 'react';
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner';
import AboutContentOne from '@/components/About/AboutContentOne';
import FunfactsTwo from '@/components/Common/FunfactsTwo';
import TeamMember from '@/components/Common/TeamMember';
import AboutContentTwo from '@/components/About/AboutContentTwo';
import TestimonialStyleOne from '@/components/Common/TestimonialStyleOne';
import FreeQuoteFormStyle1 from '@/components/FreeQuoteForm/FreeQuoteFormStyle1';
import Footer from '@/components/_App/Footer';
 
const AboutSimple = () => {
    return (
        <>  
            <TopHeaderStyleTwo /> 

            <NavbarStyleOne /> 

            <PageBanner 
                pageTitle="About Us" 
                homePageUrl="/"
                homePageText="Home"
                activePageText="About Us"
            />

            <AboutContentOne />

            <FunfactsTwo />

            <TeamMember />
            
            <AboutContentTwo />

            <TestimonialStyleOne />

            <FreeQuoteFormStyle1 />
  
            <Footer />
        </>
    )
}

export default AboutSimple;