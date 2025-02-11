import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

// Styled Container with Soft White Background
const StyledContainer = styled(Box)({
  padding: "80px 20px",
  textAlign: "center",
  background: "linear-gradient(to bottom, #FFFFFF, #F8F9FA)", // Light gradient
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  color: "#222",
});

// Background Elements (Enhanced Visibility)
const BackgroundElements = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  pointerEvents: "none",
  zIndex: 0,
  "& img": {
    position: "absolute",
    width: "180px",
    opacity: 0.15, // Increased visibility
    filter: "blur(1px)", // Slight blur for a subtle effect
  },
  "& .motherboard": { top: "5%", left: "10%", width: "250px", opacity: 0.2 },
  "& .ram": { bottom: "10%", right: "15%", width: "220px" },
  "& .fan1": { top: "15%", right: "20%", width: "180px", animation: "rotate 8s linear infinite" },
  "& .fan2": { bottom: "15%", left: "25%", width: "180px", animation: "rotate 8s linear infinite" },
  "@keyframes rotate": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
});

// Heading with Orange Accent
const StyledHeading = styled(Typography)({
  fontSize: "2.8rem",
  fontWeight: "bold",
  color: "#FF6B00",
  fontFamily: "Manrope, sans-serif",
});

// Description Text
const StyledText = styled(Typography)({
  fontSize: "1.2rem",
  color: "#444",
  maxWidth: "650px",
  margin: "20px auto",
  lineHeight: 1.6,
  fontFamily: "Manrope, sans-serif",
});

// Category Card Styling
const StyledCard = styled(Card)({
  background: "#FFF",
  borderRadius: "12px",
  overflow: "hidden",
  border: "1px solid #E0E0E0",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  zIndex: 1,
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  },
});

const categories = [
  { image: "/gaming.png", title: "Gaming PCs", description: "Unparalleled performance for immersive gaming." },
  { image: "/workstation.png", title: "Workstations", description: "Optimized for video editing and 3D rendering." },
  { image: "/budget.jpg", title: "Budget Builds", description: "Affordable and efficient PCs for daily use." },
  { image: "/video_editing.png", title: "Video Editing", description: "Smooth video rendering and editing performance." },
  { image: "/architecture.png", title: "Architecture", description: "High-performance PCs for 3D modeling." },
  { image: "/ai_ml.webp", title: "AI / ML", description: "Optimized for AI and machine learning tasks." },
];

const SensibleBuilds = () => {
  return (
    <StyledContainer>
      {/* Background Elements */}
      <BackgroundElements>
        <img src="/motherboard.png" alt="Motherboard" className="motherboard" />
        <img src="/ram.png" alt="RAM" className="ram" />
        <img src="/fan.png" alt="Fan" className="fan1" />
        <img src="/fan.png" alt="Fan" className="fan2" />
      </BackgroundElements>

      <StyledHeading>We Provide 100% Sensible PC Builds</StyledHeading>
      <StyledText>
        Our builds are optimized for performance, cost-effectiveness, and long-term reliability.
      </StyledText>

      {/* Category Showcase */}
      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 4, position: "relative", zIndex: 1 }}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia component="img" height="200" image={category.image} alt={category.title} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  {category.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", marginTop: 1 }}>
                  {category.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid> 
    </StyledContainer>
    
  );
};

export default SensibleBuilds;
