import React from 'react';
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import MainBanner from '@/components/HomeDemo2/MainBanner';
import ServicesCard from '@/components/HomeDemo2/ServicesCard';
import AboutContent from '@/components/HomeDemo2/AboutContent';
import FunfactsTwo from '@/components/Common/FunfactsTwo';
import CompletedProjects from '@/components/Common/CompletedProjects';
import TestimonialStyleTwo from '@/components/Common/TestimonialStyleTwo';
import SeeWhatWeDo from '@/components/Common/SeeWhatWeDo';
import FreeQuoteFormStyle2 from '@/components/FreeQuoteForm/FreeQuoteFormStyle2';
import CallBackRequest from '@/components/HomeDemo2/CallBackRequest';
import PartnerSlider from '@/components/Common/PartnerSlider';
import BlogPost from '@/components/Common/BlogPost';
import Footer from '@/components/_App/Footer';
 
const IndexPage2 = () => {
    return (
        <>  
            <TopHeaderStyleTwo /> 

            <NavbarStyleOne /> 

            <MainBanner />

            <ServicesCard />
            
            <AboutContent />

            <FunfactsTwo />

            <CompletedProjects />

            <TestimonialStyleTwo />

            <SeeWhatWeDo />

            <FreeQuoteFormStyle2 />

            <CallBackRequest />

            <div className="ptb-100 bg-fafafa">
                <PartnerSlider />
            </div>

            <BlogPost />
  
            <Footer />
        </>
    )
}

export default IndexPage2;