import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';

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
        flex: 1,
        transition: 'background 0.35s ease',
        '&:hover': { bgcolor: featured ? '#e4c98c' : '#162d17' },
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
            <CheckIcon sx={{ fontSize: '0.8rem', color: featured ? '#1a3a1a' : '#c8a96e', mr: 1.5 }} />
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

export default function Packages() {
  return (
    <Box>
      <Navbar />
      <PageHero
        eyebrow="Pricing"
        title="Packages & Pricing"
        subtitle="Transparent rates with no hidden charges"
      />

      <Box sx={{ bgcolor: '#1a3a1a' }}>
        <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 6, md: 8 } }}>
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 6 }}>
            <SectionLabel center light>Stay Options</SectionLabel>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#f5f0e8', mb: 2 }}>
              Choose Your{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: '#e4c98c' }}>Perfect Package</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', mx: 'auto' }}>
              All packages include exclusive access to the full property — private pool, lawns, parking, and all listed amenities.
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
              subtitle="Perfect for mid-week escapes & small families"
              prices={[
                { label: 'With Food', amount: '₹1,500', per: '/ person' },
                { label: 'Without Food', amount: '₹1,000', per: '/ person' },
              ]}
              features={['Full property exclusive use', 'Private swimming pool', '2 bedrooms, 3 beds, 3 baths', 'Air conditioned rooms', 'Free WiFi & modern kitchen', 'Ample parking']}
              ctaHref="/booking"
              ctaLabel="Reserve Now"
            />
            <PackageCard
              badge="Most Popular"
              title="Weekend Getaway"
              subtitle="Fri – Sun · The ultimate weekend escape"
              prices={[
                { label: 'With Food', amount: '₹1,800', per: '/ person' },
                { label: 'Without Food', amount: '₹1,000', per: '/ person' },
              ]}
              features={['Everything in weekday', 'Bonfire setup (seasonal)', 'Priority booking slots', 'Option for event décor', 'Outdoor games setup', 'Dedicated host support']}
              ctaHref="/booking"
              ctaLabel="Reserve Now"
              featured
            />
            <PackageCard
              badge="10+ Guests"
              title="Group & Corporate"
              subtitle="Custom packages for large gatherings"
              prices={[{ label: 'Rate', amount: 'Custom' }]}
              features={['Capacity up to 50 guests', 'Customisable food menu', 'Bulk booking discounts', 'Event coordination support', 'Special activities on request', 'Flexible check-in timings']}
              ctaHref="/contact"
              ctaLabel="Get a Quote"
            />
          </Box>

          <Typography sx={{ textAlign: 'center', mt: 3, color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', fontFamily: "'Jost', sans-serif" }}>
            * Prices are per person. Minimum booking may apply. Contact us to confirm availability.
          </Typography>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
