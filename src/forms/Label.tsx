import styled, { css } from "styled-components";
import { TextCss } from "./TextCss";

type LabelProps = {
  hasError?: boolean;
};

export const Label = styled.label<LabelProps>`
  ${TextCss}

  ${(props) => {
    const {
      hasError,
      theme: {
        form: {
          input: { errorColor, textColor },
        },
      },
    } = props;
    const labelColor = hasError ? errorColor : textColor;
    return css`
      color: ${labelColor};
    `;
  }}
`;
