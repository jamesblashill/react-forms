import { css } from "styled-components";

export const TextCss = css`
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.form.textColor};
`;
