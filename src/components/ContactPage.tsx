'use client';

import React from 'react';
import { Box, Typography, Divider, Grid, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactPage = () => {
  const whatsAppLink = `https://wa.me/919799769699`;
  
  return (
    <Box sx={{ padding: '60px 20px', maxWidth: '1000px', margin: 'auto' }}>
      {/* Contact Information Section */}
      <Box
        sx={{
          padding: '40px',
          backgroundColor: '#000',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(255, 215, 0, 0.3)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '30px', color: '#FFD700' }}>
          Contact Information
        </Typography>
        <Divider sx={{ margin: '0 auto 30px', width: '80px', height: '3px', backgroundColor: '#FFD700' }} />

        <Grid container spacing={3}>
          {[ 
            { icon: <LocationOnIcon sx={{ color: '#E91E63', fontSize: '2.5rem' }} />, title: 'Studio/Store Address:', details: `CC Electronics (OPC) Private Limited\nNo.3 Lock Street, Kilpauk\nChennai - 600010` },
            { icon: <PhoneIcon sx={{ color: '#4CAF50', fontSize: '2.5rem' }} />, title: 'Phone Numbers:', details: `📞 +91 9444814547\n📞 +91 9799769699` },
            { icon: <EmailIcon sx={{ color: '#FF9800', fontSize: '2.5rem' }} />, title: 'Email:', details: 'thecomputercommunity@gmail.com' },
            { icon: <AccessTimeIcon sx={{ color: '#2196F3', fontSize: '2.5rem' }} />, title: 'Working Hours:', details: 'Monday – Friday, 9:00 AM – 6:00 PM' },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#222', borderRadius: '12px', padding: '20px' }}>
                <Box sx={{ marginRight: '16px' }}>{item.icon}</Box>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#FFD700', marginBottom: '4px' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff', whiteSpace: 'pre-line' }}>{item.details}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* WhatsApp Section */}
      <Box sx={{ marginTop: '40px', padding: '40px', backgroundColor: '#000', borderRadius: '12px', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFD700', marginBottom: '20px' }}>
          Chat with Us on WhatsApp
        </Typography>
        <Typography variant="body1" sx={{ color: '#fff', marginBottom: '30px' }}>
          Got a question? Need help with your PC build? Click the button below to start a conversation with us directly on WhatsApp.
        </Typography>
        <Button variant="contained" href={whatsAppLink} target="_blank" startIcon={<WhatsAppIcon />} sx={{ backgroundColor: '#25D366', color: '#fff' }}>
          Chat Now
        </Button>
      </Box>
      
      {/* Map Section */}
      <Box sx={{ marginTop: '40px', padding: '40px', backgroundColor: '#000', borderRadius: '12px', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFD700', marginBottom: '20px' }}>
          Visit Our Studio
        </Typography>
        <Typography variant="body1" sx={{ color: '#ddd', marginBottom: '30px' }}>
          Find us at the heart of Kilpauk, Chennai. We’re always excited to welcome you!
        </Typography>
        <Box sx={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src="https://maps.google.com/maps?width=626&height=558&hl=en&q=3, Lock St, Sanyasipuram, Kilpauk, Chennai, Tamil Nadu 600010&output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </Box>
        <Button
          variant="contained"
          sx={{ marginTop: '20px', backgroundColor: '#FFD700', color: '#000' }}
          onClick={() => window.open('https://maps.google.com/maps?daddr=3, Lock St, Sanyasipuram, Kilpauk, Chennai, Tamil Nadu 600010', '_blank')}
        >
          Get Directions
        </Button>
      </Box>
    </Box>
  );
};

export default ContactPage;
