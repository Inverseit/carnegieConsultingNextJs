import React from "react";
import Navbar from "@/components/HomeDemo2/Navbar";
import MainBanner from "@/components/Own/MainBanner"

import ForStudents from "@/components/HomeDemo2/ForStudents";
import ForRecs from "@/components/HomeDemo2/ForRecs";
import ForPartners from "@/components/HomeDemo2/ForPartners";
import Events from "@/components/HomeDemo2/StudentProjects";

import Footer from "@/components/HomeDemo2/Footer";
import ServicesCard from "@/components/HomeDemo2/ServicesCard";
import OurTeam from "@/components/HomeDemo2/OurTeam";
import ContactUsForm from "@/components/HomeDemo2/ContactForm";
import Vision from "@/components/Own/Vision";
import Photos from "@/components/Own/Photos";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Vision/>
      <Photos/>
      <Footer />
    </>
    // <ComingSoon/>
  );
};

export default IndexPage;
