import * as React from "react";

import { Spacer } from "../../Spacer";
import { InputContainer } from "./styles";
import { InputProps } from "./types";

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
