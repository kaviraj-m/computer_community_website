import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import '@fontsource/libre-baskerville';
import '@fontsource/manrope';

// Styled button component
const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: '700',
  borderRadius: '30px',
  padding: '16px 40px',
  fontSize: '18px',
  textTransform: 'none',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0px 8px 25px rgba(255, 165, 0, 0.3)',
  '&:hover': {
    transform: 'translateY(-5px)',
    backgroundColor: '#FF8C00',
    color: '#fff',
    boxShadow: '0px 12px 35px rgba(255, 165, 0, 0.5)',
  },
  '&:focus': {
    boxShadow: '0px 5px 15px rgba(255, 165, 0, 0.3)',
  },
}));

const HeroSection = () => {
  const whatsappLink = `https://wa.me/919799769699`;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '100vh', md: '900px' }, // Fixed height for desktop
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Background GIF */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url('/Computer.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />

      {/* Hero Content */}
      <Box
        sx={{
          zIndex: 1,
          position: 'relative',
          textAlign: 'center',
          px: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '100vh', md: '900px' }, // Ensuring same size for desktop resolutions
          color: '#fff',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: '700',
            fontSize: { xs: '3rem', md: '4.5rem' },
            color: 'gold',
            mb: 3,
            lineHeight: 1.2,
            fontFamily: 'Libre Baskerville, serif',
            textShadow: '0px 5px 15px rgba(255, 215, 0, 0.6)',
          }}
        >
          Engineered for Peak Performance
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: '500',
            fontSize: { xs: '1.5rem', md: '2rem' },
            color: '#f1f1f1',
            mb: 4,
            fontFamily: 'Manrope, sans-serif',
            textShadow: '0px 2px 8px rgba(255, 255, 255, 0.3)',
          }}
        >
          Build Your Dream PC, Crafted for Excellence.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            color: '#bdbdbd',
            mb: 6,
            lineHeight: 1.6,
            fontFamily: 'Manrope, sans-serif',
            textShadow: '0px 2px 6px rgba(255, 255, 255, 0.2)',
            maxWidth: '800px',
          }}
        >
          Tailored solutions for gamers, content creators, and professionals. Experience unmatched performance and reliability.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            justifyContent: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <StyledButton
            variant="contained"
            sx={{ backgroundColor: '#FF8C00', color: '#fff' }}
            onClick={() => window.location.href = '/build'}
          >
            Talk to an Expert
          </StyledButton>
          <StyledButton
            variant="outlined"
            sx={{
              borderColor: 'gold',
              color: 'gold',
              '&:hover': { backgroundColor: 'gold', color: '#000' },
            }}
            onClick={() => window.location.href = '/prebuilt'}
          >
            Explore Ready-to-Use PCs
          </StyledButton>
        </Box>

        {/* WhatsApp Button */}
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#25D366',
              padding: '12px 25px',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#128C7E' },
            }}
            href={whatsappLink}
            target="_blank"
            startIcon={<WhatsAppIcon />}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
