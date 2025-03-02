import { systemWeights } from 'react-native-typography';
import palettes from './palettes';
import { createTheme, DefaultTheme } from '@draftbit/ui';
export default createTheme({
  breakpoints: {},
  palettes,
  baseTheme: DefaultTheme,
  theme: {
    name: 'Contemporary Editorial',
    colors: {
      background: {
        base: {
          default: palettes.Gray[50],
          dark: palettes.Gray[900],
        },
        brand: {
          default: palettes.Stone[50],
          dark: palettes.Gray[900],
        },
        danger: {
          default: palettes.Red[100],
          dark: palettes.Red[900],
        },
        info: {
          default: palettes.Blue[100],
          dark: palettes.Blue[900],
        },
        success: {
          default: palettes.Green[100],
          dark: palettes.Green[900],
        },
        warning: {
          default: palettes.Amber[100],
          dark: palettes.Amber[900],
        },
      },
      border: {
        base: {
          default: palettes.Gray[200],
          dark: palettes.Gray[800],
        },
        brand: {
          default: palettes.Green[200],
          dark: palettes.Green[700],
        },
        danger: {
          default: palettes.Red[200],
          dark: palettes.Red[700],
        },
        info: {
          default: palettes.Blue[200],
          dark: palettes.Blue[700],
        },
        success: {
          default: palettes.Green[200],
          dark: palettes.Green[700],
        },
        warning: {
          default: palettes.Amber[200],
          dark: palettes.Amber[700],
        },
      },
      branding: {
        accent: {
          default: palettes.Green[500],
          dark: palettes.Green[400],
        },
        primary: {
          default: palettes.Green[600],
          dark: palettes.Green[500],
        },
        secondary: {
          default: palettes.Stone[200],
          dark: palettes.Gray[800],
        },
        tertiary: {
          default: palettes.Stone[800],
          dark: palettes.Green[600],
        },
      },
      foreground: {
        base: {
          default: palettes.Gray[50],
          dark: palettes.Gray[950],
        },
        brand: {
          default: palettes.Gray[50],
          dark: palettes.Gray[950],
        },
        danger: {
          default: palettes.Red[50],
          dark: palettes.Red[950],
        },
        info: {
          default: palettes.Blue[50],
          dark: palettes.Blue[950],
        },
        success: {
          default: palettes.Green[50],
          dark: palettes.Green[950],
        },
        warning: {
          default: palettes.Amber[50],
          dark: palettes.Amber[950],
        },
      },
      text: {
        danger: {
          default: palettes.Red[500],
          dark: palettes.Red[400],
        },
        light: {
          default: palettes.Stone[400],
          dark: palettes.Gray[400],
        },
        medium: {
          default: palettes.Stone[700],
          dark: palettes.Gray[200],
        },
        normal: {
          default: palettes.Stone[600],
          dark: palettes.Gray[300],
        },
        strong: {
          default: palettes.Stone[900],
          dark: palettes.Gray[50],
        },
        success: {
          default: palettes.Green[600],
          dark: palettes.Green[400],
        },
        warning: {
          default: palettes.Amber[500],
          dark: palettes.Amber[400],
        },
      },
    },
    typography: {
      body1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Newsreader_400Regular',
      },
      body2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 14,
        fontFamily: 'Newsreader_400Regular',
      },
      button: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 16,
        fontFamily: 'Newsreader_500Medium',
      },
      caption: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 12,
        fontFamily: 'Newsreader_400Regular',
      },
      headline1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 48,
        fontFamily: 'InstrumentSerif_400Regular',
      },
      headline2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 40,
        fontFamily: 'InstrumentSerif_400Regular',
      },
      headline3: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 32,
        fontFamily: 'InstrumentSerif_400Regular',
      },
      headline4: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 24,
        fontFamily: 'InstrumentSerif_400Regular',
      },
      headline5: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 20,
        fontFamily: 'InstrumentSerif_400Regular',
      },
      headline6: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'InstrumentSerif_400Regular',
      },
      overline: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 10,
        fontFamily: 'Newsreader_400Regular',
      },
      subtitle1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 16,
        fontFamily: 'Newsreader_500Medium',
      },
      subtitle2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Newsreader_500Medium',
      },
    },
  },
});
