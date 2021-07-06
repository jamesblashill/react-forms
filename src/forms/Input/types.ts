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

export type InputProps = {
  hasError?: boolean;
  isDisabled?: boolean;
  onChange: (value: string) => void;
  /** React Node that will be placed before the text, but inside of the input border. */
  prefixNode?: React.ReactNode;
  /** React Node that will be placed after the text, but inside of the input border. */
  suffixNode?: React.ReactNode;
  /**
   * Specifies visual details of the input component. If none provided,
   * then `InputThemeDefault` will be used.
   */
  inputElementProps?: React.HTMLAttributes<HTMLInputElement>;
  value: string;
  testId?: string;
  placeholder?: string;
  type?: string;
};