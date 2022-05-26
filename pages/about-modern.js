import React from 'react';
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner';
import AboutContentThree from '@/components/About/AboutContentThree';
import SeeWhatWeDoTwo from '@/components/Common/SeeWhatWeDoTwo';
import Funfacts from '@/components/Common/Funfacts';
import FreeQuoteFormStyle3 from '@/components/FreeQuoteForm/FreeQuoteFormStyle3';
import TeamMember from '@/components/Common/TeamMember';
import TestimonialStyleThree from '@/components/Common/TestimonialStyleThree';
import Footer from '@/components/_App/Footer';
 
const AboutModern = () => {
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

            <AboutContentThree />

            <div className="ptb-100 bg-fbf9f7">
                <SeeWhatWeDoTwo />
            </div>

            <div className="pt-100">
                <Funfacts />
            </div>

            <div className="pb-100">
                <FreeQuoteFormStyle3 />
            </div>
 
            <TeamMember />
             
            <TestimonialStyleThree />
  
            <Footer />
        </>
    )
}

export default AboutModern;