import React from 'react';
import NavbarStyleThree from '@/components/_App/NavbarStyleThree';
import MainBanner from '@/components/HomeDemo3/MainBanner';
import PartnerSliderStyleTwo from '@/components/Common/PartnerSliderStyleTwo';
import AboutContent from '@/components/HomeDemo3/AboutContent';
import ServicesSlider from '@/components/HomeDemo3/ServicesSlider';
import CompletedProjects from '@/components/Common/CompletedProjects';
import FreeQuoteFormStyle3 from '@/components/FreeQuoteForm/FreeQuoteFormStyle3';
import SeeWhatWeDoTwo from '@/components/Common/SeeWhatWeDoTwo';
import TeamMember from '@/components/Common/TeamMember';
import ReasonOfChoice from '@/components/Common/ReasonOfChoice';
import CallBackRequest from '@/components/HomeDemo3/CallBackRequest';
import TestimonialStyleThree from '@/components/Common/TestimonialStyleThree';
import BlogPostStyleTwo from '@/components/Common/BlogPostStyleTwo';
import Footer from '@/components/_App/Footer';
 
const IndexPage3 = () => {
    return (
        <>  
            <NavbarStyleThree /> 

            <MainBanner />

            <PartnerSliderStyleTwo />

            <AboutContent />

            <ServicesSlider />

            <CompletedProjects />

            <FreeQuoteFormStyle3 />

            <div className="ptb-100">
                <SeeWhatWeDoTwo />
            </div>

            <TeamMember />

            <ReasonOfChoice />

            <CallBackRequest />

            <TestimonialStyleThree />

            <BlogPostStyleTwo />
  
            <Footer />
        </>
    )
}

export default IndexPage3;