import styled from "styled-components";
import { TypographyProps, TypographyStyles } from "../Typography";

export const HelperText = styled.p<Omit<TypographyProps, "color" | "variant"> & {error?: boolean}>`
  ${({error, ...props}) => TypographyStyles({...props, color: error ? "error" : "primary", variant: "labelSansRegular"})}
`;
