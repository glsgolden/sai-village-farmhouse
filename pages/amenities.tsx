import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';

const amenities = [
  { icon: '🛏', title: '2 Bedrooms', desc: '3 comfortable beds across two spacious bedrooms for restful nights.' },
  { icon: '🚿', title: '3 Bathrooms', desc: 'Clean, modern bathrooms with hot and cold water supply.' },
  { icon: '🏊', title: 'Private Pool', desc: 'Exclusive swimming pool for your group — no sharing with strangers.' },
  { icon: '❄️', title: 'Air Conditioning', desc: 'All rooms are air-conditioned for a comfortable stay year-round.' },
  { icon: '📶', title: 'Free WiFi', desc: 'High-speed WiFi throughout the property to stay connected.' },
  { icon: '🍳', title: 'Modern Kitchen', desc: 'Fully-equipped kitchen if you prefer to cook your own meals.' },
  { icon: '🚗', title: 'Ample Parking', desc: 'Spacious parking area for multiple vehicles.' },
  { icon: '🌿', title: 'Spacious Lawn', desc: 'Lush green lawns perfect for outdoor activities and relaxation.' },
  { icon: '🎪', title: 'Event Space', desc: 'Open area for celebrations, decorations, and gatherings.' },
  { icon: '🔥', title: 'Bonfire Area', desc: 'Dedicated bonfire space for evening get-togethers (seasonal).' },
] as const;

export default function Amenities() {
  return (
    <Box>
      <Navbar />
      <PageHero
        eyebrow="Facilities"
        title="Our Amenities"
        subtitle="Everything you need for a perfect stay, thoughtfully provided"
      />

      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto', mb: 6 }}>
          <SectionLabel center>What We Offer</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#1a3a1a', mb: 2 }}>
            Comfort Meets <Box component="em" sx={{ fontStyle: 'italic', color: '#7a5c3a' }}>Nature</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#6b6b5e', mx: 'auto' }}>
            Every amenity is curated to make your stay relaxing, enjoyable, and memorable.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {amenities.map((a, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    bgcolor: '#c8a96e',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 40px rgba(26, 58, 26, 0.12)',
                    borderColor: '#c8a96e',
                  },
                  '&:hover::after': { transform: 'scaleX(1)' },
                }}
              >
                <CardContent sx={{ p: '2.2rem 1.8rem !important' }}>
                  <Typography sx={{ fontSize: '2.5rem', mb: 1.5, display: 'block' }}>{a.icon}</Typography>
                  <Typography variant="h6" sx={{ fontSize: '1rem', color: '#1a3a1a', mb: 0.5 }}>{a.title}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#6b6b5e', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>{a.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
