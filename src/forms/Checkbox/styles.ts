import styled from "styled-components";
import { checkboxLightTheme } from "./theme";

export const Wrapper = styled.div`
${({theme}) => {
  const _theme = theme.checkbox || checkboxLightTheme;
  return `
    display: flex;
    align-items: center;
    position: relative;
    min-height: ${_theme.checkboxSize};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: ${_theme.checkboxSize};
      width: ${_theme.checkboxSize};
      background-color: ${_theme.off.backgroundColor};
      border: ${_theme.off.border};
      cursor: pointer;
    }

    label {
      cursor: pointer;
      margin-left: calc(${_theme.checkboxSize} + 8px);
    }

    label:hover ~ span {
      background-color: #CCC;
    }

    input:checked ~ span {
      background-color: ${_theme.on.backgroundColor};
    }

    span:after {
      content: "";
      position: absolute;
      display: none;
    }

    input:checked ~ span:after {
      display: block;
    }

    span:after {
      left: 4px;
      top: 0;
      width: 5px;
      height: 10px;
      border: solid ${_theme.checkmarkColor};
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  `;
}}`;
