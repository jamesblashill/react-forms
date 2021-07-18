import * as React from "react";
import { UserTrackerContext } from "../../UserTrackerContext";
import { StyledButtonElement } from "./styles";

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  onClick,
  name,
  ...buttonProps
}) => {
  const { onEvent } = React.useContext(UserTrackerContext);
  const handleButtonClicked = (_: React.MouseEvent) => {
    setTimeout(() => {
      onEvent({ type: "formSubmit" });
    });
  };

  return (
    <StyledButtonElement
      onClick={handleButtonClicked}
      name={name}
      {...buttonProps}
    />
  );
};
