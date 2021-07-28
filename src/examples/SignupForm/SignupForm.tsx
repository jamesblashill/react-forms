import * as React from "react";
import { Button } from "../../forms/Button";
import { ErrorText } from "../../forms/ErrorText";
import { HelperText } from "../../forms/HelperText";
import { Input } from "../../forms/Input";
import { Label } from "../../forms/Label";
import { unboxFormEventValue } from "../../forms/unboxFormEventValue";
import { Spacer } from "../../Spacer";
import { Container, FormField, FormFields, ToggleShowPasswordButton } from "./common";
import { Dropzone } from '../forms/Dropzone';
import { IDocument } from "@faire/web-api/indigofair/data/IDocument";

export const SignupForm: React.FC<{}> = () => {
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [files, setFiles] = React.useState<IDocument[]>([]);
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
        <FormField name="files">
            <Dropzone
              onChange={setFiles}
              files={files}
            />
        </FormField>
      </FormFields>
      <Spacer size={30} />
      <Button>Sign Up</Button>
    </Container>
  );
};
