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
          Visit Our Studio
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#ddd",
            mb: 4,
            lineHeight: 1.7,
            fontSize: "1.1rem",
          }}
        >
          Find us at the heart of Kilpauk, Chennai. We’re always excited to
          welcome you! Plan your visit and experience our creative space.
        </Typography>

        {/* Google Map */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "300px", md: "400px" },
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
            mb: 4,
          }}
        >
          <iframe
            src="https://maps.google.com/maps?width=626&amp;height=558&amp;hl=en&amp;q=3, Lock St, Sanyasipuram, Kilpauk, Chennai, Tamil Nadu 600010&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </Box>

        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "8px",
              backgroundColor: "#FFD700",
              color: "#000",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#e5c100",
              },
            }}
            onClick={() =>
              window.open(
                "https://maps.google.com/maps?daddr=3, Lock St, Sanyasipuram, Kilpauk, Chennai, Tamil Nadu 600010",
                "_blank"
              )
            }
          >
            Get Directions
          </Button>
        </Box>

        {/* Instagram Feed */}
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
