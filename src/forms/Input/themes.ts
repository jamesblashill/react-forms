export type InputTheme = {
  backgroundColor: string;
  disabledBackgroundColor: string;
  errorColor: string;
  height: string;
  borderColor: string;
  focusBorderColor: string;
  placeholderColor: string;
  font: {
    family: string;
    size: string;
  };
};

export const themes: { [key: string]: InputTheme } = {
  light: {
    backgroundColor: "#fff",
    disabledBackgroundColor: "#f8f8f8",
    errorColor: "#b50303",
    height: "42px",
    borderColor: "#ccc",
    focusBorderColor: "#333",
    placeholderColor: "#757575",
    font: {
      family: "Helvetica",
      size: "12px",
    },
  },
  dark: {
    backgroundColor: "#333",
    disabledBackgroundColor: "#ccc",
    errorColor: "#b50303",
    height: "42px",
    borderColor: "#666",
    focusBorderColor: "#fff",
    placeholderColor: "#aaa",
    font: {
      family: "Helvetica",
      size: "12px",
    },
  },
};
