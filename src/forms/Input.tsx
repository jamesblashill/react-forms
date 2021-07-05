import * as React from "react";
import styled from "styled-components";

import { Spacer } from "../Spacer";

export type InputTheme = {
  backgroundColor: string;
  disabledBackgroundColor: string;
  errorColor: string;
  height: string;
  borderColor: string;
  focusBorderColor: string;
  placeholderColor: string;
  font: {
    family: string;
    size: string;
    color: string;
  };
};

export const InputThemeDefault: InputTheme = {
  backgroundColor: "#fff",
  disabledBackgroundColor: "#f8f8f8",
  errorColor: "#b50303",
  height: "42px",
  borderColor: "#ccc",
  focusBorderColor: "#333",
  placeholderColor: "#757575",
  font: {
    family: "Helvetica",
    size: "12px",
    color: "#333",
  },
};

export type InputProps = {
  hasError?: boolean;
  isDisabled?: boolean;
  onChange: (value: string) => void;
  /** React Node that will be placed before the text, but inside of the input border. */
  prefixNode?: React.ReactNode;
  /** React Node that will be placed after the text, but inside of the input border. */
  suffixNode?: React.ReactNode;
  /**
   * Specifies visual details of the input component. If none provided,
   * then `InputThemeDefault` will be used.
   */
  theme?: InputTheme;
  inputElementProps?: React.HTMLAttributes<HTMLInputElement>;
  value: string;
  testId?: string;
  placeholder?: string;
  type?: string;
};

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

const createInputContainer = (theme = InputThemeDefault) => styled.div`
  display: flex;
  align-items: center;
  background: ${theme.backgroundColor};
  border: 1px solid ${theme.borderColor};
  cursor: text;
  height: ${theme.height};
  padding: 0;

  &.is-disabled {
    background: ${theme.disabledBackgroundColor};
  }

  :focus,
  :focus-within {
    border: 1px solid ${theme.focusBorderColor};
  }

  &.has-error {
    border: 1px solid ${theme.errorColor};
  }

  input {
    padding: 0;
    background: none;
    cursor: inherit;
    border: 0;
    appearance: none;
    outline: none;
    flex: 1;
    color: ${theme.font.color};
    font-family: ${theme.font.family};
    font-size: ${theme.font.size};

    :invalid {
      appearance: none;
      box-shadow: none;
    }

    ::placeholder {
      color: ${theme.placeholderColor};
    }
  }
`;

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

const InputContainer = createInputContainer();
