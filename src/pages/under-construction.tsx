'use client';

import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const UnderConstruction = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f8f8f8',
      }}
    >
      {/* Diagonal Background */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #FF3D00 50%, #FFF 50%)',
          clipPath: 'polygon(0 0, 100% 25%, 100% 100%, 0% 75%)',
        }}
      />

      {/* Content Card */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          maxWidth: '500px',
          zIndex: 2,
        }}
      >
        {/* SVG Image */}
        <Box sx={{ mb: 3 }}>
          <Image src="/404.svg" alt="Under Construction" width={300} height={200} />
        </Box>

        <Typography variant="h4" fontWeight="bold" sx={{ color: '#222' }}>
          🚧 Page Under Construction 🚧
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, mb: 3, opacity: 0.8 }}>
          We’re working on something amazing. Stay tuned!
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push('/')}
          sx={{
            backgroundColor: '#FF3D00',
            color: 'white',
            fontWeight: 'bold',
            padding: '12px 24px',
            borderRadius: '8px',
            textTransform: 'none',
            boxShadow: '0px 3px 8px rgba(255, 61, 0, 0.3)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': { backgroundColor: '#D32F2F', transform: 'scale(1.05)' },
          }}
        >
          Go to Home
        </Button>
      </Box>
    </Box>
  );
};

export default UnderConstruction;
