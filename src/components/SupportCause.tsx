"use client"; 

import React from "react";
import Link from "@mui/material/Link";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

// Styled Container
const StyledContainer = styled(Box)({
  padding: "80px 20px",
  textAlign: "center",
  background: "linear-gradient(to bottom, #FFFFFF, #F8F9FA)", // Light gradient
  borderRadius: "12px",
  color: "#222",
});

// Heading
const StyledHeading = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#FF6B00",
  fontFamily: "Manrope, sans-serif",
  marginBottom: "20px",
});

// Description Text
const StyledText = styled(Typography)({
  fontSize: "1.2rem",
  color: "#444",
  maxWidth: "650px",
  margin: "0 auto 40px",
  lineHeight: 1.6,
  fontFamily: "Manrope, sans-serif",
});

// Styled Card
const StyledCard = styled(Card)({
  background: "#FFF",
  borderRadius: "12px",
  overflow: "hidden",
  border: "1px solid #E0E0E0",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  zIndex: 1,
  textAlign: "center",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  },
});

// Styled Link Button
const StyledLink = styled(Link)({
  display: "inline-block",
  marginTop: "15px",
  backgroundColor: "#FF6B00",
  color: "#FFF",
  fontWeight: "bold",
  padding: "8px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#E65A00",
  },
});

// Causes Data
const causes = [
  {
    logo: "/bluecross_logo.png",
    title: "Blue Cross of India",
    description: "Dedicated to rescuing and caring for animals, providing shelter, medical care, and support for animals in need.",
    link: "https://bluecrossofindia.org/",
  },
  {
    logo: "/sankalptaru_logo.webp",
    title: "SankalpTaru",
    description: "Focused on reforestation and combating climate change by planting trees and creating a greener planet.",
    link: "https://www.sankalptaru.org/",
  },
];

// Component
const SupportCause = () => {
  return (
    <StyledContainer>
      <StyledHeading>Support a Cause and Make a Lasting Difference</StyledHeading>
      <StyledText>
        A portion of our revenue is dedicated to making a positive impact. We proudly support Blue Cross of India and SankalpTaru for animal welfare and environmental sustainability.
      </StyledText>

      {/* Cause Cards */}
      <Grid container spacing={4} justifyContent="center">
        {causes.map((cause, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia
                component="img"
                height="150"
                image={cause.logo}
                alt={cause.title}
                sx={{ padding: "20px", objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  {cause.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", marginTop: 1 }}>
                  {cause.description}
                </Typography>
                <StyledLink href={cause.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                </StyledLink>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default SupportCause;
