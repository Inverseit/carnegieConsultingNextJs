import React from 'react';
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner'; 
import CompanyHistoryContent from '@/components/CompanyHistory/CompanyHistoryContent'; 
import Footer from '@/components/_App/Footer';
 
const CompanyHistory = () => {
    return (
        <>  
            <TopHeaderStyleTwo /> 

            <NavbarStyleOne /> 

            <PageBanner 
                pageTitle="Company History" 
                homePageUrl="/"
                homePageText="Home"
                activePageText="Company History"
            />

            <CompanyHistoryContent />
  
            <Footer />
        </>
    )
}

export default CompanyHistory;