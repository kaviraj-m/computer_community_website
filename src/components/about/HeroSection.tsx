import { Box, Button, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
  sx={{
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #000000 40%, #b8860b 160%)",
    color: "white",
    px: 0, // **Zero padding on outer Box**
    py: 0,
    overflow: "hidden",
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "1800px",
      width: "100%",
      gap: { xs: 3, md: 8 },
      px: { xs: 3, md: 5, lg: 8 }, // **Inside padding for better spacing**
      py: { xs: 4, md: 6 },
    }}
  >
    {/* Image Section */}
    <Box
      component="img"
      src="/ceo.png"
      alt="CEO"
      sx={{
        flex: 1,
        width: { xs: "100%", md: "60%", lg: "65%" },
        height: { xs: "auto", md: "500px", lg: "650px" },
        objectFit: "cover",
        borderRadius: "12px",
        boxShadow: { md: "0px 12px 50px rgba(255, 215, 0, 0.3)" },
        mb: { xs: 3, md: 0 },
      }}
    />

    {/* Text Content */}
    <Box
      sx={{
        flex: 1.2,
        textAlign: { xs: "center", md: "left" },
        maxWidth: "700px",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          color: "#FFD700",
          fontSize: { xs: "2.5rem", md: "4rem", lg: "4.5rem" },
          lineHeight: 1.2,
        }}
      >
        Crafting Your Perfect PC Experience
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mt: 2,
          color: "rgba(255,255,255,0.8)",
          fontSize: { xs: "1rem", md: "1.5rem", lg: "1.8rem" },
        }}
      >
        Expertly Designed Systems for Gaming, AI, Architecture, and Productivity
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#FFD700",
          color: "black",
          fontWeight: "bold",
          fontSize: { xs: "1rem", md: "1.2rem", lg: "1.4rem" },
          px: 5,
          py: 2,
          borderRadius: "10px",
          transition: "all 0.3s",
          "&:hover": { backgroundColor: "#e6c200" },
        }}
      >
        Start Building Now
      </Button>
    </Box>
  </Box>
</Box>

  );
};

export default HeroSection;
