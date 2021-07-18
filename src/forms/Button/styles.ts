import styled, { css } from "styled-components";
import { TextCss } from "../TextCss";

export const StyledButtonElement = styled.button`
  ${TextCss};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 16px;
  width: 100%;
  outline: 0;
  line-height: 50px;
  cursor: pointer;
  box-sizing: border-box;

  ${(props) => {
    const { backgroundColor, textColor, borderColor, hover, disabled } =
      props.theme.button;
    return css`
      background-color: ${backgroundColor};
      color: ${textColor};
      border: 1px solid ${borderColor};

      &:hover,
      &:focus,
      &:focus-within {
        background-color: ${hover.backgroundColor};
        color: ${hover.textColor};
        border-color: ${hover.borderColor};
      }

      &[disabled] {
        background-color: ${disabled.backgroundColor};
        color: ${disabled.textColor};
        border-color: ${disabled.borderColor};

        cursor: default;
      }
    `;
  }};
`;
