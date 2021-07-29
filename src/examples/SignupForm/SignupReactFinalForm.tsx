import * as React from "react";
import { Field, Form } from "react-final-form";
import { Button } from "../../forms/Button";
import { ErrorText } from "../../forms/ErrorText";
import { HelperText } from "../../forms/HelperText";
import { Input } from "../../forms/Input";
import { Label } from "../../forms/Label";
import { Spacer } from "../../Spacer";
import { Container, FormField, FormFields, ToggleShowPasswordButton } from "./common";

interface ISignupFormInputs {
  first: string,
  last: string,
  email: string,
  phone: string,
  password: string,
}

const intialValues: ISignupFormInputs = {
  first: "",
  last: "",
  email: "",
  phone: "",
  password: "",
};

const formLayoutTemplate = [
  "firstName lastName",
  "email email",
  "phone phone",
  "password password",
];

export const SignupReactFinalForm: React.FC<{}> = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = React.useCallback((values) => {
    console.log("values", values);
  }, []);

  return (
    <Container>
      <Form<ISignupFormInputs>
        initialValues={intialValues}
        onSubmit={onSubmit}
      >
        {() => (
          <FormFields template={formLayoutTemplate}>
            <FormField name="firstName">
              <Field name="first">
                {({ input, meta }) => (
                  <Label>
                    First Name
                    <Input {...input} hasError={meta.error && meta.touched} placeholder="Enter your first name" />
                    {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
                    {!(meta.error && meta.touched) && <HelperText>This is your given name</HelperText>}
                  </Label>
                )}
              </Field>
            </FormField>
            <FormField name="lastName">
              <Field name="last">
                {({ input, meta }) => (
                  <Label>
                    Last Name
                    <Input {...input} hasError={meta.error && meta.touched} placeholder="Enter your last name" />
                    {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
                  </Label>
                )}
              </Field>
            </FormField>
            <FormField name="email">
              <Field name="email">
                {({ input, meta }) => (
                  <Label>
                    Email
                    <Input {...input} type="email" hasError={meta.error && meta.touched} placeholder="your.name@example.com" />
                    {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
                  </Label>
                )}
              </Field>
            </FormField>
            <FormField name="phone">
              <Field name="phone">
                {({ input, meta }) => (
                  <Label>
                    Phone
                    <Input {...input} hasError={meta.error && meta.touched} placeholder="226-066-3435" />
                    {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
                  </Label>
                )}
              </Field>
            </FormField>
            <FormField name="password">
              <Field name="password">
                {({ input, meta }) => (
                  <Label>
                    Password
                    <Input
                      {...input}
                      hasError={meta.error && meta.touched}
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      suffixNode={
                        <ToggleShowPasswordButton
                          showPassword={showPassword}
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      }
                    />
                    {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
                  </Label>
                )}
              </Field>
            </FormField>
          </FormFields>
        )}
      </Form>
      <Spacer size={30} />
      <Button>Sign Up</Button>
    </Container>
  );
};
