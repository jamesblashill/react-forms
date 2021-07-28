/* eslint-disable  filenames/match-exported */
const Faire = {
  Text: {
    faireBlack: "#333333",
    slate: "#666666",
    darkGold: "#b4804e",
    graphite: "#757575",
    alert: "#B50303",
  },
  Hilight: {
    richBlack: "#000000",
  },
};

export const EventColors = {
  /** @deprecated */
  arcticBlue: "#d3eae3",
  /** @deprecated */
  burgundy: "#943631",
  /** @deprecated */
  mint: "#cbe3ca",
  /** @deprecated */
  peach: "#fdd9bf",
  /** @deprecated */
  redPepper: "#ed5b33",
  /** @deprecated */
  saffron: "#ebb337",
  /** @deprecated */
  emerald: "#005553",
  /** @deprecated */
  eggnog: "#F9F4EE",
  /** @deprecated */
  chartreuse: "#A08C4E",
  /** @deprecated */
  pine: "#143332",
  /** @deprecated */
  sienna: "#B24A38",
  /** @deprecated */
  crystal: "#B2C5DB",
  /** @deprecated */
  badgeBlue: "#569BEC",

  darkIris: "#324094",
  iris: "#5262C7",
  pool: "#CAD6FF",
  lilac: "#F5CBFF",
  richLilac: "#E98FFF",
  apricot: "#FFAD7F",
  dune: "#E8D2B9",
  boysenberry: "#7F263C",
  zion: "#DA5C39",
  guac: "#D7D37D",
  paleLilac: "#FFF1FC",
  kiddiePool: "#F2F5FF",
  paleApricot: "#FFEEE5",
  whiteSand: "#FFFCF6",
  deepIris: "#2936A7",

  FashionWeekGreen: "#DBFF49",
  FashionWeekPurple: "#E0E3FF",
} as const;

const Colors = {
  ...Faire.Hilight,
  ...Faire.Text,

  aqua: "#a6c5d0",
  asphalt: "#aaaaaa",
  avocado: "#d1cead",
  battleshipGray: "#808A6E",
  blush: "#C9907B",
  bone: "#dbd6d2",
  cabernet: "#7c4659",
  cardemon: "#f1d9a5",
  champagne: "#fcf7f2",
  cinnamon: "#773c27",
  dandelion: "#F5CE81",
  dove: "#cccccc",
  dust: "#bda6ad",
  fog: "#eaeaea",
  forest: "#7c978e",
  gold: "#cb9968",
  hazel: "#946951",
  indigo: "#848A9F",
  lightGreen: "#edf2ea",
  linen: "#f8f8f8",
  marigold: "#e0b881",
  mist: "#bfd0d7",
  mustard: "#d09954",
  olive: "#50583D",
  passionFruit: "#D7470A",
  peacock: "#2b413e",
  pearl: "#FCEAC7",
  peppermint: "#d8dfd5",
  pewter: "#888888",
  pinot: "#a0818e",
  raspberry: "#d6b4be",
  sea: "#b9dbbc",
  seaweed: "#2f4743",
  sky: "#dae9e5",
  spruce: "#768783",
  tanHide: "#F9996F",
  toast: "#97735C",
  vanilla: "#f9f5f0",
  white: "#ffffff",

  /**
   * Usage is reserved for components with educational purposes (i.e. tooltips).
   */
  frost: "#E1ECFD",

  // Faire Summer/Winter Markets
  ...EventColors,

  // Neighborhood.
  milk: "#F7F7F7",
  cream: "#F8F8F3",
  moss: "#677161",

  /** Reserved for Top Shop Program only. Please do not use outside of the Top Shop Program */
  lichen: "#EDF0E6",
  sage: "#8B9478",
} as const;

/**
 * Faire's named colors.
 */
export type ColorKey = keyof typeof Colors;

/**
 * Faire's named color palette.
 * @trackobjectkeys
 */
export const Color = Colors;

/**
 * Type for restricting a color string value to one of Faire's
 * color palette values.
 */
export type Color = typeof Colors[ColorKey];

/**
 * Helper type for extracting the color names or values from a subset
 * of color keys, e.g. the TextColor type.
 */
export type ColorsOrKeys<T extends ColorKey> = T | typeof Colors[T];

/**
 * Faire's named colors, or their values
 */
export type ColorOrKey = ColorsOrKeys<ColorKey>;

// NOTE(luke): AFAIK there's no good way to extract a subset at runtime.
const TextColors = {
  // B&W spectrum
  asphalt: Colors.asphalt,
  dove: Colors.dove,
  fog: Colors.fog,
  linen: Colors.linen,
  pewter: Colors.pewter,
  white: Colors.white,
  passionFruit: Color.passionFruit,

  // Text
  ...Faire.Hilight,
  ...Faire.Text,
} as const;

// Safety check. There'll be a compile error if above we put
// foo: Colors.bar
(function safetyCheck() {
  const x: {
    [key in keyof typeof Colors]?: typeof Colors[key];
  } = TextColors;
  return x;
})();

/**
 * Color keys allowed for Faire's text palette.
 */
export type TextColorKey = keyof typeof TextColors;

/**
 * Color names and values allowed for Faire's text palette.
 */
export type TextColorOrKey = ColorsOrKeys<TextColorKey>;

export type TextColor = typeof TextColors[TextColorKey];

/**
 * Subset of Colors that are usable for text.
 */
export const TextColor = TextColors;

export const deprecatedColors: ColorKey[] = [
  "arcticBlue",
  "burgundy",
  "mint",
  "peach",
  "redPepper",
  "saffron",
  "emerald",
  "eggnog",
  "chartreuse",
  "pine",
  "sienna",
  "crystal",
  "badgeBlue",
];

export const Opacity = {
  O_95: "F2",
  O_90: "E6",
  O_85: "D9",
  O_80: "CC",
  O_75: "BF",
  O_70: "B3",
  O_65: "A6",
  O_60: "99",
  O_55: "8C",
  O_50: "80",
  O_45: "73",
  O_40: "66",
  O_35: "59",
  O_30: "4D",
  O_25: "40",
  O_20: "33",
  O_15: "26",
  O_10: "1A",
  O_05: "0D",
} as const;

export default Color;
