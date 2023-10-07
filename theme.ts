import {
  MD3DarkTheme,
  MD3Theme,
  useTheme as useThemePaper,
} from "react-native-paper";

type ThemeColors = MD3Theme["colors"];
type Colors = ThemeColors & CustomColors;
type CustomColors = {
  success: string;
  cancel: string;
};

export interface Theme extends MD3Theme {
  colors: Colors;
}

const theme: Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    secondary: "#9575CD",
    background: "#2C2E3B",
    success: "#4caf50",
    cancel: "#f44336",
  },
};

export const useTheme = () => {
  const theme = useThemePaper() as Theme;

  return theme;
};

export default theme;
