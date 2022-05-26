import React from 'react'
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBanner from '@/components/Common/PageBanner'
import ProjectsThreeColumn from '@/components/Projects/ProjectsThreeColumn'
import Footer from '@/components/_App/Footer'
 
const Projects = () => {
    return (
        <>  
            <TopHeaderStyleTwo /> 

            <NavbarStyleOne /> 

            <PageBanner 
                pageTitle="Projects Three Column" 
                homePageUrl="/"
                homePageText="Home"
                activePageText="Projects Three Column"
            />

            <ProjectsThreeColumn />
  
            <Footer />
        </>
    )
}

export default Projects;