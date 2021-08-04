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
  displayXLSerifRegular: "h1",
  displayLSerifRegular: "h2",
  displayMSerifRegular: "h3",
  displaySSansSemiBold: "h4",
  displaySSansRegular: "h4",
  displaySSerifRegular: "h4",
  pageHeaderSerifRegular: "h4",
  sectionHeaderSansMedium: "h5",
  subheadingSansRegular: "h5",
  subheadingSansMedium: "h5",
  paragraphSansRegular: "p",
  paragraphSansMedium: "p",
  labelSansRegular: "p",
};

export const Variant = (variant: TypographyVariant) =>
  variant
    ? Object.keys(variant)
        .map((key) => `${key}: ${variant[key]};`)
        .join("")
    : "";
export const Align = (align: StandardPropertiesHyphen["text-align"]) =>
  `text-align: ${align}`;

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
  variant = "paragraphSansRegular",
  color = "primary",
  align,
  truncate,
  maxLines,
}: TypographyProps & { theme?: DefaultTheme }) => {
  const _theme = theme ? theme["typography"] || lightTheme : lightTheme;
  const _variant = typeof variant === "string" ? variant : variant.mobile;
  return `
    margin: 0;
    padding: 0;
    color: ${_theme["color"][color]};
    ${Variant(_theme["fonts"][_variant])};
    ${align ? Align(align) : ""};
    ${truncate ? Truncate : ""};
    ${
      maxLines && maxLines > 0
        ? MaxLines(maxLines, _theme["fonts"][_variant]["lineHeight"])
        : ""
    };

    @media only screen and (min-width: 768px) {
      ${typeof variant === "object" && variant.tablet ? Variant(_theme["fonts"][variant.tablet]) : ""}
    }

    @media only screen and (min-width: 1280px) {
      ${typeof variant === "object" && variant.desktop ? Variant(_theme["fonts"][variant.desktop]) : ""}
    }
  `;
};

export const Typography = styled.p.attrs<TypographyProps>(
  ({ as, variant = "body" }) => ({
    as: as || variantTagMap[typeof variant === "object" ? variant.mobile : variant],
  })
)<TypographyProps>`
  ${(props) => TypographyStyles(props)}
`;
