import React from 'react'
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBanner from '@/components/Common/PageBanner'
import ProjectsTwoColumnWithSidebar from '@/components/Projects/ProjectsTwoColumnWithSidebar'
import ProjectSidebar from '@/components/Projects/ProjectSidebar'
import Footer from '@/components/_App/Footer'
 
const Projects = () => {
    return (
        <>  
            <TopHeaderStyleTwo /> 

            <NavbarStyleOne /> 

            <PageBanner 
                pageTitle="Projects Right Sidebar" 
                homePageUrl="/"
                homePageText="Home"
                activePageText="Projects Right Sidebar"
            />

            <div className="projects-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <ProjectsTwoColumnWithSidebar />
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ProjectSidebar />
                        </div>
                    </div>
                </div>
            </div>
  
            <Footer />
        </>
    )
}

export default Projects;