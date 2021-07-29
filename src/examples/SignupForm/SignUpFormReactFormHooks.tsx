import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../forms/Button";
import { ErrorText } from "../../forms/ErrorText";
import { HelperText } from "../../forms/HelperText";
import { Input } from "../../forms/Input";
import { Label } from "../../forms/Label";
import { Spacer } from "../../Spacer";
import { Container, emailRegex, FormField, FormFields, phoneRegex, ToggleShowPasswordButton } from "./common";

interface ISignupFormInputs {
  first: string,
  last: string,
  email: string,
  phone: string,
  password: string,
}

const formLayoutTemplate = [
  "firstName lastName",
  "email email",
  "phone phone",
  "password password",
];

export const SignupFormReactFormHooks: React.FC<{}> = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ISignupFormInputs>({ reValidateMode: 'onBlur', mode: 'onBlur' });

  const onSubmit = React.useCallback((values) => {
    console.log("values", values);
  }, []);

  console.log('Errors', errors);

  return (
    <Container>
      <FormFields template={formLayoutTemplate}>
        <FormField name="firstName">
          <Label hasError={!!errors.first?.message}>
            First Name
            <Input
              {...register('first', { required: "Please Enter a first name" })}
              placeholder="Enter your first name"
              hasError={!!errors.first?.message}
            />
            {errors.first?.message && <ErrorText>{errors.first?.message}</ErrorText>}
            {!errors.first?.message && <HelperText>This is your given name</HelperText>}
          </Label>
        </FormField>
        <FormField name="lastName">
          <Label hasError={!!errors.last?.message}>
            Last Name
            <Input
              {...register('last', { required: "Please Enter a last name" })}
              placeholder="Enter your last name"
              hasError={!!errors.last?.message}
            />
            {errors.last?.message && <ErrorText>{errors.last?.message}</ErrorText>}
          </Label>
        </FormField>
        <FormField name="email">
          <Label hasError={!!errors.email?.message}>
            Email
            <Input
              {...register('email', { required: true, pattern: { value: emailRegex, message: "Enter a valid email" } })}
              placeholder="your.name@example.com"
              hasError={!!errors.email?.message}
            />
            {errors.email?.message && <ErrorText>{errors.email?.message}</ErrorText>}
          </Label>
        </FormField>
        <FormField name="phone">
          <Label hasError={!!errors.phone?.message}>
            Phone
            <Input
              {...register('phone', { required: true, pattern: { value: phoneRegex, message: "Enter a valid phone number "} })}
              placeholder="226-066-3435"
              hasError={!!errors.phone?.message}
            />
            {errors.phone?.message && <ErrorText>{errors.phone?.message}</ErrorText>}
          </Label>
        </FormField>
        <FormField name="password">
          <Label hasError={!!errors.password?.message}>
            Password
            <Input
              {...register('password', { required: true, minLength: { value: 4, message: "Password must be more than 4 characters" } })}
              suffixNode={
                <ToggleShowPasswordButton
                  showPassword={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                />
              }
              type={showPassword ? "text" : "password"}
              hasError={!!errors.password?.message}
            />
            {errors.password?.message && <ErrorText>{errors.password?.message}</ErrorText>}
          </Label>
        </FormField>
      </FormFields>
      <Spacer size={30} />
      <Button onClick={handleSubmit(onSubmit)}>Sign Up</Button>
    </Container>
  );
};
