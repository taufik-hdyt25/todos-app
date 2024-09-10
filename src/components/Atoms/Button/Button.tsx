import {Button, ButtonProps} from "@rneui/themed";
import {COLORS} from "@src/constants/theme";
import React, {ReactNode} from "react";
import Icon from "../Icon/Icons";

interface IButtonProps extends ButtonProps {
  children: any;
  gapIcon?: number;
  ph?: number;
  pv?: number;
  textColor?: string;
}
const ButtonCustom: React.FC<IButtonProps> = ({
  children,
  gapIcon,
  radius = 4,
  ph,
  pv,
  textColor = COLORS.primary,
  color = COLORS.primary,

  ...props
}): JSX.Element => {
  return (
    <Button
      raised={true}
      radius={radius}
      buttonStyle={{
        gap: gapIcon,
        paddingHorizontal: ph,
        paddingVertical: pv,
      }}
      titleStyle={{
        color: textColor,
      }}
      color={color}
      {...props}
    >
      {children}
    </Button>
  );
};

ButtonCustom.displayName = "Button";
export default ButtonCustom;
