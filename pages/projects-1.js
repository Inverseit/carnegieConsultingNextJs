import React from 'react'
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBanner from '@/components/Common/PageBanner'
import ProjectsTwoColumn from '@/components/Projects/ProjectsTwoColumn'
import Footer from '@/components/_App/Footer'
 
const Projects = () => {
    return (
        <>  
            <TopHeaderStyleTwo /> 

            <NavbarStyleOne /> 

            <PageBanner 
                pageTitle="Projects Two Column" 
                homePageUrl="/"
                homePageText="Home"
                activePageText="Projects Two Column"
            />

            <ProjectsTwoColumn />
  
            <Footer />
        </>
    )
}

export default Projects;