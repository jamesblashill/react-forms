import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import React from "react";
import { ISignUpFormValues, SignupFormFormik } from "../SignupFormFormik";
import { ThemeProvider } from "styled-components";
import { lightModeTheme } from "../../../theme";


const expectFieldToBeInDocument = (labelText: string) => {
  expect(screen.getByLabelText(labelText)).toBeInTheDocument();
}

const expectFieldsToBeInDocument = (...labelTexts: string[]) => {
  labelTexts.forEach(expectFieldToBeInDocument);
};

const typeInFormField = (label: string, value: string) => {
  userEvent.type(screen.getByLabelText(label), value);
}

const SignupFormFieldLabels = [
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Password",
];

function renderForm(onSubmit: (values: ISignUpFormValues) => void) {
  return render(
    <ThemeProvider theme={lightModeTheme}>
      <SignupFormFormik onSubmit={onSubmit} />
    </ThemeProvider>
  )
}

describe("SignUp form testing (Formik)", () => {
  const mockOnsubmit = jest.fn();

  beforeEach(() => {
    mockOnsubmit.mockReset();
    renderForm(mockOnsubmit);
  });

  it("Should render properly", () => {
    expectFieldsToBeInDocument(...SignupFormFieldLabels);
    expect(screen.getByRole('button', { name: "Sign Up" })).toBeInTheDocument();
  });

  it("Should render allowedSpam checkbox if valid email", async () => {
    expect(screen.queryByLabelText("Allow us to send you da spams")).not.toBeInTheDocument();
    typeInFormField("Email", "test@gmail.com");
    await waitFor(() => expectFieldToBeInDocument("Allow us to send you da spam."));
  });

  it("Submits when all fields are filled", async () => {
    const values = {
      first: "test",
      last: "last",
      email: "test@gmail.com",
      phone: "519-500-8912",
      password: "password",
      allowedSpam: true,
      files: [],
    };

    typeInFormField("First Name", values.first);
    typeInFormField("Last Name", values.last);
    typeInFormField("Email", values.email);
    typeInFormField("Phone", values.phone);
    typeInFormField("Password", values.password);
    userEvent.click(screen.getByLabelText("Allow us to send you da spam."));
    userEvent.click(screen.getByRole("button", { name: "Sign Up"}));

    await waitFor(() => expect(mockOnsubmit).toBeCalledWith(values));
  });

  it("does not allow submission with invalid fields", async () => {
    userEvent.click(screen.getByRole("button", { name: "Sign Up"}));

    expect(await screen.findByText("Please enter a firstname")).toBeInTheDocument();
    expect(await screen.findByText("Please enter a lastname")).toBeInTheDocument();
    expect(await screen.findByText("Please enter an email")).toBeInTheDocument();
    expect(await screen.findByText("Please enter a phone number")).toBeInTheDocument();
    expect(await screen.findByText("Please enter a password")).toBeInTheDocument();

    typeInFormField("Email", "invalid.email");
    expect(await screen.findByText("email must be a valid email")).toBeInTheDocument();

    typeInFormField("Phone", "111");
    expect(await screen.findByText("Please enter a valid phone number!")).toBeInTheDocument();

    typeInFormField("Password", "111");
    expect(await screen.findByText("Password must be more than 4 characters")).toBeInTheDocument();
  });
});
