import { Box, Typography, Grid, Link, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
        padding: "30px 10px",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ maxWidth: "1200px", margin: "auto" }}
      >
        {/* Quick Links */}
        <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          {["Home", "About Us", "Admissions", "Gallery", "Contact Us", "FAQ"].map((name, index) => (
            <Box key={index}>
              <Link
                href={`/${name.toLowerCase().replace(/ /g, "-")}`}
                color="inherit"
                underline="hover"
                sx={{
                  display: "block",
                  fontSize: "1rem",
                  transition: "color 0.3s",
                  "&:hover": { color: "#FFD700" },
                }}
              >
                {name}
              </Link>
            </Box>
          ))}
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
            No.6, Seshyaa Road, Rajagopalapuram, Pudukkottai - 622003
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Phone:</strong> <Link href="tel:+918300192051" color="inherit" underline="hover">+91 83001 92051</Link>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Email:</strong> <Link href="mailto:info@londonlookschool.com" color="inherit" underline="hover">info@londonlookschool.com</Link>
          </Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mt: 1 }}>
            {[{ icon: <Facebook />, link: "#" }, { icon: <Twitter />, link: "#" }, { icon: <Instagram />, link: "#" }, { icon: <YouTube />, link: "#" }].map((social, index) => (
              <IconButton
                key={index}
                href={social.link}
                color="inherit"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                  transition: "0.3s",
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", my: 3 }} />

      <Typography variant="body2" sx={{ fontSize: "0.9rem", opacity: 0.8 }}>
        © {new Date().getFullYear()} London Look School. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
