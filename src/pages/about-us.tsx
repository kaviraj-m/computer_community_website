import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4">About Us</Typography>
        <Typography>Learn more about The Computer Community.</Typography>
      </Container>
      <Footer />
    </>
  );
};

export default About;