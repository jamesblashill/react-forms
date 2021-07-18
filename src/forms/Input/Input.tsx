import * as React from "react";

import { Spacer } from "../../Spacer";
import { InputContainer } from "./styles";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  hasError,
  prefixNode,
  suffixNode,
  ...inputElementProps
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const classNames = computeInputClasses(hasError, inputElementProps.disabled);

  return (
    <InputContainer
      className={classNames}
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      {prefixNode ?? <Spacer size={16} />}
      <input ref={inputRef} {...inputElementProps} />
      {suffixNode ?? <Spacer size={16} />}
    </InputContainer>
  );
};

const computeInputClasses = (
  hasError: boolean = false,
  isDisabled: boolean = false
) => {
  const classes = [];
  if (hasError) {
    classes.push("has-error");
  }
  if (isDisabled) {
    classes.push("is-disabled");
  }
  return classes.join(" ");
};
