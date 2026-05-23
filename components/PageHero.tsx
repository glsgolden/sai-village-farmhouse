import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionLabel from './SectionLabel';

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <Box
      sx={{
        bgcolor: '#1a3a1a',
        pt: { xs: '7rem', md: '9rem' },
        pb: { xs: '3rem', md: '5rem' },
        px: 2,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <SectionLabel center light>{eyebrow}</SectionLabel>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3.5rem' },
            color: '#f5f0e8',
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 300,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
