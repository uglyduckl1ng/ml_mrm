import { systemWeights } from 'react-native-typography';
import palettes from './palettes';
import { createTheme, DefaultTheme } from '@draftbit/ui';
export default createTheme({
  breakpoints: {},
  palettes,
  baseTheme: DefaultTheme,
  theme: {
    name: 'Golden Authority',
    colors: {
      background: {
        base: {
          default: palettes.Gray[50],
          dark: palettes.Gray[900],
        },
        brand: {
          default: palettes.Orange[200],
          dark: palettes.Orange[500],
        },
        danger: {
          default: palettes.Red[200],
          dark: palettes.Red[800],
        },
        info: {
          default: palettes.Blue[200],
          dark: palettes.Blue[800],
        },
        success: {
          default: palettes.Green[200],
          dark: palettes.Green[800],
        },
        warning: {
          default: palettes.Yellow[200],
          dark: palettes.Yellow[800],
        },
      },
      border: {
        base: {
          default: palettes.Gray[200],
          dark: palettes.Gray[800],
        },
        brand: {
          default: palettes.Orange[300],
          dark: palettes.Orange[600],
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
      branding: {
        accent: {
          default: palettes.Yellow[400],
          dark: palettes.Yellow[200],
        },
        primary: {
          default: palettes.Gray[950],
          dark: palettes.Gray[950],
        },
        secondary: {
          default: palettes.Orange[500],
          dark: palettes.Orange[500],
        },
        tertiary: {
          default: palettes.Blue[700],
          dark: palettes.Blue[300],
        },
      },
      foreground: {
        base: {
          default: palettes.Gray[50],
          dark: palettes.Gray[950],
        },
        brand: {
          default: palettes.Orange[100],
          dark: palettes.Orange[700],
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
          default: palettes.Gray[400],
          dark: palettes.Gray[600],
        },
        medium: {
          default: palettes.Gray[800],
          dark: palettes.Gray[200],
        },
        normal: {
          default: palettes.Gray[600],
          dark: palettes.Gray[400],
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
        fontFamily: 'Epilogue_400Regular',
      },
      body2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 14,
        fontFamily: 'Epilogue_400Regular',
      },
      button: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 16,
        fontFamily: 'Epilogue_500Medium',
      },
      caption: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 12,
        fontFamily: 'Epilogue_400Regular',
      },
      headline1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 48,
        fontFamily: 'Anton_400Regular',
      },
      headline2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 40,
        fontFamily: 'Anton_400Regular',
      },
      headline3: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 32,
        fontFamily: 'Anton_400Regular',
      },
      headline4: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
      },
      headline5: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 20,
        fontFamily: 'Anton_400Regular',
      },
      headline6: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Anton_400Regular',
      },
      overline: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 10,
        fontFamily: 'Epilogue_400Regular',
      },
      subtitle1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 16,
        fontFamily: 'Epilogue_500Medium',
      },
      subtitle2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.medium ?? {}),
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Epilogue_500Medium',
      },
    },
  },
});
