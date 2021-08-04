import { Color, TypographyTheme, TypographyVariant } from "./Types";

const generateTypographyVariant = (
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

const fonts: TypographyTheme["fonts"] = {
  displayXLSerifRegular: generateTypographyVariant(serif, 400, "72px", "86px", 0),
  displayLSerifRegular: generateTypographyVariant(serif, 400, "52px", "64px", 0),
  displayMSerifRegular: generateTypographyVariant(serif, 400, "38px", "50px", 0),
  displaySSerifRegular: generateTypographyVariant(serif, 400, "30px", "38px", 0),
  displaySSansRegular: generateTypographyVariant(sans, 400, "30px", "38px", "0.15px"),
  displaySSansSemiBold: generateTypographyVariant(sans, 700, "30px", "38px", "0.15px"),
  pageHeaderSerifRegular: generateTypographyVariant(serif, 400, "22px", "32px", 0),
  sectionHeaderSansMedium: generateTypographyVariant(sans, 400, "22px", "32px", "0.15px"),
  subheadingSansMedium: generateTypographyVariant(sans, 500, "18px", "26px", "0.15px"),
  subheadingSansRegular: generateTypographyVariant(sans, 400, "18px", "26px", "0.15px"),
  paragraphSansMedium: generateTypographyVariant(sans, 500, "14px", "20px", "0.15px"),
  paragraphSansRegular: generateTypographyVariant(sans, 400, "14px", "20px", "0.15px"),
  labelSansRegular: generateTypographyVariant(sans, 400, "12px", "16px", "0.15px"),

};

export const lightTheme: TypographyTheme = {
  fonts,
  color: light,
};

export const darkTheme: TypographyTheme = {
  fonts,
  color: dark,
};
