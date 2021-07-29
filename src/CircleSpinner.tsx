import * as React from "react";
import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

export const SVG = styled.svg`
  animation: ${rotate} 2s linear infinite;
  transform-origin: center center;
`;

export const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-linecap: round;
`;

interface IPropTypes {
  color?: string;
  stroke?: number;
  size?: string | number;
  width?: string | number;
  height?: string | number;
  className?: string;
  "data-test-id"?: string;
}

const spinnerSizes = {
  small: 16,
  medium: 24,
  large: 48,
};

/**
 * @trackcomponent
 */
export const LoadingSpinner: React.FC<{
  className?: string;
  "data-test-id"?: string;
  size?: "small" | "medium" | "large";
  color?: string;
}> = ({ className, ["data-test-id"]: dataTestId, size = "large", color }) => (
  <CircleSpinner
    className={className}
    data-test-id={dataTestId}
    size={spinnerSizes[size]}
    color={color}
  />
);

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PageLoader = () => (
  <Wrapper>
    <LoadingSpinner />
  </Wrapper>
);

/** @deprecated use LoadingSpinner */
export const CircleSpinner: React.FC<IPropTypes> = ({
  color = "#333",
  stroke = 2,
  size = "100%",
  width,
  height,
  className,
  ["data-test-id"]: dataTestId,
}) => (
  <SVG
    viewBox="25 25 50 50"
    width={width || size}
    height={height || size}
    className={className}
    data-test-id={dataTestId}
  >
    <Circle
      cx="50"
      cy="50"
      r="20"
      stroke={color}
      fill="none"
      strokeWidth={stroke}
      strokeMiterlimit="10"
    />
  </SVG>
);

/** @deprecated use LoadingSpinner */
export default CircleSpinner;
