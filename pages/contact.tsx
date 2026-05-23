import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';

const contactItems = [
  {
    icon: '📍',
    title: 'Our Location',
    content: (
      <Typography sx={{ fontSize: '0.9rem', color: '#6b6b5e', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>
        Sai Village Farm House, Badlapur (Mulgaon)
        <br />
        Dist. Thane, Maharashtra
      </Typography>
    ),
  },
  {
    icon: '📞',
    title: 'Call Us',
    content: (
      <>
        <MuiLink href="tel:7710934656" sx={{ display: 'block', fontSize: '0.9rem', color: '#6b6b5e', textDecoration: 'none', fontFamily: "'Jost', sans-serif", '&:hover': { color: '#1a3a1a' } }}>
          Harsh Shikhare — 77109 34656
        </MuiLink>
        <MuiLink href="tel:+918879998589" sx={{ display: 'block', fontSize: '0.9rem', color: '#6b6b5e', textDecoration: 'none', fontFamily: "'Jost', sans-serif", '&:hover': { color: '#1a3a1a' } }}>
          Prakash Shelke — +91 88799 98589
        </MuiLink>
      </>
    ),
  },
  {
    icon: '🕐',
    title: 'Best Time to Call',
    content: (
      <Typography sx={{ fontSize: '0.9rem', color: '#6b6b5e', fontFamily: "'Jost', sans-serif" }}>
        Daily, 9:00 AM – 8:00 PM
      </Typography>
    ),
  },
  {
    icon: '🚗',
    title: 'Getting Here',
    content: (
      <Typography sx={{ fontSize: '0.9rem', color: '#6b6b5e', fontFamily: "'Jost', sans-serif" }}>
        Approx. 60 km from Mumbai. Easily accessible by road via Badlapur station.
      </Typography>
    ),
  },
] as const;

export default function Contact() {
  return (
    <Box>
      <Navbar />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out to plan your stay"
      />

      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'start' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionLabel>Reach Us</SectionLabel>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#1a3a1a', mb: 2 }}>
              We&apos;re Here to{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: '#7a5c3a' }}>Help</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b6b5e', mb: 4 }}>
              Have questions about availability, pricing, or events? Call us directly or drop by — we&apos;re always happy to show you around.
            </Typography>

            {contactItems.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    bgcolor: '#1a3a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#1a3a1a', mb: 0.3 }}>
                    {item.title}
                  </Typography>
                  {item.content}
                </Box>
              </Box>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderRadius: 1, overflow: 'hidden', border: '1px solid #ddd5c0' }}>
              <Box sx={{ height: 350 }}>
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d73.26!3d19.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzAwLjAiTiA3M8KwMTUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="350"
                  sx={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  title="Sai Village Farm House Location"
                />
              </Box>
              <Box sx={{ bgcolor: '#1a3a1a', px: 3, py: 2 }}>
                <Typography sx={{ color: '#c8a96e', fontFamily: "'Playfair Display', serif", fontSize: '0.95rem' }}>
                  📍 Sai Village Farm House, Badlapur (Mulgaon), Dist. Thane
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
