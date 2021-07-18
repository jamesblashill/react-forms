import { ButtonTheme } from "./types";

export const lightTheme: ButtonTheme = {
  backgroundColor: "#333",
  textColor: "white",
  borderColor: "#333",
  hover: {
    backgroundColor: "white",
    textColor: "#333",
    borderColor: "#333",
  },
  disabled: {
    backgroundColor: "#ccc",
    textColor: "#666",
    borderColor: "#666",
  },
};

export const darkTheme: ButtonTheme = {
  backgroundColor: "white",
  textColor: "#333",
  borderColor: "#333",
  hover: {
    backgroundColor: "#333",
    textColor: "white",
    borderColor: "#333",
  },
  disabled: {
    backgroundColor: "#ccc",
    textColor: "#666",
    borderColor: "#666",
  },
};
