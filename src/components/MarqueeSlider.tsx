"use client"; // Next.js App Router (remove if using Pages Router)

import React, { useRef } from "react";
import { Box, Typography, Button, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";

const companies = [
  { name: "Netflix", logo: "/logos/netflix.png" },
  { name: "ISRO", logo: "/logos/isro.png" },
  { name: "Microsoft", logo: "/logos/microsoft.png" },
  { name: "Cyient", logo: "/logos/cyient.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
];

const MarqueeSlider = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Top Section with White SVG Background */}
      <Box
        sx={{
          background: "#000",
          minHeight: { xs: "30vh", md: "35vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: "5%",
          pb: 3,
          position: "relative",
          backgroundImage: "url('/white.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "#FFD700",
            textTransform: "uppercase",
            fontSize: { xs: "1.6rem", md: "2.2rem" },
            letterSpacing: "2px",
          }}
        >
          Trusted by Leading Companies
        </Typography>
        <Typography
          variant="subtitle1"
          color="#FFD700"
          sx={{
            mt: 1,
            opacity: 0.9,
            maxWidth: "700px",
            fontSize: { xs: "0.85rem", md: "1rem" },
          }}
        >
          We deliver high-quality solutions for the world’s top organizations.
        </Typography>
      </Box>

      {/* Inline SVG Wave Divider (Black to Gold) */}
      <Box sx={{ width: "100%", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFD700" d="M0,100 L1440,100 L1440,0 Q720,50 0,0 Z" />
        </svg>
      </Box>

      {/* Middle Gold Section with Marquee */}
      <Box sx={{ background: "#FFD700", py: { xs: 3, md: 5 }, overflow: "hidden" }}>
        <Container maxWidth="lg">
          <motion.div
            ref={marqueeRef}
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            style={{ display: "flex", gap: "2rem", whiteSpace: "nowrap" }}
          >
            {companies.concat(companies).map((company, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  borderRadius: "8px",
                  background: "#000",
                  height: "70px",
                  minWidth: "140px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{ maxHeight: "45px", maxWidth: "100%" }}
                />
              </Paper>
            ))}
          </motion.div>
        </Container>
      </Box>

      {/* Inline SVG Wave Divider (Gold to Black) */}
      <Box sx={{ width: "100%", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000" d="M0,0 L1440,0 L1440,100 Q720,50 0,100 Z" />
        </svg>
      </Box>

      {/* Bottom Black CTA Section */}
      <Box
        sx={{
          background: "#000",
          py: { xs: 4, md: 6 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          color="#FFD700"
          fontWeight="bold"
          sx={{ fontSize: { xs: "1.3rem", md: "1.8rem" }, mb: 2 }}
        >
          Let's Build the Future Together!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "8px",
            padding: "10px 20px",
            boxShadow: "0px 4px 12px rgba(255, 215, 0, 0.3)",
            "&:hover": { backgroundColor: "#FFC107" },
          }}
        >
          TALK TO AN EXPERT
        </Button>
      </Box>
    </Box>
  );
};

export default MarqueeSlider;
