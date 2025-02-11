import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BuildIcon from "@mui/icons-material/Build";
import StarIcon from "@mui/icons-material/Star";
import SecurityIcon from "@mui/icons-material/Security";
import InsightsIcon from "@mui/icons-material/Insights";

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: "25px",
  textAlign: "center",
  borderRadius: "18px",
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(5px)",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.5)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 20px rgba(255, 255, 255, 0.8)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

const features = [
  {
    title: "Price Match Guarantee",
    description: "We match any competitor's price to ensure you get the best deal.",
    icon: <VerifiedIcon sx={{ fontSize: { xs: 45, sm: 55 }, color: "#FFEB3B", textShadow: "0px 0px 12px #FFEB3B" }} />, 
  },
  {
    title: "Aftersales Support",
    description: "24/7 customer support to help you with any issues.",
    icon: <SupportAgentIcon sx={{ fontSize: { xs: 45, sm: 55 }, color: "#00E5FF", textShadow: "0px 0px 12px #00E5FF" }} />,
  },
  {
    title: "Customized Solutions",
    description: "Personalized builds for Gaming, AI, and Productivity.",
    icon: <BuildIcon sx={{ fontSize: { xs: 45, sm: 55 }, color: "#FF4081", textShadow: "0px 0px 12px #FF4081" }} />,
  },
  {
    title: "Hardcore Specialization",
    description: "1500+ PC builds showcasing our deep expertise.",
    icon: <StarIcon sx={{ fontSize: { xs: 45, sm: 55 }, color: "#FFD700", textShadow: "0px 0px 12px #FFD700" }} />,
  },
  {
    title: "Warranty & Support",
    description: "Extended warranty and dedicated support for peace of mind.",
    icon: <SecurityIcon sx={{ fontSize: { xs: 45, sm: 55 }, color: "#8E24AA", textShadow: "0px 0px 12px #8E24AA" }} />,
  },
  {
    title: "Performance Reports",
    description: "Detailed benchmark reports to ensure top performance.",
    icon: <InsightsIcon sx={{ fontSize: { xs: 45, sm: 55 }, color: "#76FF03", textShadow: "0px 0px 12px #76FF03" }} />,
  },
];

const WhyChoose = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, sm: 14 },
        backgroundImage: "url('/background_image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#FFF",
          mb: { xs: 5, sm: 7 },
          fontFamily: "Poppins, sans-serif",
          textShadow: "0px 4px 12px rgba(255, 255, 255, 0.4)",
          position: "relative",
          zIndex: 2,
          fontSize: { xs: "2rem", sm: "2.8rem" },
        }}
      >
        Why Choose <span style={{ color: "#FFD700" }}>The Computer Community</span>?
      </Typography>

      {/* Centering Grid */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: "1300px",
            width: "100%",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: "center" }}>
              <FeatureCard>
                {feature.icon}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mt: 2,
                    color: "#FFD700",
                    fontFamily: "Poppins, sans-serif",
                    textShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)",
                    fontSize: { xs: "1.1rem", sm: "1.4rem" },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1.5,
                    color: "#FFA500",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  }}
                >
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        component="img"
        src="/wave.svg"
        alt="Wave"
        sx={{
          width: "100%",
          position: "absolute",
          bottom: { xs: -40, sm: -80 },
          left: 0,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default WhyChoose;
