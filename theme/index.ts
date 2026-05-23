import { createTheme } from '@mui/material/styles';

const FOREST = '#1a3a1a';
const FOREST_MID = '#2d5a27';
const FOREST_LIGHT = '#4a7c45';
const GOLD = '#c8a96e';
const GOLD_LIGHT = '#e4c98c';
const CREAM = '#f5f0e8';
const CHARCOAL = '#2a2a2a';
const TEXT_MUTED = '#6b6b5e';
const BORDER = '#ddd5c0';
const CARD_BG = '#fdfaf5';

const theme = createTheme({
  palette: {
    primary: {
      main: FOREST_MID,
      dark: FOREST,
      light: FOREST_LIGHT,
      contrastText: '#ffffff',
    },
    secondary: {
      main: GOLD,
      light: GOLD_LIGHT,
      contrastText: FOREST,
    },
    background: {
      default: CREAM,
      paper: CARD_BG,
    },
    text: {
      primary: CHARCOAL,
      secondary: TEXT_MUTED,
    },
    divider: BORDER,
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    h1: { fontFamily: "'Playfair Display', serif", fontWeight: 700, lineHeight: 1.1 },
    h2: { fontFamily: "'Playfair Display', serif", fontWeight: 600, lineHeight: 1.2 },
    h3: { fontFamily: "'Playfair Display', serif", fontWeight: 600 },
    h4: { fontFamily: "'Playfair Display', serif", fontWeight: 600 },
    h5: { fontFamily: "'Playfair Display', serif", fontWeight: 600 },
    h6: { fontFamily: "'Playfair Display', serif", fontWeight: 600 },
    body1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.15rem',
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: "'Jost', sans-serif",
      fontSize: '0.875rem',
    },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { overflowX: 'hidden', backgroundColor: CREAM },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontFamily: "'Jost', sans-serif",
          fontWeight: 600,
          fontSize: '0.8rem',
          borderRadius: 2,
          transition: 'all 0.3s ease',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: FOREST,
            '&:hover': {
              backgroundColor: GOLD_LIGHT,
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(200, 169, 110, 0.4)',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            '&:hover': { transform: 'translateY(-2px)' },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: `1px solid ${BORDER}`,
          borderRadius: 4,
          backgroundColor: CARD_BG,
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined', fullWidth: true },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            fontFamily: "'Jost', sans-serif",
            backgroundColor: '#ffffff',
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: FOREST_LIGHT },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: FOREST_LIGHT,
              boxShadow: '0 0 0 3px rgba(74, 124, 69, 0.1)',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': { color: FOREST_MID },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: 2 },
        notchedOutline: { borderColor: BORDER },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: { fontFamily: "'Jost', sans-serif", backgroundColor: '#ffffff' },
      },
    },
  },
});

export default theme;
