import * as React from "react";

import { useCombinedRefs } from "../UseCombinedRefs";
import { Spacer } from "../../Spacer";
import { InputContainer } from "./styles";
import { InputProps } from "./types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  hasError,
  prefixNode,
  suffixNode,
  ...inputElementProps
}, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRef = useCombinedRefs<HTMLInputElement>(ref, inputRef);
  const classNames = computeInputClasses(hasError, inputElementProps.disabled);

  return (
    <InputContainer
      className={classNames}
      onClick={() => {
        combinedRef.current?.focus();
      }}
    >
      {prefixNode ?? <Spacer size={16} />}
      <input ref={combinedRef} {...inputElementProps} />
      {suffixNode ?? <Spacer size={16} />}
    </InputContainer>
  );
});

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
