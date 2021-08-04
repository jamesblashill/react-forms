import * as React from "react";
import uniqueId from 'lodash/uniqueId';

import { Spacer } from "../../Spacer";
import { InputContainer } from "./styles";
import { InputProps } from "./types";
import { Label } from "../Label";
import { ErrorText } from "../ErrorText";
import { useCombinedRefs } from "../UseCombinedRefs";
import { HelperText } from "../HelperText";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  error,
  prefixNode,
  suffixNode,
  helper,
  label,
  ...inputElementProps
}, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRef = useCombinedRefs<HTMLInputElement>(ref, inputRef);

  const inputId = inputElementProps.id ?? uniqueId();

  return (
    <>
      {label && <Label error={!!error} htmlFor={inputId}>{label}</Label>}
      <InputContainer
        error={!!error}
        disabled={inputElementProps.disabled}
        onClick={() => {
          combinedRef.current?.focus();
        }}
      >
        {prefixNode ?? <Spacer size={16} />}
        <input ref={combinedRef} {...inputElementProps} id={inputId} />
        {suffixNode ?? <Spacer size={16} />}
      </InputContainer>
      {helper && typeof error !== "string" && <HelperText error={error}>{helper}</HelperText>}
      {typeof error === "string" && <ErrorText>{error}</ErrorText>}
    </>
  );
});
