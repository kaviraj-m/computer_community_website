import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Typography } from "@mui/material";
import HeroSection from "../components/about/HeroSection";
import CompanyIntroMission from "../components/about/CompanyIntroMission";
import CompanyOverview from "../components/about/CompanyOverview";

const About = () => {
  return (
    <>
      <Header />
      
        <HeroSection/>
        <CompanyIntroMission/>
        <CompanyOverview/>
      <Footer />
    </>
  );
};

export default About;