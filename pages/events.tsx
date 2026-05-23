import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';

const events = [
  { icon: '🎂', title: 'Birthday Parties', desc: 'Celebrate your special day surrounded by greenery and your loved ones. We help with décor, food, and activities.' },
  { icon: '🏢', title: 'Corporate Outings', desc: 'Step away from the office for team-building activities, outdoor meetings, and group bonding in a refreshing setting.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family Gatherings', desc: 'Reunite with family in a spacious, private venue. Perfect for all ages with pool access and open lawns.' },
  { icon: '🎊', title: 'Kitty Parties', desc: 'Host a memorable kitty party with great food, pool fun, and plenty of laughter in a beautiful outdoor setting.' },
  { icon: '💑', title: 'Anniversary Celebrations', desc: 'Mark your milestone in a serene, romantic setting. We can arrange special setups on request.' },
  { icon: '🎓', title: 'Farewell & Get-togethers', desc: 'Say goodbye or hello in style. Our venue accommodates groups of all sizes for any occasion.' },
] as const;

const venueSpecs = [
  { icon: '👥', label: 'Capacity', value: 'Up to 50 guests' },
  { icon: '🍽', label: 'Catering', value: 'Customisable food packages' },
  { icon: '🎨', label: 'Decoration', value: 'On-request event setup' },
  { icon: '🌿', label: 'Setting', value: 'Private outdoor venue' },
  { icon: '🚗', label: 'Parking', value: 'Ample space for all vehicles' },
] as const;

export default function Events() {
  return (
    <Box>
      <Navbar />
      <PageHero
        eyebrow="Celebrations"
        title="Events at Sai Village"
        subtitle="The perfect backdrop for every occasion"
      />

      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}>
        {/* Venue Highlights */}
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center', mb: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionLabel>Venue Highlights</SectionLabel>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#1a3a1a', mb: 3 }}>
              Your <Box component="em" sx={{ fontStyle: 'italic', color: '#7a5c3a' }}>Perfect Venue</Box> Awaits
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b6b5e', mb: 2 }}>
              With a capacity for up to 50 guests, spacious lawns, a private pool, and customisable food packages, Sai Village Farm House is the ideal venue for birthdays, kitty parties, office gatherings, and family functions.
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b6b5e', mb: 4 }}>
              Our team works with you to ensure every detail is perfect. From decorations to menus, we&apos;re here to make your event unforgettable.
            </Typography>
            <Button
              component={NextLink}
              href="/contact"
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4 }}
            >
              Enquire About Your Event
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ bgcolor: '#fdfaf5', border: '1px solid #ddd5c0', borderRadius: 1, p: 3 }}>
              {venueSpecs.map((spec, i) => (
                <Box key={i}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1.5 }}>
                    <Typography sx={{ fontSize: '1.5rem' }}>{spec.icon}</Typography>
                    <Box>
                      <Typography sx={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6b6b5e', mb: 0.3, fontFamily: "'Jost', sans-serif" }}>
                        {spec.label}
                      </Typography>
                      <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#1a3a1a' }}>
                        {spec.value}
                      </Typography>
                    </Box>
                  </Box>
                  {i < venueSpecs.length - 1 && <Divider sx={{ borderColor: '#ddd5c0' }} />}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Event Types */}
        <SectionLabel>Event Types</SectionLabel>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#1a3a1a', mb: 4 }}>
          We Host <Box component="em" sx={{ fontStyle: 'italic', color: '#7a5c3a' }}>Every Occasion</Box>
        </Typography>
        <Grid container spacing={2.5}>
          {events.map((e, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(26,58,26,0.12)' } }}>
                <Box sx={{ height: 160, bgcolor: '#2d5a27', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                  {e.icon}
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ fontSize: '1.15rem', color: '#1a3a1a', mb: 1 }}>{e.title}</Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: '#6b6b5e', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>{e.desc}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
