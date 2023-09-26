import { Button } from "react-native-paper";

interface StyledButtonProps {
  color: string;
  onPress: (param?: any) => void;
  label: string;
}

export const StyledButton = ({ color, onPress, label }: StyledButtonProps) => (
  <Button
    style={{
      width: 150,
      margin: 5,
      backgroundColor: color,
    }}
    mode="contained"
    onPress={onPress}
  >
    {label}
  </Button>
);
