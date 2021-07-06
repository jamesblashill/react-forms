import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { SignupForm } from "./examples/SignupForm";
import { lightTheme, darkTheme } from "forms/Input";

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
            </ul>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle theme</button>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/signup">
              <SignupForm />
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
    input: lightTheme,
  },
};

const darkModeTheme = {
  appBackgroundColor: "#333",
  form: {
    textColor: "#eee",
    input: darkTheme,
  },
};

render(<App />, document.getElementById("root"));
