import { ITheme } from './definitions';

export const values = {
  colors: {
    primary: {
      default: 'hsl(203, 89%, 53%)',
      medium: 'hsl(207, 90%, 54%)',
      light: 'hsl(199, 92%, 74%)',
    },
    secondary: {
      default: 'hsl(200, 19%, 18%)',
      dark: 'hsl(200, 19%, 18%)',
      medium: 'hsl(199, 18%, 40%)',
    },
    tertiary: {
      default: 'hsla(0, 0%, 0%, 0.9)',
      light: 'hsl(0, 0%, 38%)',
      dark: '	hsl(0, 0%, 0%)',
    },
    background: {
      default: 'hsl(0, 0%, 100%)',
      dark: 'hsl(198, 16%, 84%)',
    },
    misc: {
      error: 'hsl(0,100%,50%)',
      disabled: 'hsl(0,0%,50%)',
      white: '#FFFF',
    },
  },
  // Apply scale transformations here
  spacing: {
    0: 0,
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    14: 14,
    16: 16,
    18: 18,
    20: 20,
    24: 24,
    32: 32,
    36: 36,
    38: 38,
    40: 40,
    42: 42,
    48: 48,
    56: 56,
    64: 64,
  },
};

export const theme: ITheme = {
  colors: values.colors,
  spacing: values.spacing,
};