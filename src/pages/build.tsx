"use client";

import { Box, Container, Typography } from "@mui/material";
import PCBuild from "../components/build/PCBuild";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BuildPage = () => {
  return (
   <> <Header />
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#1e1e1e",
          color: "#fff",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          marginTop: "30px",
        }}
      >  
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#FFD700", marginBottom: "20px" }}>
          Customize Your PC Build
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "30px" }}>
          Select components step by step and create your dream PC.
        </Typography>

        {/* PC Build Component */}
        <PCBuild />
        
      </Box>
    </Container>
    <Footer />
    </>
  );
};

export default BuildPage;
