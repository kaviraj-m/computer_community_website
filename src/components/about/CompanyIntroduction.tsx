"use client";

import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const CompanyIntroduction: React.FC = () => {
  return (
    <Box
      sx={{
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 6, sm: 8, md: 12 },
        background: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(25,25,25,0.95))",
        color: "#fff",
        textAlign: "center",
        borderRadius: "12px",
        boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        maxWidth: "1200px",
        mx: "auto",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated Overlay Effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255, 215, 0, 0.05)",
          zIndex: 0,
        }}
      />

      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#FFD700",
          mb: 4,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          letterSpacing: "1px",
          textTransform: "uppercase",
          position: "relative",
          zIndex: 2,
          textShadow: "0px 0px 15px rgba(255, 215, 0, 0.4)",
        }}
      >
        Who We Are
      </Typography>

      {/* Content */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "300",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
              color: "#ddd",
              lineHeight: 1.8,
              textAlign: "justify",
              px: { xs: 2, sm: 4, md: 6 },
              position: "relative",
              zIndex: 2,
            }}
          >
            We specialize in providing high-performance custom PC builds tailored for gaming, VFX, AI, architecture, and productivity. With over{" "}
            <Typography component="span" sx={{ fontWeight: "bold", color: "#FFD700" }}>
              1500+ successful builds
            </Typography>
            , we take pride in offering **affordable, customized solutions** backed by our **Price Match Guarantee** and **lifetime service support**.
            Our expert team ensures that each build is optimized for **performance, durability, and efficiency**, making sure you get the **best PC** to match your needs.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyIntroduction;
