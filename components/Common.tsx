import { Button, withTheme } from "react-native-paper";
import { MD3Theme } from "react-native-paper/lib/typescript/types";

interface StyledButtonProps {
  theme: MD3Theme;
  onPress: (param?: any) => void;
  label: string;
}

export const StyledButton = withTheme(
  ({ theme, onPress, label }: StyledButtonProps) => (
    <Button
      style={{
        width: 150,
        margin: 5,
        backgroundColor: theme.colors?.primary,
      }}
      mode="contained"
      onPress={onPress}
    >
      {label}
    </Button>
  )
);
