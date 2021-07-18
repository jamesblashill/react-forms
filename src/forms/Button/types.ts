type ButtonColors = {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
};

export type ButtonTheme = ButtonColors & {
  hover: ButtonColors;
  disabled: ButtonColors;
};
