import React, { useState } from 'react';
import NextLink from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Packages', href: '/packages' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const;

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const close = () => setDrawerOpen(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'rgba(26, 58, 26, 0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(200, 169, 110, 0.2)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 }, minHeight: '70px !important' }}>
        <Typography
          component={NextLink}
          href="/"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.15rem',
            color: '#c8a96e',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
          }}
        >
          Sai Village Farm House
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              sx={{ color: 'rgba(255,255,255,0.85)' }}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={close}>
              <Box sx={{ width: 270, bgcolor: '#1a3a1a', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2.5, py: 2 }}>
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", color: '#c8a96e', fontSize: '1rem' }}>
                    Menu
                  </Typography>
                  <IconButton sx={{ color: 'rgba(255,255,255,0.6)' }} onClick={close} aria-label="Close menu">
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Divider sx={{ borderColor: 'rgba(200,169,110,0.15)' }} />
                <List sx={{ flex: 1, pt: 1 }}>
                  {navLinks.map((link) => (
                    <ListItemButton
                      key={link.href}
                      component={NextLink}
                      href={link.href}
                      onClick={close}
                      sx={{
                        py: 1.2,
                        px: 3,
                        color: 'rgba(255,255,255,0.8)',
                        '&:hover': { bgcolor: 'rgba(200,169,110,0.08)', color: '#c8a96e' },
                      }}
                    >
                      <ListItemText
                        primary={link.label}
                        slotProps={{
                          primary: { sx: { fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Jost', sans-serif" } },
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
                <Box sx={{ p: 2.5 }}>
                  <Button
                    component={NextLink}
                    href="/booking"
                    onClick={close}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ color: '#1a3a1a', py: 1.2 }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                component={NextLink}
                href={link.href}
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  fontWeight: 500,
                  px: 1,
                  '&:hover': { color: '#c8a96e', bgcolor: 'rgba(200,169,110,0.08)' },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              component={NextLink}
              href="/booking"
              variant="contained"
              color="secondary"
              sx={{ ml: 1, color: '#1a3a1a', fontWeight: 700, px: 2 }}
            >
              Book Now
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
