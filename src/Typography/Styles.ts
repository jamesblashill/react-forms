import { StandardPropertiesHyphen } from "csstype";
import styled, { DefaultTheme } from "styled-components";

import { breakpoints } from "../theme";
import { MediaQueries } from "../Media2Strings";

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
  const _theme = theme && Object.entries(theme).length !== 0 ? theme["typography"] || lightTheme : lightTheme;
  const mediaQueries = theme && Object.entries(theme).length !== 0 ? theme["mediaQueries"] : new MediaQueries(breakpoints);
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

    ${mediaQueries.tabletAndAbove} {
      ${typeof variant === "object" && variant.tabletAndAbove ? Variant(_theme["fonts"][variant.tabletAndAbove]) : ""}
    }

    ${mediaQueries.desktopAndAbove} {
      ${typeof variant === "object" && variant.desktopAndAbove ? Variant(_theme["fonts"][variant.desktopAndAbove]) : ""}
    }
  `;
};

export const Typography = styled.p.attrs<TypographyProps>(
  ({ as, variant = "paragraphSansRegular" }) => ({
    as: as || variantTagMap[typeof variant === "object" ? variant.mobileAndAbove : variant],
  })
)<TypographyProps>`
  ${(props) => TypographyStyles(props)}
`;
