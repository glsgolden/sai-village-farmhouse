import { keyframes } from '@emotion/react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CheckIcon from '@mui/icons-material/Check';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionLabel from '../components/SectionLabel';

const heroZoom = keyframes`
  from { transform: scale(1.08); }
  to   { transform: scale(1.0);  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0);    }
`;

const scrollPulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scaleY(1);   }
  50%       { opacity: 1;   transform: scaleY(1.2); }
`;

const highlightItems = [
  { icon: '🌊', title: 'Private Pool', sub: 'Exclusive use' },
  { icon: '🛏', title: '2 Bedrooms', sub: '3 beds, 3 baths' },
  { icon: '🌿', title: 'Lush Lawns', sub: 'Spacious grounds' },
  { icon: '🍽', title: 'Food Options', sub: 'With or without meals' },
  { icon: '🎉', title: 'Events', sub: 'Up to 50 guests' },
  { icon: '📍', title: 'Near Mumbai', sub: 'Easy drive from city' },
] as const;

interface PackageProps {
  badge: string;
  title: string;
  subtitle: string;
  prices: { label: string; amount: string; per?: string }[];
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  featured?: boolean;
}

function PackageCard({ badge, title, subtitle, prices, features, ctaHref, ctaLabel, featured = false }: PackageProps) {
  return (
    <Box
      sx={{
        bgcolor: featured ? '#c8a96e' : '#0f2510',
        p: { xs: '2rem 1.5rem', md: '2.8rem 2.5rem' },
        position: 'relative',
        transition: 'background 0.35s ease',
        '&:hover': { bgcolor: featured ? '#e4c98c' : '#162d17' },
        flex: 1,
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          px: 1.5,
          py: 0.5,
          borderRadius: '1px',
          mb: 2,
          bgcolor: featured ? 'rgba(26,58,26,0.15)' : 'rgba(200,169,110,0.12)',
          color: featured ? '#1a3a1a' : '#c8a96e',
          fontFamily: "'Jost', sans-serif",
        }}
      >
        {badge}
      </Box>

      <Typography variant="h3" sx={{ fontSize: '1.5rem', color: featured ? '#1a3a1a' : '#f5f0e8', mb: 0.5 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: '0.8rem', color: featured ? 'rgba(26,58,26,0.65)' : 'rgba(255,255,255,0.45)', mb: 2.5, fontFamily: "'Jost', sans-serif" }}>
        {subtitle}
      </Typography>

      {prices.map((p) => (
        <Box key={p.label} sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 0.5 }}>
          <Typography sx={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: featured ? 'rgba(26,58,26,0.55)' : 'rgba(255,255,255,0.4)', minWidth: 90, fontFamily: "'Jost', sans-serif" }}>
            {p.label}
          </Typography>
          <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 600, color: featured ? '#1a3a1a' : '#c8a96e', lineHeight: 1 }}>
            {p.amount}
          </Typography>
          {p.per && (
            <Typography sx={{ fontSize: '0.72rem', color: featured ? 'rgba(26,58,26,0.5)' : 'rgba(255,255,255,0.4)', fontFamily: "'Jost', sans-serif" }}>
              {p.per}
            </Typography>
          )}
        </Box>
      ))}

      <Box sx={{ height: '1px', bgcolor: featured ? 'rgba(26,58,26,0.15)' : 'rgba(200,169,110,0.15)', my: 2.5 }} />

      <List dense disablePadding sx={{ mb: 3 }}>
        {features.map((f) => (
          <ListItem key={f} disablePadding sx={{ py: 0.4 }}>
            <CheckIcon sx={{ fontSize: '0.8rem', color: featured ? '#1a3a1a' : '#c8a96e', mr: 1.5, fontWeight: 700 }} />
            <Typography sx={{ fontSize: '0.85rem', color: featured ? 'rgba(26,58,26,0.8)' : 'rgba(255,255,255,0.7)', fontFamily: "'Jost', sans-serif" }}>
              {f}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Button
        component={NextLink}
        href={ctaHref}
        fullWidth
        variant="outlined"
        sx={{
          border: `1px solid ${featured ? '#1a3a1a' : 'rgba(200,169,110,0.4)'}`,
          color: featured ? '#1a3a1a' : '#c8a96e',
          bgcolor: featured ? 'rgba(26,58,26,0.1)' : 'transparent',
          '&:hover': {
            bgcolor: featured ? '#1a3a1a' : '#c8a96e',
            color: featured ? '#c8a96e' : '#1a3a1a',
            borderColor: featured ? '#1a3a1a' : '#c8a96e',
          },
        }}
      >
        {ctaLabel}
      </Button>
    </Box>
  );
}

const galleryImages = [
  { src: '/pool.jpg', alt: 'Swimming Pool', bg: '#4a7c45' },
  { src: '/lawn.jpg', alt: 'Lawn', bg: '#2d5a27' },
  { src: '/rooms.jpg', alt: 'Rooms', bg: '#7a5c3a' },
  { src: '/hero.jpg', alt: 'Farm House', bg: '#1a3a1a' },
  { src: '/pool.jpg', alt: 'Evenings', bg: '#c8a96e' },
] as const;

export default function Home() {
  return (
    <Box>
      <Navbar />

      {/* ── HERO ── */}
      <Box
        component="header"
        sx={{
          position: 'relative',
          height: '100vh',
          minHeight: 650,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          bgcolor: '#1a3a1a',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.55,
            animation: `${heroZoom} 12s ease-out forwards`,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(10,30,10,0.3) 0%, rgba(10,30,10,0.15) 40%, rgba(10,30,10,0.55) 100%)',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            px: 3,
            maxWidth: 900,
            animation: `${fadeUp} 1s 0.3s both`,
          }}
        >
          <Typography
            component="span"
            sx={{
              display: 'inline-block',
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#c8a96e',
              mb: 2,
              opacity: 0.95,
            }}
          >
            Welcome to Badlapur · Maharashtra
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.8rem', md: '5.5rem' }, color: '#ffffff', mb: 2, textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            Your{' '}
            <Box component="em" sx={{ fontStyle: 'italic', color: '#e4c98c' }}>
              Escape
            </Box>{' '}
            into Nature
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 300,
              mb: 4,
              letterSpacing: '0.02em',
            }}
          >
            Sai Village Farm House — where every visit becomes a cherished memory.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={NextLink}
              href="/booking"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ color: '#1a3a1a', px: 4, py: 1.5 }}
            >
              Book Your Stay
            </Button>
            <Button
              component={NextLink}
              href="/packages"
              variant="outlined"
              size="large"
              sx={{
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.6)',
                '&:hover': { borderColor: '#c8a96e', color: '#c8a96e', bgcolor: 'transparent' },
              }}
            >
              View Packages
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: '1px',
              height: 40,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)',
              animation: `${scrollPulse} 2s infinite`,
            }}
          />
          <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
            Scroll
          </Typography>
        </Box>
      </Box>

      {/* ── HIGHLIGHTS STRIP ── */}
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
          {highlightItems.map((item, i) => (
            <Box
              key={i}
              sx={{
                textAlign: 'center',
                p: '2.5rem 1.5rem',
                borderRight: i < highlightItems.length - 1 ? '1px solid rgba(200,169,110,0.15)' : 'none',
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

      {/* ── ABOUT PREVIEW ── */}
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src="/pool.jpg"
                alt="Farm House"
                sx={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 1, display: 'block', bgcolor: '#c4d4b8' }}
              />
              <Box
                component="img"
                src="/lawn.jpg"
                alt="Lawn"
                sx={{
                  position: 'absolute',
                  bottom: -32,
                  right: -32,
                  width: '55%',
                  aspectRatio: '1',
                  objectFit: 'cover',
                  borderRadius: 1,
                  border: '5px solid #f5f0e8',
                  bgcolor: '#b5d0a0',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 32,
                  left: -32,
                  bgcolor: '#1a3a1a',
                  color: '#c8a96e',
                  p: '1.2rem 1.5rem',
                  borderRadius: 1,
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', lineHeight: 1, display: 'block' }}>Est.</Typography>
                <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8, fontFamily: "'Jost', sans-serif" }}>
                  Family Retreat
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionLabel>About Us</SectionLabel>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#1a3a1a', mb: 2 }}>
              A Peaceful Retreat{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: '#7a5c3a' }}>Close to Home</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b6b5e', maxWidth: 600 }}>
              Sai Village Farm House is a serene escape nestled in Badlapur (Mulgaon), District Thane. Set amidst lush greenery with a private swimming pool, spacious lawns, and modern comforts, it&apos;s the perfect destination for families, friends, and corporate groups seeking to reconnect with nature.
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b6b5e', maxWidth: 600, mt: 2 }}>
              Whether you&apos;re planning a weekend getaway, a birthday celebration, or a team outing — we create experiences that stay with you long after you return home.
            </Typography>
            <Button
              component={NextLink}
              href="/about"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 4, px: 4 }}
            >
              Discover Our Story
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* ── PACKAGES PREVIEW ── */}
      <Box sx={{ bgcolor: '#1a3a1a' }}>
        <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 6, md: 8 } }}>
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 6 }}>
            <SectionLabel center light>Stay Packages</SectionLabel>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#f5f0e8', mb: 2 }}>
              Choose Your <Box component="em" sx={{ fontStyle: 'italic', color: '#e4c98c' }}>Experience</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', mx: 'auto' }}>
              Flexible packages designed for every group size and budget. All stays include access to our private pool and lush grounds.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              border: '1px solid rgba(200,169,110,0.15)',
              gap: '1.5px',
              bgcolor: 'rgba(200,169,110,0.15)',
            }}
          >
            <PackageCard
              badge="Mon – Thu"
              title="Weekday Retreat"
              subtitle="Perfect for mid-week escapes"
              prices={[
                { label: 'With Food', amount: '₹1,500', per: '/ person' },
                { label: 'Without Food', amount: '₹1,000', per: '/ person' },
              ]}
              features={['Private pool access', 'Spacious lawn', '2 bedrooms, 3 beds', 'AC rooms & free WiFi']}
              ctaHref="/booking"
              ctaLabel="Reserve Now"
            />
            <PackageCard
              badge="Fri – Sun"
              title="Weekend Getaway"
              subtitle="Most popular choice"
              prices={[
                { label: 'With Food', amount: '₹1,800', per: '/ person' },
                { label: 'Without Food', amount: '₹1,000', per: '/ person' },
              ]}
              features={['Everything in weekday', 'Weekend bonfire setup', 'Priority booking', 'Event decoration option']}
              ctaHref="/booking"
              ctaLabel="Reserve Now"
              featured
            />
            <PackageCard
              badge="10+ Guests"
              title="Group & Corporate"
              subtitle="Custom packages for large groups"
              prices={[{ label: 'Starting', amount: 'Custom' }]}
              features={['Up to 50 guests', 'Customisable food menu', 'Dedicated coordinator', 'Ample parking']}
              ctaHref="/contact"
              ctaLabel="Get a Quote"
            />
          </Box>
        </Box>
      </Box>

      {/* ── GALLERY PREVIEW ── */}
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}>
        <SectionLabel>Gallery</SectionLabel>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#1a3a1a', mb: 4 }}>
          A Glimpse of <Box component="em" sx={{ fontStyle: 'italic', color: '#7a5c3a' }}>Your Getaway</Box>
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gridTemplateRows: 'auto',
            gap: '0.75rem',
          }}
        >
          {galleryImages.map((img, i) => (
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
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button component={NextLink} href="/gallery" variant="contained" color="primary" size="large" sx={{ px: 4 }}>
            View Full Gallery
          </Button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
