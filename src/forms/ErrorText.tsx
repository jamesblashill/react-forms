import styled from "styled-components";
import { Typography } from "../Typography";

export const ErrorText = styled(Typography).attrs({ variant: 'label' })`
  color: ${(props) => props.theme.form.input.errorColor};
`;
