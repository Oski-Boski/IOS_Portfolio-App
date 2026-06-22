// ═══════════════════════════════════════════
// Portfolio Design Tokens
// Modern Dark Green Theme
// ═══════════════════════════════════════════

export const colors = {
  green: '#00C853',
  greenBright: '#69F0AE',
  greenDark: '#009624',
  greenGlow: 'rgba(0, 200, 83, 0.3)',
  greenGlowLight: 'rgba(0, 200, 83, 0.1)',

  bg: '#0A0F0D',
  card: '#121A16',
  surface: '#0E1512',
  cardLight: '#162019',

  text: '#E8F5E9',
  textSecondary: '#7A8F82',
  textMuted: '#4A5F52',

  border: '#1E2D25',
  borderLight: '#253830',
  borderGreen: 'rgba(0, 200, 83, 0.25)',

  white: '#FFFFFF',
  black: '#000000',
  red: '#FF5252',
  yellow: '#FFD600',
  blue: '#448AFF',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
};

export const typography = {
  heading: { fontSize: 26, fontWeight: '800', letterSpacing: -0.5 },
  subheading: { fontSize: 20, fontWeight: '700' },
  sectionTitle: { fontSize: 17, fontWeight: '700' },
  body: { fontSize: 14, fontWeight: '500' },
  bodyBold: { fontSize: 14, fontWeight: '700' },
  caption: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.8 },
  tiny: { fontSize: 10, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.6 },
  stat: { fontSize: 24, fontWeight: '900' },
};

export const shadows = {
  glow: {
    shadowColor: '#00C853',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
};
