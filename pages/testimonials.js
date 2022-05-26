import React from 'react'
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBanner from '@/components/Common/PageBanner'
import TestimonialStyleOne from '@/components/Common/TestimonialStyleOne'
import PartnerSlider from '@/components/Common/PartnerSlider'
import TestimonialStyleThree from '@/components/Common/TestimonialStyleThree'
import Footer from '@/components/_App/Footer'
 
const Testimonials = () => {
    return (
        <>  
            <TopHeaderStyleTwo /> 

            <NavbarStyleOne /> 

            <PageBanner 
                pageTitle="Testimonials" 
                homePageUrl="/"
                homePageText="Home"
                activePageText="Testimonials"
            />

            <div className="ptb-100">
                <TestimonialStyleOne />
            </div>

            <div className="ptb-100 bg-f3f2f2">
                <PartnerSlider />
            </div>

            <TestimonialStyleThree />
  
            <Footer />
        </>
    )
}

export default Testimonials;