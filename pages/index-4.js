import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import MainBanner from '@/components/HomeDemo1/MainBanner'
import AboutContent from '@/components/HomeDemo1/AboutContent'
import ServicesCard from '@/components/HomeDemo1/ServicesCard'
import TeamMember from '@/components/Common/TeamMember'
import FreeQuoteFormStyle1 from '@/components/FreeQuoteForm/FreeQuoteFormStyle1'
import Funfacts from '@/components/Common/Funfacts'
import TestimonialStyleOne from '@/components/Common/TestimonialStyleOne'
import PartnerSlider from '@/components/Common/PartnerSlider'
import WhyChooseUs from '@/components/HomeDemo1/WhyChooseUs'
import BlogPost from '@/components/Common/BlogPost'
import Footer from '@/components/_App/Footer';
 
const IndexPage = () => {
    return (
        <>
            {/* Top Header imported in the Navbar component */}
            <NavbarStyleTwo /> 

            <MainBanner />

            <AboutContent />

            <ServicesCard />

            <TeamMember />

            <FreeQuoteFormStyle1 />

            <Funfacts />

            <TestimonialStyleOne />

            <div className="pt-100">
                <PartnerSlider />
            </div>

            <WhyChooseUs />

            <BlogPost />
  
            <Footer />
        </>
    )
}

export default IndexPage;