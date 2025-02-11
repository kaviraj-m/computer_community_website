import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4">Contact Us</Typography>
        <Typography>Reach out to The Computer Community.</Typography>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;