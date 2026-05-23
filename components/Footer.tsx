import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Divider from '@mui/material/Divider';

const exploreLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Packages & Pricing', href: '/packages' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
] as const;

export default function Footer() {
  const linkSx = {
    display: 'block',
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    py: 0.4,
    fontFamily: "'Jost', sans-serif",
    transition: 'color 0.2s',
    '&:hover': { color: '#c8a96e' },
  };

  return (
    <Box component="footer" sx={{ bgcolor: '#0d1f0d', color: 'rgba(255,255,255,0.6)', pt: 7, pb: 3 }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Grid container spacing={5} sx={{ mb: 5 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#c8a96e', mb: 1 }}
            >
              Sai Village Farm House
            </Typography>
            <Typography sx={{ fontSize: '0.83rem', lineHeight: 1.8, maxWidth: 280, color: 'rgba(255,255,255,0.45)', fontFamily: "'Jost', sans-serif" }}>
              A serene agro retreat nestled in Badlapur, offering families and groups the perfect escape from city life.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a96e', mb: 2, fontFamily: "'Jost', sans-serif" }}>
              Explore
            </Typography>
            {exploreLinks.map((l) => (
              <MuiLink key={l.href} component={NextLink} href={l.href} sx={linkSx}>
                {l.label}
              </MuiLink>
            ))}
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a96e', mb: 2, fontFamily: "'Jost', sans-serif" }}>
              Contact
            </Typography>
            <MuiLink href="tel:7710934656" sx={linkSx}>Harsh — 77109 34656</MuiLink>
            <MuiLink href="tel:+918879998589" sx={linkSx}>Prakash — +91 88799 98589</MuiLink>
            <MuiLink
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              sx={{ ...linkSx, lineHeight: 1.6 }}
            >
              Badlapur (Mulgaon), Dist. Thane, Maharashtra
            </MuiLink>
            <MuiLink component={NextLink} href="/booking" sx={{ ...linkSx, color: '#c8a96e', mt: 1, display: 'block' }}>
              Book a Stay →
            </MuiLink>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)' }} />
        <Typography sx={{ textAlign: 'center', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', pt: 2.5, fontFamily: "'Jost', sans-serif" }}>
          © 2026 Sai Village Farm House · Badlapur (Mulgaon), Dist. Thane, Maharashtra · All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
