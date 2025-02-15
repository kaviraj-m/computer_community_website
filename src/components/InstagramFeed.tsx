import { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const InstagramFeed = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => setScriptLoaded(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box sx={{ position: "relative", backgroundColor: "#000", pb: 12 }}>
      <Container maxWidth="lg">
        {/* Google Reviews Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#FFD700",
            textTransform: "uppercase",
            mb: 4,
            letterSpacing: "2px",
          }}
        >
          What Our Customers Say
        </Typography>

        <Box
          sx={{
            width: "100%",
            minHeight: "400px",
            backgroundColor: "#101010",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            position: "relative",
            mb: 4,
          }}
        >
          {scriptLoaded ? (
            <div
              className="elfsight-app-54140cc8-4fac-4983-8c60-56a50f98b354"
              data-elfsight-app-lazy
              style={{ width: "100%", height: "100%" }}
            ></div>
          ) : (
            <Box textAlign="center" p={4}>
              <Typography
                variant="h6"
                sx={{
                  color: "#FFD700",
                  mb: 2,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Google Reviews Unavailable
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff", opacity: 0.8 }}>
                Please check your internet connection or try again later.
              </Typography>
            </Box>
          )}
        </Box>

        {/* Instagram Feed Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#FFD700",
            textTransform: "uppercase",
            mb: 4,
            letterSpacing: "2px",
          }}
        >
          Follow Us on Instagram
        </Typography>

        <Box
          sx={{
            width: "100%",
            minHeight: "500px",
            backgroundColor: "#101010",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            position: "relative",
            mb: -2, // Helps blend with the SVG
          }}
        >
          {scriptLoaded ? (
            <div
              className="elfsight-app-1e04dfc5-9688-4ad5-8d71-646d580eb86c"
              data-elfsight-app-lazy
              style={{ width: "100%", height: "100%" }}
            ></div>
          ) : (
            <Box textAlign="center" p={4}>
              <Typography
                variant="h6"
                sx={{
                  color: "#FFD700",
                  mb: 2,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Instagram Feed Unavailable
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff", opacity: 0.8 }}>
                Please check your internet connection or try again later.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>

      {/* Bottom SVG Background */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: { xs: "120px", md: "180px" }, // Increased height for better visibility
          backgroundImage: "url('/white2.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          zIndex: 1, // Ensures visibility above background
        }}
      />
    </Box>
  );
};

export default InstagramFeed;
