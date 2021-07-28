import { Color, TypographyTheme, TypographyVariant } from "./Types";

const variantGenerator = (
  fontFamily: TypographyVariant["font-family"],
  fontWeight: TypographyVariant["font-weight"],
  fontSize: TypographyVariant["font-size"],
  lineHeight: TypographyVariant["line-height"],
  letterSpacing: TypographyVariant["letter-spacing"]
) => {
  return {
    "font-family": fontFamily,
    "font-weight": fontWeight,
    "font-size": fontSize,
    "line-height": lineHeight,
    "letter-spacing": letterSpacing,
  };
};

const serif = "georgia, serif";
const sans = "Helvetica, sans-serif";
const light: {
  [key in Color]: string;
} = {
  primary: "#333",
  secondary: "#757575",
  tertiary: "#FFF",
  error: "#B50303",
};

const dark: {
  [key in Color]: string;
} = {
  primary: "#FFF",
  secondary: "#757575",
  tertiary: "#333",
  error: "#B50303",
};

const fonts = {
  serif: {
    displayXL: variantGenerator(serif, 200, "52px", "64px", "0"),
    displayL: variantGenerator(serif, 200, "38px", "50px", "0"),
    displayM: variantGenerator(serif, 200, "30px", "38px", "0"),
    displayS: variantGenerator(serif, 200, "22px", "32px", "0"),
    pageHeader: variantGenerator(serif, 200, "18px", "26px", "0"),
    body: variantGenerator(serif, 200, "14px", "20px", "0"),
    label: variantGenerator(serif, 200, "12px", "16px", "0"),
  },
  sans: {
    displayXL: variantGenerator(sans, 700, "52px", "64px", "0.15px"),
    displayL: variantGenerator(sans, 700, "38px", "50px", "0.15px"),
    displayM: variantGenerator(sans, 400, "30px", "38px", "0.15px"),
    displayS: variantGenerator(sans, 400, "22px", "32px", "0.15px"),
    pageHeader: variantGenerator(sans, 400, "18px", "26px", "0.15px"),
    body: variantGenerator(sans, 200, "14px", "20px", "0.15px"),
    label: variantGenerator(sans, 200, "12px", "16px", "0.15px"),
  },
};

export const lightTheme: TypographyTheme = {
  ...fonts,
  color: light,
};

export const darkTheme: TypographyTheme = {
  ...fonts,
  color: dark,
};
