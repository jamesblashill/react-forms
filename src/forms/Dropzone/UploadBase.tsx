import React from "react";
import Dropzone, { DropzoneProps } from "react-dropzone";
import { generate } from "shortid";

const defaultClassName = generate();

interface IUploadBase extends DropzoneProps {
  hasError: boolean;
}

export const UploadBase: React.FunctionComponent<IUploadBase> = ({ hasError, ...props}) => {
  const childProps = {
    className: defaultClassName,
    ...props,
  };

  return <Dropzone {...childProps}>{props.children}</Dropzone>;
};
