import styled from "styled-components";
import { TypographyProps, TypographyStyles } from "../Typography";

export const ErrorText = styled.p<Omit<TypographyProps, "color" | "variant">>`
  ${props => TypographyStyles({...props, color: "error", variant: "labelSansRegular"})};
`;
