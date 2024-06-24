import { Button } from 'react-native-paper';

type StyledButtonProps = {
  color: string;
  onPress: (param?: any) => void;
  children: any;
  width?: number;
};

export const StyledButton = ({ color, onPress, children, width = 150 }: StyledButtonProps) => (
  <Button
    textColor="#FFFFFF"
    style={{
      width,
      margin: 5,
      backgroundColor: color,
    }}
    mode="contained"
    onPress={onPress}
  >
    {children}
  </Button>
);
