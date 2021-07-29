import { IDocument } from "@faire/web-api/indigofair/data/IDocument";
import { pluralize } from "@faire/web-common/compiled_lib/string";
import { FaTimes, FaUpload } from "react-icons/fa";
import { isEmpty, uniqueId } from "lodash";
import * as React from "react";
import { DropFilesEventHandler } from "react-dropzone";
import styled from "styled-components";

import { Column, Row } from "../../Layout";
import { Typography } from "../../Typography";
import { Spacer } from "../../Spacer";
import Color from "../../Color";
import { LoadingSpinner } from "../../CircleSpinner";

import { UploadBase } from "./UploadBase";

const MAX_DOCUMENT_SIZE = 25 * 1024 * 1024;

export interface IProps {
  onChange: (files: IDocument[]) => void;
  files: IDocument[];
  "data-test-id"?: string;
}

interface IState {
  loading: boolean;
  error?: string;
}

export class Dropzone extends React.Component<IProps, IState> {
  state = {
    loading: false,
    error: undefined,
  }

  private handleOnDrop: DropFilesEventHandler = async (
    acceptedFiles: File[],
    rejectedFiles: File[]
  ) => {
    if (!isEmpty(rejectedFiles)) {
      this.setState({ error: getErrorMessage(rejectedFiles) });
    } else if (!isEmpty(acceptedFiles)) {
      this.setState({ loading: true, error: undefined });
      try {
        const files = await Promise.all(
          acceptedFiles.map((documentFile: File) => ({
            token: uniqueId(),
            url: "Some test url",
            file_name: documentFile.name,
            created_at: Date.now(),
          })),
        );
        this.props.onChange([...this.props.files.concat(files)]);
      } catch (error) {
        this.setState({ error: error.message || getErrorMessage(acceptedFiles) });
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  private handleRemove = (token?: string) => () => {
    this.props.onChange([
      ...this.props.files.filter((file) => file.token !== token),
    ]);
  };

  render() {
    const { error, loading } = this.state;

    return (
      <Column align="center" style={{ width: "100%" }}>
        <StyledUploadBase
          onDrop={this.handleOnDrop}
          maxSize={MAX_DOCUMENT_SIZE}
          hasError={!!error}
          data-test-id={`upload-${this.props["data-test-id"]}`}
        >
          {loading ? (
            <LoadingSpinner size="medium" />
          ) : (
            <>
              <FaUpload width="16px" color="primary" />
              <Spacer size={10} />
              <Typography color="primary">
                {this.props.children}
                Select files to upload
              </Typography>
            </>
          )}
        </StyledUploadBase>
        {error ? (
          <Typography color="error">{error}</Typography>
        ) : null}
        {this.props.files.map((file) => (
          <UploadedDocumentRow key={file.token}>
            <Typography>{file.file_name}</Typography>
            <CloseButton onClick={this.handleRemove(file.token)}>
              <FaTimes width="15px" height="15px" color={Color.faireBlack} />
            </CloseButton>
          </UploadedDocumentRow>
        ))}
      </Column>
    );
  }
}

const getErrorMessage = (files: File[]) =>
  `Failed to upload ${pluralize("file", files.length)}. Please try again.`;

const StyledUploadBase = styled(UploadBase)<{ hasError: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 64px;

  cursor: pointer;
  border: 1px dashed
    ${({ hasError }) => (hasError ? Color.alert : Color.asphalt)};
  background-color: ${Color.linen};
`;

const UploadedDocumentRow = styled(Row).attrs({
  justify: "space-between",
  align: "center",
})`
  width: 100%;
  background-color: ${Color.fog};
  padding: 0px 12px;
  height: 40px;

  margin-top: 20px;

  & + & {
    margin-top: 8px;
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
  padding: 8px;
`;
