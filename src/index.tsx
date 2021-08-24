import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkModeTheme, lightModeTheme } from "./theme";
import { SignupForm } from "./examples/SignupForm/SignupForm";
import { SignupFormCustom } from "./examples/SignupForm/SignupFormCustom";
import { ISignUpFormValues, SignupFormFormik } from "./examples/SignupForm/SignupFormFormik";
import { SignupFormReactFormHooks } from "./examples/SignupForm/SignUpFormReactFormHooks";
import { SignupReactFinalForm } from "./examples/SignupForm/SignupReactFinalForm";
import { TypographyExample } from "./examples/Typography";

const App: React.FC<{}> = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const onSubmit = (values: ISignUpFormValues) => {
    console.log("Formik form submit", values);
  }

  return (
    <ThemeProvider theme={darkMode ? darkModeTheme : lightModeTheme}>
      <Router>
        <AppContainer>
          <nav>
            <ul>
              <li>
                <Link to="/signup">SignupForm</Link>
              </li>
              <li>
                <Link to="/signup-formik">SignupFormFormik</Link>
              </li>
              <li>
                <Link to="/signup-react-form-hooks">SignupFormReactFormHooks</Link>
              </li>
              <li>
                <Link to="/signup-react-final-form">SignupFormReactFormHooks</Link>
              </li>
              <li>
                <Link to ="/signup-custom">SignupCustom</Link>
              </li>
              <li>
                <Link to="/typography">Typography</Link>
              </li>
            </ul>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle theme</button>
          </nav>

          <Switch>
            <Route path="/signup">
              <SignupForm />
            </Route>
            <Route path="/signup-formik">
              <SignupFormFormik onSubmit={onSubmit} />
            </Route>
            <Route path="/signup-react-form-hooks">
              <SignupFormReactFormHooks />
            </Route>
            <Route path="/signup-react-final-form">
              <SignupReactFinalForm />
            </Route>
            <Route path="/signup-custom">
              <SignupFormCustom />
            </Route>
            <Route path="/typography">
              <TypographyExample />
            </Route>
          </Switch>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.appBackgroundColor};
`;

render(<App />, document.getElementById("root"));
