import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  children: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionLabel({ children, center = false, light = false }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        mb: 1.5,
        justifyContent: center ? 'center' : 'flex-start',
      }}
    >
      <Box sx={{ width: 32, height: '1.5px', bgcolor: '#c8a96e', flexShrink: 0 }} />
      <Typography
        component="span"
        sx={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: light ? 'rgba(200,169,110,0.9)' : '#c8a96e',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
