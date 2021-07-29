import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ThemeProvider } from "styled-components";
import { lightModeTheme } from "../../theme";
import { Checkbox } from "./Checkbox";

describe("checkbox", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={lightModeTheme}>
        <Checkbox label="test"/>
      </ThemeProvider>
    );
  })

  it("can be clicked", () => {
    userEvent.click(screen.getByLabelText("test"));
  });
})
