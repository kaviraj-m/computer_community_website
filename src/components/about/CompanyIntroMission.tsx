'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const CompanyIntroMission: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#0A0A0A', color: '#FFF', py: 10, px: { xs: 3, sm: 6 } }}>
      {/* Company Introduction */}
      <Box
        sx={{
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '50px 20px',
          borderRadius: '12px',
          background: 'linear-gradient(145deg, #111, #000)',
          boxShadow: '0 10px 30px rgba(255, 215, 0, 0.2)',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, color: '#FFD700', mb: 3 }}>
          Who We Are
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#DDD', lineHeight: 1.8 }}>
          We specialize in high-performance custom PC builds tailored for gaming, VFX, AI, and productivity. With over
          1500+ successful builds, we offer optimized, durable, and efficient systems backed by our Price Match Guarantee
          and lifetime service support.
        </Typography>
      </Box>

      {/* Our Mission */}
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '50px 20px',
          borderRadius: '12px',
          background: 'linear-gradient(145deg, #111, #000)',
          boxShadow: '0 10px 30px rgba(255, 215, 0, 2)',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, color: '#FFD700', mb: 3 }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#DDD', lineHeight: 1.8, mb: 4 }}>
          Our goal is to create cutting-edge PC systems with unbeatable performance, reliability, and affordability. We
          empower gamers, creators, and professionals with the best custom solutions tailored to their needs.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {[
            {
              title: 'Unbeatable Performance',
              description:
                'Our systems deliver top-tier performance at affordable prices, ensuring you get the best value.',
            },
            {
              title: 'Reliable Support',
              description:
                'We provide lifetime customer support and assistance, ensuring a seamless experience from start to finish.',
            },
            {
              title: 'Tailored Solutions',
              description:
                'Our custom-built PCs are designed for gamers, creators, and professionals with unique requirements.',
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  backgroundColor: '#1A1A1A',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                  transition: '0.3s',
                  '&:hover': { backgroundColor: '#333' },
                }}
              >
                <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#FFF', fontSize: '1rem', lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CompanyIntroMission;
