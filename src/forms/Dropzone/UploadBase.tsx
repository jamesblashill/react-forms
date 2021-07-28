import React from "react";
import Dropzone, { DropzoneProps } from "react-dropzone";
import { generate } from "shortid";

const defaultClassName = generate();

export const UploadBase: React.FunctionComponent<DropzoneProps> = (props) => {
  const childProps = {
    className: defaultClassName,
    ...props,
  };

  return <Dropzone {...childProps}>{props.children}</Dropzone>;
};
