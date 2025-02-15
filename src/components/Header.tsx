'use client';

import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ backgroundColor: 'white' }}> {/* White Background Applied */}
      {/* Top Bar with Contact Info */}
      <Box sx={{ backgroundColor: '#111', color: 'gold', padding: '10px 0', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
          <PhoneIcon sx={{ fontSize: '18px' }} /> 94448 14547 | The Computer Community
        </Typography>
      </Box>

      {/* Main Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#000  ', padding: '10px 20px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Left Section (Logo) */}
          <Link href="/" passHref legacyBehavior>
            <Box sx={{ width: { xs: '100px', md: '140px' }, height: 'auto', display: 'flex', alignItems: 'center' }}>
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={140} 
                height={70} 
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }} 
                priority 
              />
            </Box>
          </Link>

          {/* Center Section ("Talk to Expert" for Mobile) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'center' }}>
            <Button
              sx={{
                backgroundColor: 'gold',
                color: 'black',
                fontWeight: 'bold',
                padding: '8px 16px',
                fontSize: '12px',
                borderRadius: '6px',
                textTransform: 'none',
                boxShadow: '0px 3px 8px rgba(255, 215, 0, 0.3)',
                '&:hover': { backgroundColor: 'orange' },
              }}
            >
              Talk to Expert
            </Button>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px' }}>
            {['Build PC', 'Components', 'About Us', 'Contact Us'].map((text) => (
              <Button key={text} sx={{ color: 'white', textTransform: 'none', fontSize: '16px', '&:hover': { color: 'gold' } }}>
                <Link href={['Components', 'Talk to Expert'].includes(text) ? "/under-construction" : `/${text.toLowerCase().replace(/\s/g, '-')}`} passHref legacyBehavior>
                  <a style={{ textDecoration: 'none', color: 'inherit' }}>{text}</a>
                </Link>
              </Button>
            ))}
          </Box>

          {/* Desktop "Talk to Expert" Button */}
          <Button
            sx={{
              backgroundColor: 'gold',
              color: 'black',
              fontWeight: 'bold',
              padding: '10px 20px',
              fontSize: '14px',
              borderRadius: '8px',
              textTransform: 'none',
              boxShadow: '0px 4px 10px rgba(255, 215, 0, 0.3)',
              '&:hover': { backgroundColor: 'orange' },
              display: { xs: 'none', md: 'block' },
            }}
          >
            Talk to Expert
          </Button>

          {/* Mobile Menu Button */}
          <IconButton sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }} onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 270, backgroundColor: '#000', height: '100vh', color: 'white' }}>
          
          {/* Close Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            <IconButton sx={{ color: 'white' }} onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ backgroundColor: 'gold' }} />

          {/* Mobile Navigation Links */}
          <List>
            {['Build PC', 'Components', 'About Us', 'Contact Us'].map((text) => (
              <ListItem component="li" key={text} sx={{ textAlign: 'center' }}>
                <ListItemText>
                  <Link href={['Build PC', 'Components', 'Talk to Expert'].includes(text) ? "/under-construction" : `/${text.toLowerCase().replace(/\s/g, '-')}`} passHref legacyBehavior>
                    <a style={{ textDecoration: 'none', color: 'white', fontSize: '18px', fontWeight: 'bold' }}>{text}</a>
                  </Link>
                </ListItemText>
              </ListItem>
            ))}

            {/* "Talk to Expert" in Mobile Menu */}
            <ListItem component="li" sx={{ justifyContent: 'center' }}>
              <Button
                sx={{
                  backgroundColor: 'gold',
                  color: 'black',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  fontSize: '14px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  width: '80%',
                  '&:hover': { backgroundColor: 'orange' },
                }}
              >
                Talk to Expert
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
