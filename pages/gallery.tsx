import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';

const images = [
  { src: '/pool.jpg', alt: 'Swimming Pool', bg: '#4a7c45' },
  { src: '/lawn.jpg', alt: 'Lush Lawn', bg: '#2d5a27' },
  { src: '/rooms.jpg', alt: 'Bedroom', bg: '#7a5c3a' },
  { src: '/hero.jpg', alt: 'Farm House Exterior', bg: '#1a3a1a' },
  { src: '/pool.jpg', alt: 'Evening Ambience', bg: '#c8a96e' },
  { src: '/lawn.jpg', alt: 'Outdoor Dining', bg: '#4a7c45' },
  { src: '/rooms.jpg', alt: 'Common Area', bg: '#2d5a27' },
  { src: '/hero.jpg', alt: 'Sunrise View', bg: '#7a5c3a' },
] as const;

export default function Gallery() {
  return (
    <Box>
      <Navbar />
      <PageHero
        eyebrow="Visual Tour"
        title="Gallery"
        subtitle="A glimpse into life at Sai Village Farm House"
      />

      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}>
        <SectionLabel>All Photos</SectionLabel>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#1a3a1a', mb: 4 }}>
          The Property in <Box component="em" sx={{ fontStyle: 'italic', color: '#7a5c3a' }}>Pictures</Box>
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gridTemplateRows: 'auto',
            gap: '0.75rem',
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              sx={{
                overflow: 'hidden',
                borderRadius: 1,
                cursor: 'pointer',
                ...(i === 0 && { gridColumn: { md: 'span 2' }, gridRow: { md: 'span 2' } }),
                '&:hover img': { transform: 'scale(1.06)' },
              }}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: i === 0 ? { xs: 220, md: 460 } : 220,
                  objectFit: 'cover',
                  display: 'block',
                  bgcolor: img.bg,
                  transition: 'transform 0.5s ease',
                }}
              />
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            textAlign: 'center',
            mt: 4,
            color: '#6b6b5e',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.1rem',
          }}
        >
          Want to see more? Visit us in person — the real thing is even better.
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
}
