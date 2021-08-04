import styled from "styled-components";
import { TypographyStyles, TypographyProps } from "../Typography";

export const Label = styled.label<Omit<TypographyProps, "variant"> & {error?: boolean}>`
  ${({error, ...props}) => TypographyStyles({...props, color: error ? "error" : "primary"})};
`;
