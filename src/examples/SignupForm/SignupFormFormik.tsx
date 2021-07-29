import { Formik } from "formik";
import * as React from "react";
import { useCallback } from "react";
import * as Yup from "yup";
import { Button } from "../../forms/Button";
import { Input } from "../../forms/InputV2";
import { Label } from "../../forms/Label";
import { Spacer } from "../../Spacer";
import { Row } from "../../Layout";
import { Container, FormField, FormFields, ToggleShowPasswordButton } from "./common";
import { Checkbox } from "../../forms/Checkbox";
// import { Dropzone } from '../../forms/Dropzone';
// import { IDocument } from "@faire/web-api/indigofair/data/IDocument";

const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

// const DocumentSchema: Yup.SchemaOf<IDocument> = Yup.object({
//   created_at: Yup.number().defined(),
//   file_name: Yup.string().defined(),
//   token: Yup.string().defined(),
//   url: Yup.string().defined(),
// });

const SignUpSchema = Yup.object().shape({
  first: Yup
    .string()
    .defined("Please enter a firstname"),
  last: Yup
    .string()
    .defined("Please enter a lastname"),
  email: Yup
    .string()
    .email()
    .defined("Please enter an email"),
  allowedSpam: Yup.boolean(),
  phone: Yup
    .string()
    .matches(phoneRegex, 'Please enter a valid phone number!')
    .defined("Please enter a phone number"),
  password: Yup
    .string()
    .min(4, "Password must be more than 4 characters")
    .defined("Please enter a password"),
  // files: Yup.array().of(DocumentSchema),
});

export interface ISignUpFormValues extends Yup.TypeOf<typeof SignUpSchema> {}

const SignUpInitial: ISignUpFormValues = SignUpSchema.cast({
  first: "",
  last: "",
  email: "",
  phone: "",
  password: "",
  allowedSpam: false,
});

export const SignupFormFormik: React.FC<{ onSubmit: (values: ISignUpFormValues) => void }> = (props) => {
  const { onSubmit } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = useCallback((values: ISignUpFormValues) => {
    onSubmit(values);
  }, [onSubmit]);

  return (
    <Formik
      initialValues={SignUpInitial}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, submitForm }) => {
        const showAllowedSpam = values.email && !errors.email;
        const formLayoutTemplate = [
          "firstName lastName",
          "email email",
          ...(showAllowedSpam ? ["allowedSpam allowedSpam"] : []),
          "phone phone",
          "password password",
          "files files",
        ];
        return (
          <Container>
            <FormFields template={formLayoutTemplate}>
              <FormField name="firstName">
                <Input
                  name="first"
                  label="First Name"
                  helper="This is your given name"
                  error={touched.first ? errors.first : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first}
                  placeholder="Enter your first name"
                />
              </FormField>
              <FormField name="lastName">
                <Input
                  name="last"
                  label="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last}
                  placeholder="Enter your last name"
                  error={touched.last && errors.last}
                />
              </FormField>
              <FormField name="email">
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="your.name@example.com"
                  error={touched.email && errors.email}
                />
              </FormField>
              {values.email && !errors.email && (
                <FormField name="allowedSpam">
                  <Checkbox label="Allow us to send you da spam." id="allowedSpam" name="allowedSpam" />
                </FormField>
              )}
              <FormField name="phone">
                <Input
                  name="phone"
                  label="Phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="226066343"
                  error={touched.phone && errors.phone}
                />
              </FormField>
              <FormField name="password">
                <Input
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  suffixNode={
                    <ToggleShowPasswordButton
                      showPassword={showPassword}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  }
                  error={touched.password && errors.password}
                  type={showPassword ? "text" : "password"}
                />
              </FormField>
              {/* <FormField name="files">
                <Dropzone
                  onChange={onChange}
                  files={values.files}
                />
              </FormField> */}
            </FormFields>
            <Spacer size={30} />
            <Button type="submit" onClick={submitForm}>Sign Up</Button>
          </Container>
        );
      }}
    </Formik>
  );
};
