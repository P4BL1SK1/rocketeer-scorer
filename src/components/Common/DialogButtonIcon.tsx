import { useState } from "react";
import { View } from "react-native";
import { Dialog, IconButton, Portal, Text, Tooltip } from "react-native-paper";
import { useTheme } from "../../../theme";
import { StyledButton } from "./StyledButton";

interface DialogButtonIconProps {
  icon: string;
  text?: string;
  dialogText: string;
  onAccept: Function;
  onCancel: Function;
  disabled: boolean;
}

export const DialogButtonIcon = ({
  icon,
  text,
  dialogText,
  onAccept,
  onCancel,
  disabled,
}: DialogButtonIconProps) => {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);
  const handleDismiss = () => setVisible(false);

  const handleAccept = () => {
    onAccept();
    handleDismiss();
  };

  const handleCancel = () => {
    onCancel();
    handleDismiss();
  };

  return (
    <View>
      <Tooltip title={text}>
        <IconButton
          icon={icon}
          onPress={handleOpen}
          iconColor={colors.reset}
          disabled={disabled}
        />
      </Tooltip>

      <Portal>
        <Dialog visible={visible} onDismiss={handleDismiss}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{dialogText}</Text>
          </Dialog.Content>

          <Dialog.Actions>
            <StyledButton
              color={colors.cancel}
              onPress={handleCancel}
              width={100}
            >
              Cancel
            </StyledButton>

            <StyledButton
              color={colors.success}
              onPress={handleAccept}
              width={100}
            >
              Accept
            </StyledButton>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
