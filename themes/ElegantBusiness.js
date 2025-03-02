import { systemWeights } from 'react-native-typography';
import palettes from './palettes';
import { createTheme, DefaultTheme } from '@draftbit/ui';
export default createTheme({
  breakpoints: {},
  palettes,
  baseTheme: DefaultTheme,
  theme: {
    name: 'Elegant Business',
    colors: {
      background: {
        base: {
          default: palettes.Gray[50],
          dark: palettes.Gray[900],
        },
        brand: {
          default: palettes.Gray[300],
          dark: palettes.Gray[700],
        },
        danger: {
          default: palettes.Red[300],
          dark: palettes.Red[700],
        },
        info: {
          default: palettes.Blue[300],
          dark: palettes.Blue[700],
        },
        success: {
          default: palettes.Green[300],
          dark: palettes.Green[700],
        },
        warning: {
          default: palettes.Yellow[300],
          dark: palettes.Yellow[700],
        },
      },
      border: {
        base: {
          default: palettes.Gray[200],
          dark: palettes.Gray[800],
        },
        brand: {
          default: palettes.Gray[300],
          dark: palettes.Gray[600],
        },
        danger: {
          default: palettes.Red[300],
          dark: palettes.Red[500],
        },
        info: {
          default: palettes.Blue[300],
          dark: palettes.Blue[500],
        },
        success: {
          default: palettes.Green[300],
          dark: palettes.Green[500],
        },
        warning: {
          default: palettes.Yellow[300],
          dark: palettes.Yellow[500],
        },
      },
      branding: {
        accent: {
          default: palettes.Blue[300],
          dark: palettes.Blue[200],
        },
        primary: {
          default: palettes.Blue[700],
          dark: palettes.Blue[400],
        },
        secondary: {
          default: palettes.Gray[600],
          dark: palettes.Gray[400],
        },
        tertiary: {
          default: palettes.Blue[500],
          dark: palettes.Blue[300],
        },
      },
      foreground: {
        base: {
          default: palettes.Gray[50],
          dark: palettes.Gray[950],
        },
        brand: {
          default: palettes.Gray[100],
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
          default: palettes.Yellow[100],
          dark: palettes.Yellow[900],
        },
      },
      text: {
        danger: {
          default: palettes.Red[600],
          dark: palettes.Red[400],
        },
        light: {
          default: palettes.Gray[600],
          dark: palettes.Gray[400],
        },
        medium: {
          default: palettes.Gray[800],
          dark: palettes.Gray[200],
        },
        normal: {
          default: palettes.Gray[700],
          dark: palettes.Gray[300],
        },
        strong: {
          default: palettes.Gray[900],
          dark: palettes.Gray[100],
        },
        success: {
          default: palettes.Green[600],
          dark: palettes.Green[400],
        },
        warning: {
          default: palettes.Yellow[600],
          dark: palettes.Yellow[400],
        },
      },
    },
    typography: {
      body1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
      },
      body2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
      },
      button: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
      },
      caption: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
      },
      headline1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.bold ?? {}),
        fontWeight: '700',
        fontSize: 42,
        fontFamily: 'NotoSerif_700Bold',
      },
      headline2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.bold ?? {}),
        fontWeight: '700',
        fontSize: 36,
        fontFamily: 'NotoSerif_700Bold',
      },
      headline3: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.semibold ?? {}),
        fontWeight: '600',
        fontSize: 30,
        fontFamily: 'NotoSerif_600SemiBold',
      },
      headline4: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.semibold ?? {}),
        fontWeight: '600',
        fontSize: 24,
        fontFamily: 'NotoSerif_600SemiBold',
      },
      headline5: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 20,
        fontFamily: 'NotoSerif_500Medium',
      },
      headline6: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 16,
        fontFamily: 'NotoSerif_500Medium',
      },
      overline: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 10,
        fontFamily: 'Roboto_400Regular',
      },
      subtitle1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
      },
      subtitle2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Roboto_500Medium',
      },
    },
  },
});
