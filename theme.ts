import { MD3DarkTheme, MD3Theme, useTheme as useThemePaper } from 'react-native-paper';

type ThemeColors = MD3Theme['colors'];
type Colors = ThemeColors & CustomColors;
type CustomColors = {
  success: string;
  cancel: string;
  reset: string;
  finish: string;
};

export interface Theme extends MD3Theme {
  colors: Colors;
}

const theme: Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    secondary: '#9575CD',
    background: '#2C2E3B',
    success: '#007f5f',
    cancel: '#9d0208',
    reset: '#ffaa00',
    finish: '#3d405b',
  },
};

export const useTheme = () => {
  const theme = useThemePaper() as Theme;

  return theme;
};

export default theme;
