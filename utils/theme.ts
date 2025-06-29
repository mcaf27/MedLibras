import { DefaultTheme } from '@react-navigation/native';
import { MD3LightTheme } from 'react-native-paper';

const colors = {
  "primary": "rgb(116, 199, 185)",
  "onPrimary": "rgb(0, 54, 60)",
  "primaryContainer": "rgb(0, 79, 86)",
  "onPrimaryContainer": "rgb(142, 242, 255)",
  "secondary": "rgb(255, 182, 145)",
  "onSecondary": "rgb(53, 73, 84)",
  "secondaryContainer": "rgb(181, 226, 250)",
  "onSecondaryContainer": "rgb(53, 73, 84)",
  "tertiary": "rgb(154, 214, 128)",
  "onTertiary": "rgb(12, 57, 0)",
  "tertiaryContainer": "rgb(29, 82, 9)",
  "onTertiaryContainer": "rgb(181, 243, 153)",
  "error": "rgb(255, 180, 171)",
  "onError": "rgb(105, 0, 5)",
  "errorContainer": "rgb(147, 0, 10)",
  "onErrorContainer": "rgb(255, 180, 171)",
  "background": "rgb(230, 244, 241)",
  "onBackground": "rgb(0, 53, 71)",
  "surface": "rgb(249, 247, 243)",
  "onSurface": "rgb(77, 70, 55)",
  "surfaceVariant": "rgb(59, 58, 55)",
  "onSurfaceVariant": "rgb(0, 57, 76)",
  "outline": "rgb(153, 174, 187)",
  "outlineVariant": "rgb(59, 58, 55)",
  "shadow": "rgb(0, 0, 0)",
  "scrim": "rgb(0, 0, 0)",
  "inverseSurface": "rgb(77, 70, 55)",
  "inverseOnSurface": "rgb(45, 49, 49)",
  "inversePrimary": "rgb(0, 105, 114)",
  "elevation": {
    "level0": "rgb(201, 26, 184)",
    "level1": "rgb(28, 37, 39)",
    "level2": "rgb(207, 236, 252)",
    "level3": "rgb(31, 49, 51)",
    "level4": "rgb(31, 51, 53)",
    "level5": "rgb(32, 54, 57)"
  },
  "surfaceDisabled": "rgba(224, 227, 227, 0.12)",
  "onSurfaceDisabled": "rgba(224, 227, 227, 0.38)",
  "backdrop": "rgba(41, 50, 51, 0.4)",
  "backgroundContainer": "rgb(0, 77, 101)",
  "onBackgroundContainer": "rgb(191, 233, 255)",
  "text": "rgb(121, 209, 255)",
  "onText": "rgb(0, 53, 73)",
  "textContainer": "rgb(0, 76, 104)",
  "onTextContainer": "rgb(195, 232, 255)",
};

export const navigation_theme = {
  ...DefaultTheme,
  colors: {
    primary: colors.secondary,
    background: colors.primary,
    card: colors.surface,
    text: '#111',
    border: colors.onPrimary,
    notification: colors.onSecondary,
  },
};

export const paper_theme = {
  ...MD3LightTheme,
  // fonts: {
  //   ...MD3LightTheme.fonts,
  //   bodyLarge: { ...MD3LightTheme.fonts.bodyLarge, fontFamily: 'Roboto' },
  // },
  colors,
};