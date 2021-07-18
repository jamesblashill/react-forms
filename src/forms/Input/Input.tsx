import * as React from "react";
import { useContext } from "react";
import { Spacer } from "../../Spacer";
import { UserTrackerContext } from "../../UserTrackerContext";
import { InputContainer } from "./styles";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  hasError,
  prefixNode,
  suffixNode,
  onChange,
  onFocus,
  name,
  ...inputElementProps
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const classNames = computeInputClasses(hasError, inputElementProps.disabled);
  const { onEvent } = useContext(UserTrackerContext);
  const handleChangeEvent = (event: React.FormEvent<HTMLInputElement>) => {
    setTimeout(() => {
      onEvent({ type: "formChange", name });
    });
    if (onChange) {
      onChange(event);
    }
  };
  const handleFocusEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      onEvent({ type: "formFocus", name });
    });
    if (onFocus) {
      onFocus(event);
    }
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
        {...inputElementProps}
        onChange={handleChangeEvent}
        onFocus={handleFocusEvent}
        name={name}
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
