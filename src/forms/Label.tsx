import styled, { css } from "styled-components";
import { Typography } from "../Typography";

type LabelProps = {
  hasError?: boolean;
};

export const Label = styled(Typography).attrs({ as: "label" })<LabelProps>`
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
