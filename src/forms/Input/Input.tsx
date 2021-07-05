import * as React from "react";
import styled, { css } from "styled-components";

import { Spacer } from "../../Spacer";
import { TextCss } from "../TextCss";

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

const InputContainer = styled.div`
  ${(props) => {
    const {
      form: {
        input: {
          backgroundColor,
          disabledBackgroundColor,
          errorColor,
          height,
          borderColor,
          focusBorderColor,
          placeholderColor,
        },
      },
    } = props.theme;

    return css`
      display: flex;
      align-items: center;
      background: ${backgroundColor};
      border: 1px solid ${borderColor};
      cursor: text;
      height: ${height};
      padding: 0;

      &.is-disabled {
        background: ${disabledBackgroundColor};
      }

      :focus,
      :focus-within {
        border: 1px solid ${focusBorderColor};
      }

      &.has-error {
        border: 1px solid ${errorColor};
      }

      input {
        padding: 0;
        background: none;
        cursor: inherit;
        border: 0;
        appearance: none;
        outline: none;
        flex: 1;
        ${TextCss}

        :invalid {
          appearance: none;
          box-shadow: none;
        }

        ::placeholder {
          color: ${placeholderColor};
        }
      }
    `;
  }}
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
