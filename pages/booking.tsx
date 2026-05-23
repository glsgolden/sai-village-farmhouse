import React, { FormEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';

const priceTiles = [
  {
    label: 'Weekdays (Mon–Thu)',
    detail: '₹1,500/pp with food · ₹1,000/pp without',
    featured: false,
  },
  {
    label: 'Weekends (Fri–Sun)',
    detail: '₹1,800/pp with food · ₹1,000/pp without',
    featured: true,
  },
] as const;

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '',
    food: 'with',
    requests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission handled by contact/WhatsApp
  };

  return (
    <Box>
      <Navbar />
      <PageHero
        eyebrow="Reservations"
        title="Book Your Stay"
        subtitle="Fill in the details below and we'll confirm your reservation"
      />

      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}>
        <Box sx={{ maxWidth: 780, mx: 'auto' }}>
          {/* Price tiles */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {priceTiles.map((tile) => (
              <Grid key={tile.label} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    bgcolor: tile.featured ? '#c8a96e' : '#1a3a1a',
                    p: 2.5,
                    borderRadius: 1,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '0.9rem',
                      color: tile.featured ? '#1a3a1a' : '#c8a96e',
                      mb: 0.5,
                    }}
                  >
                    {tile.label}
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: tile.featured ? 'rgba(26,58,26,0.65)' : 'rgba(255,255,255,0.55)', fontFamily: "'Jost', sans-serif" }}>
                    {tile.detail}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Form card */}
          <Box sx={{ bgcolor: '#fdfaf5', border: '1px solid #ddd5c0', borderRadius: 1, p: { xs: '2rem 1.2rem', md: '3rem' } }}>
            <SectionLabel>Booking Form</SectionLabel>
            <Typography variant="h2" sx={{ fontSize: '1.8rem', color: '#1a3a1a', mb: 3 }}>
              Reserve Your <Box component="em" sx={{ fontStyle: 'italic', color: '#7a5c3a' }}>Dates</Box>
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Check-in Date"
                    name="checkin"
                    type="date"
                    value={form.checkin}
                    onChange={handleChange}
                    slotProps={{ inputLabel: { shrink: true } }}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Check-out Date"
                    name="checkout"
                    type="date"
                    value={form.checkout}
                    onChange={handleChange}
                    slotProps={{ inputLabel: { shrink: true } }}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Number of Guests"
                    name="guests"
                    type="number"
                    value={form.guests}
                    onChange={handleChange}
                    slotProps={{ htmlInput: { min: 1 } }}
                    placeholder="e.g. 6"
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    select
                    label="Food Package"
                    name="food"
                    value={form.food}
                    onChange={handleChange}
                  >
                    <MenuItem value="with">With Food</MenuItem>
                    <MenuItem value="without">Without Food</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    label="Special Requests"
                    name="requests"
                    value={form.requests}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    placeholder="Decorations, dietary preferences, event type, or any other requirements..."
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    sx={{ py: 1.5, mt: 1 }}
                  >
                    Submit Booking Request
                  </Button>
                  <Typography sx={{ mt: 1.5, color: '#6b6b5e', fontSize: '0.8rem', textAlign: 'center', fontFamily: "'Jost', sans-serif" }}>
                    We&apos;ll contact you within 24 hours to confirm your booking. For urgent enquiries, call us directly.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Call buttons */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <MuiLink
                href="tel:7710934656"
                underline="none"
                sx={{
                  display: 'block',
                  bgcolor: '#1a3a1a',
                  color: '#c8a96e',
                  p: '1rem',
                  borderRadius: 1,
                  textAlign: 'center',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'background 0.2s',
                  '&:hover': { bgcolor: '#2d5a27' },
                }}
              >
                📞 Call Harsh — 77109 34656
              </MuiLink>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <MuiLink
                href="tel:+918879998589"
                underline="none"
                sx={{
                  display: 'block',
                  bgcolor: '#1a3a1a',
                  color: '#c8a96e',
                  p: '1rem',
                  borderRadius: 1,
                  textAlign: 'center',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'background 0.2s',
                  '&:hover': { bgcolor: '#2d5a27' },
                }}
              >
                📞 Call Prakash — +91 88799 98589
              </MuiLink>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
