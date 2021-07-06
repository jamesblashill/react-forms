import * as React from "react";

import { Spacer } from "../../Spacer";
import { InputContainer } from "./styles";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  hasError,
  inputElementProps,
  isDisabled,
  onChange,
  placeholder,
  prefixNode,
  suffixNode,
  testId,
  value,
  type,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const classNames = computeInputClasses(hasError, isDisabled);
  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <InputContainer
      className={classNames}
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      {prefixNode ?? <Spacer size={16} />}
      <input
        ref={inputRef}
        onChange={handleInputChanged}
        value={value}
        data-test-id={testId}
        placeholder={placeholder}
        type={type ?? "text"}
        {...inputElementProps}
      />
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
