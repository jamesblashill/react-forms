import styled from "styled-components";

import { HelperText } from "./HelperText";

export const ErrorText = styled(HelperText)`
  color: ${(props) => props.theme.form.input.errorColor};
`;
