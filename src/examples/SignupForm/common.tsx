import * as React from 'react';
import styled from "styled-components";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Spacer } from "../../Spacer";

export const Container = styled.div`
  margin: 30px auto;
  width: 500px;
`;

export const FormFields = styled.div`
  display: grid;
  grid-template-areas:
    "firstName lastName"
    "email email"
    "phone phone"
    "password password"
    "files files";
  grid-gap: 30px 10px;
`;

export const FormField = styled.div<{ name: string }>`
  grid-area: ${(props) => props.name};
`;

export const ToggleShowPasswordButton: React.FC<{
  showPassword: boolean;
  onClick: () => void;
}> = ({ showPassword, onClick }) => {
  const EyeIcon = showPassword ? FaRegEye : FaRegEyeSlash;

  return (
    <>
      <Spacer size={16} />
      <EyeIcon style={{ cursor: "pointer" }} onClick={onClick} />
      <Spacer size={16} />
    </>
  );
};

export const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
