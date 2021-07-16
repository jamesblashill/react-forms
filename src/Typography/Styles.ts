import { StandardPropertiesHyphen } from "csstype";
import styled, { DefaultTheme } from "styled-components";

import { lightTheme } from "./Themes";
import {
  TypographyVariant,
  TypographyProps,
  TypographyTags,
  TypographyVariants,
} from "./Types";

const variantTagMap: { [key in TypographyVariants]: TypographyTags } = {
  displayXL: "h1",
  displayL: "h2",
  displayM: "h3",
  displayS: "h4",
  pageHeader: "h5",
  body: "p",
  label: "p",
};

export const Variant = (variant: TypographyVariant) =>
  variant
    ? Object.keys(variant)
        .map((key) => `${key}: ${variant[key]};`)
        .join("")
    : "";
export const Italic = "font-style: italic";
export const Strikethrough = "text-decoration: line-through";
export const Align = (align: StandardPropertiesHyphen["text-align"]) => `text-align: ${align}`;

export const Truncate = `
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MaxLines = (
  maxLines: number,
  lineHeight: TypographyVariant["line-height"]
) => `
  -webkit-line-clamp: ${maxLines};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: calc(${lineHeight} * ${maxLines}),
  text-overflow: ellipsis;
`;

export const TypographyStyles = ({
  theme,
  variant = "body",
  color = "primary",
  font,
  italic,
  align,
  truncate,
  maxLines,
  strikethrough,
}: TypographyProps & { theme?: DefaultTheme }) => {
  const _theme = theme ? theme["typography"] || lightTheme : lightTheme;
  const _font = font || "sans";
  return `
    margin: 0;
    padding: 0;
    color: ${_theme["color"][color]};
    ${Variant(_theme[_font][variant])};
    ${italic ? Italic : ""};
    ${align ? Align(align) : ""};
    ${strikethrough ? Strikethrough : ""};
    ${truncate ? Truncate : ""};
    ${
      maxLines && maxLines > 0
        ? MaxLines(maxLines, _theme[_font][variant]["lineHeight"])
        : ""
    };   
  `;
};

export const Typography = styled.p.attrs<TypographyProps>(
  ({ as, variant = "body" }) => ({
    as: as || variantTagMap[variant],
  })
)<TypographyProps>`
  ${(props) => TypographyStyles(props)}
`;
