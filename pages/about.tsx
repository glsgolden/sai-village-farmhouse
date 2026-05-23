import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';

const highlights = [
  { icon: '🏡', title: 'Family Owned', sub: 'Personal touch in every stay' },
  { icon: '🌳', title: 'Nature First', sub: 'Lush green surroundings' },
  { icon: '⭐', title: '5-Star Hospitality', sub: 'Genuine care & service' },
  { icon: '🔒', title: 'Safe & Private', sub: 'Exclusive-use property' },
] as const;

export default function About() {
  return (
    <Box>
      <Navbar />
      <PageHero
        eyebrow="Our Story"
        title="About Sai Village Farm House"
        subtitle="A family retreat born from a love of nature and hospitality"
      />

      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionLabel>Who We Are</SectionLabel>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#1a3a1a', mb: 3 }}>
              More Than a Stay —{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: '#7a5c3a' }}>An Experience</Box>
            </Typography>
            {[
              'Sai Village Farm House is a serene retreat nestled in the lush landscape of Badlapur (Mulgaon), Dist. Thane, Maharashtra. Founded with a vision to offer city dwellers a genuine connection with nature, we provide a warm, welcoming environment that feels like a home away from home.',
              'Our property features spacious lawns, a private swimming pool, air-conditioned rooms, and a fully-equipped modern kitchen — everything you need for a comfortable and memorable stay. Whether you arrive as a family, a group of friends, or a corporate team, we tailor every visit to create lasting memories.',
              'At Sai Village, we believe in warm hospitality, clean surroundings, and genuine care for every guest. Come discover why families return year after year.',
            ].map((text, i) => (
              <Typography key={i} variant="body1" sx={{ color: '#6b6b5e', mt: i > 0 ? 2 : 0 }}>
                {text}
              </Typography>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              component="img"
              src="/lawn.jpg"
              alt="Farm House Lawns"
              sx={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 1, display: 'block', bgcolor: '#b5d0a0' }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Highlights strip */}
      <Box sx={{ bgcolor: '#1a3a1a', py: 5, px: 2 }}>
        <Box
          sx={{
            maxWidth: 1280,
            mx: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            border: '1px solid rgba(200,169,110,0.2)',
          }}
        >
          {highlights.map((item, i) => (
            <Box
              key={i}
              sx={{
                textAlign: 'center',
                p: '2.5rem 1.5rem',
                borderRight: i < highlights.length - 1 ? '1px solid rgba(200,169,110,0.15)' : 'none',
                transition: 'background 0.3s',
                '&:hover': { bgcolor: 'rgba(200,169,110,0.06)' },
              }}
            >
              <Typography sx={{ fontSize: '2.2rem', mb: 1, display: 'block' }}>{item.icon}</Typography>
              <Typography variant="h6" sx={{ fontSize: '1rem', color: '#c8a96e', mb: 0.3 }}>{item.title}</Typography>
              <Typography sx={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontFamily: "'Jost', sans-serif" }}>{item.sub}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
