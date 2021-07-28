import styled from "styled-components";

type Align = 'center' | 'baseline' | 'start' | 'end' | 'flex-end' | 'flex-start';
type Justify = 'center' | 'baseline' | 'start' | 'end' | 'flex-end' | 'flex-start';

interface IFlexProps {
  align?: Align;
  justify?: Justify;
}

export const Column = styled.div<IFlexProps>`
  display: flex;
  flex-direction: column;
  ${({ align }) => align ? `align-items: ${align}` : ""}
  ${({ justify }) => justify ? `justify-content: ${justify}` : ""}
`;

export const Row = styled.div<IFlexProps>`
  display: flex;
  flex-direction: row;
  ${({ align }) => align ? `align-items: ${align}` : ""}
  ${({ justify }) => justify ? `justify-content: ${justify}` : ""}
`;
