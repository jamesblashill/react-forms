import * as React from "react";
import { Button } from "../../forms/Button";
import { Input } from "../../forms/InputV2";
import { Spacer } from "../../Spacer";
import { FormField, FormFields, ToggleShowPasswordButton } from "./common";
import { Dropzone } from '../../forms/Dropzone';
import { IDocument } from "@faire/web-api/indigofair/data/IDocument";
import { FaireForm } from "../../forms/Form";

const formLayoutTemplate = [
  "firstName lastName",
  "email email",
  "phone phone",
  "password password",
  "files files"
];

export const SignupFormCustom: React.FC<{}> = () => {
  const [files, setFiles] = React.useState<IDocument[]>([]);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <FaireForm onSubmit={values => console.log(values)} initialValues={{firstName: '', lastName: '', email: '', phone: '', password: ''}}>
      {({ handleChange, values }) => (
        <>
          <FormFields template={formLayoutTemplate}>
            <FormField name="firstName">
              <Input
                label="First Name"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                placeholder="Enter your first name"
                helper="This is your given name"
              />
            </FormField>
            <FormField name="lastName">
              <Input
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                placeholder="Enter your last name"
                // hasError={lastInvalid}
              />
            </FormField>
            <FormField name="email">
              <Input
                name="email"
                label="Email"
                onChange={handleChange}
                value={values.email}
                placeholder="your.name@example.com"
              />
            </FormField>
            <FormField name="phone">
              <Input
                name="phone"
                label="phone"
                onChange={handleChange}
                value={values.phone}
                placeholder="226066343"
              />
            </FormField>
            <FormField name="password">
              <Input
                name="password"
                label="password"
                onChange={handleChange}
                value={values.password}
                suffixNode={
                  <ToggleShowPasswordButton
                    showPassword={showPassword}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                }
                type={showPassword ? "text" : "password"}
              />
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
        </>
      )}
    </FaireForm>
  );
};
