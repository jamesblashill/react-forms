import * as React from "react";
import styled from "styled-components";
import { TextCss } from "./TextCss";

type LabelProps = {
  hasError?: boolean;
};

export const Label: React.FC<LabelProps> = ({ hasError, children }) => {
  const className = hasError ? "has-error" : undefined;

  return <LabelElement className={className}>{children}</LabelElement>;
};

const LabelElement = styled.label`
  ${TextCss}

  &.has-error {
    color: ${(props) => props.theme.form.input.errorColor};
  }
`;
