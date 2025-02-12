import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { People, Build, ThumbUp, LocalShipping, Support } from '@mui/icons-material';

const teamMembers = [
  { name: 'Rithish', role: 'Founder & CEO', icon: <People sx={{ fontSize: 50, color: '#FFD700' }} /> },
  { name: 'Jane Smith', role: 'Lead Developer', icon: <Build sx={{ fontSize: 50, color: '#FFD700' }} /> },
  { name: 'Mike Johnson', role: 'Marketing Head', icon: <ThumbUp sx={{ fontSize: 50, color: '#FFD700' }} /> },
];

const processSteps = [
  {
    icon: <Build sx={{ color: '#4CAF50', fontSize: '2rem' }} />,
    text: 'Consultation: We understand your requirements and suggest the best options for your needs.',
  },
  {
    icon: <LocalShipping sx={{ color: '#2196F3', fontSize: '2rem' }} />,
    text: 'Build & Design: Our team crafts the ideal PC solution tailored to your specifications.',
  },
  {
    icon: <Support sx={{ color: '#FF5722', fontSize: '2rem' }} />,
    text: 'Delivery & Support: We provide full after-sales service and lifetime support for your peace of mind.',
  },
];

const CompanyOverview: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#FFD700',
          textAlign: 'center',
          mb: 2,
          textTransform: 'uppercase',
          letterSpacing: 1.5,
        }}
      >
        About Our Company
      </Typography>
      <Divider sx={{ backgroundColor: '#FFD700', height: 3, width: '60px', mb: 3 }} />
      <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '800px', lineHeight: 1.6 }}>
        We are a passionate team dedicated to providing high-performance custom PC builds. Our goal is to make technology
        accessible and customizable for everyone.
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#FFD700',
          mt: 6,
          mb: 2,
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: 1.5,
        }}
      >
        Meet Our Team
      </Typography>
      <Divider sx={{ backgroundColor: '#FFD700', height: 3, width: '60px', mb: 3 }} />
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
            <Card
              sx={{
                backgroundColor: '#222',
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                textAlign: 'center',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#2a2a2a',
                  transform: 'translateY(-5px)',
                },
                minWidth: '250px',
              }}
            >
              <CardContent>
                {member.icon}
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFD700', mt: 2 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ddd', opacity: 0.85 }}>
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#FFD700',
          mt: 6,
          mb: 2,
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: 1.5,
        }}
      >
        Our Process
      </Typography>
      <Divider sx={{ backgroundColor: '#FFD700', height: 3, width: '60px', mb: 3 }} />
      <List sx={{ width: '100%', maxWidth: '800px' }}>
        {processSteps.map((step, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: '#242424',
              borderRadius: '8px',
              py: 2,
              mb: 2,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#2e2e2e',
              },
            }}
          >
            {step.icon}
            <ListItemText
              primary={step.text}
              primaryTypographyProps={{
                fontSize: '1.2rem',
                fontWeight: '500',
                lineHeight: 1.5,
                color: '#fff',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CompanyOverview;
