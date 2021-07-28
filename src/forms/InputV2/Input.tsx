import * as React from "react";
import uniqueId from 'lodash/uniqueId';

import { Spacer } from "../../Spacer";
import { InputContainer } from "./styles";
import { InputProps } from "./types";
import { Typography } from "../../Typography";
import { Label } from "../Label";
import { ErrorText } from "../ErrorText";

function useCombinedRefs<T>(...refs: (React.ForwardedRef<T> | React.RefObject<T>)[]) {
  const targetRef = React.useRef<T>(null)

  React.useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(targetRef?.current)
      } else {
        (ref as React.MutableRefObject<T | null>).current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}

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
      {label && <Label hasError={!!error} htmlFor={inputId}>{label}</Label>}
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
      {helper && typeof error !== "string" && <Typography variant="label">{helper}</Typography>}
      {typeof error === "string" && <ErrorText>{error}</ErrorText>}
    </>
  );
});
