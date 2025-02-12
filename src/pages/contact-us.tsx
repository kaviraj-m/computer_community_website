import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Typography } from "@mui/material";
import CompanyOverview from "../components/ContactPage";
import PCBuild from "../components/build/PCBuild";

const Contact = () => {
  return (
    <>
      <Header />
      <CompanyOverview/>
      <PCBuild/>
      <Footer />
    </>
  );
};

export default Contact;