import { Breakpoints, MediaQueries } from "./Media2Strings";
import {
  lightTheme as buttonLightTheme,
  darkTheme as buttonDarkTheme,
} from "./forms/Button";
import {
  lightTheme as inputLightTheme,
  darkTheme as inputDarkTheme,
} from "./forms/Input";
import {
  lightTheme as typographyLightTheme,
  darkTheme as typographyDarkTheme,
} from "./Typography/Themes";
import { checkboxDarkTheme, checkboxLightTheme } from "./forms/Checkbox";

const breakpoints: Breakpoints = {
  tablet: 768,
  desktop: 1280
}

const mediaQueries = new MediaQueries(breakpoints);

export const lightModeTheme = {
  appBackgroundColor: "#fff",
  form: {
    textColor: "#333",
    input: inputLightTheme,
  },
  typography: typographyLightTheme,
  button: buttonLightTheme,
  checkbox: checkboxLightTheme,
  mediaQueries,
};

export const darkModeTheme = {
  appBackgroundColor: "#333",
  form: {
    textColor: "#eee",
    input: inputDarkTheme,
  },
  typography: typographyDarkTheme,
  button: buttonDarkTheme,
  checkbox: checkboxDarkTheme,
  mediaQueries,
};
