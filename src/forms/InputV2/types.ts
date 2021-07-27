import React from "react";

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

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  label?: React.ReactNode;
  helper?: React.ReactNode;
  error?: string | boolean;
  /** React Node that will be placed before the text, but inside of the input border. */
  prefixNode?: React.ReactNode;
  /** React Node that will be placed after the text, but inside of the input border. */
  suffixNode?: React.ReactNode;
};
