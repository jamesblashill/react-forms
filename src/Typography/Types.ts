import { StandardPropertiesHyphen } from "csstype";

export type TypographyVariants =
  | "displayXLSerifRegular"
  | "displayLSerifRegular"
  | "displayMSerifRegular"
  | "displaySSerifRegular"
  | "displaySSansSemiBold"
  | "displaySSansRegular"
  | "pageHeaderSerifRegular"
  | "sectionHeaderSansMedium"
  | "subheadingSansMedium"
  | "subheadingSansRegular"
  | "paragraphSansMedium"
  | "paragraphSansRegular"
  | "labelSansRegular";

export type ResponsiveTypographyVariants = {
  mobile: TypographyVariants;
  tablet?: TypographyVariants;
  desktop?: TypographyVariants;
}

export type TypographyTags = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "label";
export type Color = "primary" | "secondary" | "tertiary" | "error";
export type TypographyVariant = Pick<
  StandardPropertiesHyphen,
  "font-family" | "font-size" | "font-weight" | "letter-spacing" | "line-height"
>;
export type TypographyTheme = {
  fonts: {
    [key in TypographyVariants]: TypographyVariant;
  }
} & {
  color: {
    [key in Color]: string;
  }
};

export interface TypographyProps {
  /** The tag rendered to the dom */
  as?: TypographyTags;
  /** The set of base css font styles to be applied to the component */
  variant?: TypographyVariants | ResponsiveTypographyVariants;
  /** Sets the font color */
  color?: Color;
  /** Sets the text-align css property */
  align?: StandardPropertiesHyphen["text-align"];
  /** If true and the text is larger than its parent container, the text will truncate using an ellipsis */
  truncate?: boolean;
  /** If set, the text will truncate using an ellipsis after a set number of lines of text. */
  maxLines?: number;
  "data-test-id"?: string;
}
