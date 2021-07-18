import * as React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "../forms/Button";
import { ErrorText } from "../forms/ErrorText";
import { HelperText } from "../forms/HelperText";
import { Input } from "../forms/Input";
import { Label } from "../forms/Label";
import { unboxFormEventValue } from "../forms/unboxFormEventValue";
import { Spacer } from "../Spacer";

export const SignupForm: React.FC<{}> = () => {
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const lastInvalid = last.length < 4;

  return (
    <Container>
      <FormFields>
        <FormField name="firstName">
          <Label>
            First Name
            <Input
              onChange={unboxFormEventValue(setFirst)}
              value={first}
              placeholder="Enter your first name"
            />
            <HelperText>This is your given name</HelperText>
          </Label>
        </FormField>
        <FormField name="lastName">
          <Label hasError={lastInvalid}>
            Last Name
            <Input
              onChange={unboxFormEventValue(setLast)}
              value={last}
              placeholder="Enter your last name"
              hasError={lastInvalid}
            />
            {lastInvalid && <ErrorText>Invalid last name</ErrorText>}
          </Label>
        </FormField>
        <FormField name="email">
          <Label>
            Email
            <Input
              onChange={unboxFormEventValue(setEmail)}
              value={email}
              placeholder="your.name@example.com"
            />
          </Label>
        </FormField>
        <FormField name="phone">
          <Label>
            Phone
            <Input
              onChange={unboxFormEventValue(setPhone)}
              value={phone}
              placeholder="226066343"
            />
          </Label>
        </FormField>
        <FormField name="password">
          <Label>
            Password
            <Input
              onChange={unboxFormEventValue(setPassword)}
              value={password}
              suffixNode={
                <ToggleShowPasswordButton
                  showPassword={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                />
              }
              type={showPassword ? "text" : "password"}
            />
          </Label>
        </FormField>
      </FormFields>
      <Spacer size={30} />
      <Button>Sign Up</Button>
    </Container>
  );
};

const Container = styled.div`
  margin: 30px auto;
  width: 500px;
`;

const FormFields = styled.div`
  display: grid;
  grid-template-areas:
    "firstName lastName"
    "email email"
    "phone phone"
    "password password";
  grid-gap: 30px 10px;
`;

const FormField = styled.div<{ name: string }>`
  grid-area: ${(props) => props.name};
`;

const ToggleShowPasswordButton: React.FC<{
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
