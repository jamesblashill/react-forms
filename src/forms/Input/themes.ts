import { InputTheme } from "./types";

export const lightTheme: InputTheme = {
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
  }
}

export const darkTheme: InputTheme = {
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
};
