import styled, { css } from "styled-components";
import { TextCss } from "../TextCss";

export const InputContainer = styled.div<{ error?: boolean, disabled?: boolean }>`
  ${(props) => {
    const { disabled, error, theme } = props;
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
    } = theme;


    return css`
      display: flex;
      align-items: center;
      background: ${backgroundColor};
      border: 1px solid ${borderColor};
      cursor: text;
      height: ${height};
      padding: 0;

      :focus,
      :focus-within {
        border: 1px solid ${focusBorderColor};
      }

      ${disabled ? `background: ${disabledBackgroundColor};` : ""}

      ${error ? `border: 1px solid ${errorColor};` : ""}

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
