import styled from "styled-components";

export const Spacer = styled.div<{ size: number }>`
  flex-grow: 0;
  flex-shrink: 0;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
