import { TextCss } from "forms/TextCss";
import styled, { css } from "styled-components";

export const InputContainer = styled.div`
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