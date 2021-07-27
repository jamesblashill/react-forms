import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { SignupForm } from "./examples/SignupForm/SignupForm";
import { SignupFormFormik } from "./examples/SignupForm/SignupFormFormik";
import { SignupFormReactFormHooks } from "./examples/SignupForm/SignUpFormReactFormHooks";
import { SignupReactFinalForm } from "./examples/SignupForm/SignupReactFinalForm";
import { TypographyExample } from "./examples/Typography";
import {
  lightTheme as buttonLightTheme,
  darkTheme as buttonDarkTheme,
} from "./forms/Button";
import {
  lightTheme as inputLightTheme,
  darkTheme as inputDarkTheme,
} from "./forms/Input";
import {
  lightTheme as typographyLightTheme,
  darkTheme as typographyDarkTheme,
} from "./Typography/themes";


const App: React.FC<{}> = () => {
  const [darkMode, setDarkMode] = React.useState(false);

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
              <SignupFormFormik />
            </Route>
            <Route path="/signup-react-form-hooks">
              <SignupFormReactFormHooks />
            </Route>
            <Route path="/signup-react-final-form">
              <SignupReactFinalForm />
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

const lightModeTheme = {
  appBackgroundColor: "#fff",
  form: {
    textColor: "#333",
    input: inputLightTheme,
  },
  typography: typographyLightTheme,
  button: buttonLightTheme,
};

const darkModeTheme = {
  appBackgroundColor: "#333",
  form: {
    textColor: "#eee",
    input: inputDarkTheme,
  },
  typography: typographyDarkTheme,
  button: buttonDarkTheme,
};

render(<App />, document.getElementById("root"));
