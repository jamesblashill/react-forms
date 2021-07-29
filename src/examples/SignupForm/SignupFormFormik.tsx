import { Formik } from "formik";
import * as React from "react";
import { useCallback } from "react";
import * as Yup from "yup";
import { Button } from "../../forms/Button";
import { ErrorText } from "../../forms/ErrorText";
import { HelperText } from "../../forms/HelperText";
import { Input } from "../../forms/Input";
import { Label } from "../../forms/Label";
import { Spacer } from "../../Spacer";
import { Container, FormField, FormFields, ToggleShowPasswordButton } from "./common";

const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

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
    .defined("Please enter a email"),
  phone: Yup
    .string()
    .matches(phoneRegex, 'Please enter a valid phone number!')
    .defined("Please enter a phone number"),
  password: Yup
    .string()
    .min(4, "Password must be more than 4 characters")
    .defined("Please enter a password"),
});

interface ISignUpFormValues extends Yup.TypeOf<typeof SignUpSchema> {}

const SignUpInitial: ISignUpFormValues = SignUpSchema.cast({
  first: "",
  last: "",
  email: "",
  phone: "",
  password: "",
})

export const SignupFormFormik: React.FC<{}> = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = useCallback((values: ISignUpFormValues) => {
    console.log("values", values);
  }, []);

  return (
    <Formik
      initialValues={SignUpInitial}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, submitForm }) => (
        <Container>
          <FormFields>
            <FormField name="firstName">
              <Label hasError={!!errors.first && touched.first}>
                First Name
                <Input
                  name="first"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first}
                  placeholder="Enter your first name"
                  hasError={!!errors.first && touched.first}
                />
                {errors.first && touched.first && <ErrorText>{errors.first}</ErrorText>}
                {!errors.first && !touched.first && <HelperText>This is your given name</HelperText>}
              </Label>
            </FormField>
            <FormField name="lastName">
              <Label hasError={!!errors.last && touched.last}>
                Last Name
                <Input
                  name="last"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last}
                  placeholder="Enter your last name"
                  hasError={!!errors.last && touched.last}
                />
                {errors.last && touched.last && <ErrorText>{errors.last}</ErrorText>}
              </Label>
            </FormField>
            <FormField name="email">
              <Label hasError={!!errors.email && touched.email}>
                Email
                <Input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="your.name@example.com"
                  hasError={!!errors.email && touched.email}
                />
                {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
              </Label>
            </FormField>
            <FormField name="phone">
              <Label hasError={!!errors.phone && touched.phone}>
                Phone
                <Input
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="226066343"
                  hasError={!!errors.phone && touched.phone}
                />
                {errors.phone && touched.phone && <ErrorText>{errors.phone}</ErrorText>}
              </Label>
            </FormField>
            <FormField name="password">
              <Label hasError={!!errors.password && touched.password}>
                Password
                <Input
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  suffixNode={
                    <ToggleShowPasswordButton
                      showPassword={showPassword}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  }
                  hasError={!!errors.password && touched.password}
                  type={showPassword ? "text" : "password"}
                />
                {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
              </Label>
            </FormField>
          </FormFields>
          <Spacer size={30} />
          <Button type="submit" onClick={submitForm}>Sign Up</Button>
        </Container>
      )}
    </Formik>
  );
};


