import * as React from "react";
import styled from "styled-components";
import { Text } from "./Text";

type LabelProps = {
  hasError?: boolean;
};

export const Label: React.FC<LabelProps> = ({ hasError, children }) => {
  const className = hasError ? "has-error" : undefined;

  return <LabelElement className={className}>{children}</LabelElement>;
};

const LabelElement = styled(Text).attrs({ as: "label" })`
  &.has-error {
    color: red;
  }
`;
