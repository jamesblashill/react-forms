import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { Typography } from "./Styles";
import { ThemeProvider } from "styled-components";
import { darkModeTheme } from "../theme";

describe("typography", () => {
  it("renders", () => {
    render(<Typography>test</Typography>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("applies styles from default theme", () => {
    render(<Typography variant="displayXLSerifRegular">test</Typography>);
    expect(screen.getByText("test")).toHaveStyle("font-size: 72px; font-weight: 400; line-height: 86px; letter-spacing: 0; color: #333");
  });

  it("applies styles from custom theme", () => {
    render(
      <ThemeProvider theme={darkModeTheme}>
        <Typography>
          test
        </Typography>
      </ThemeProvider>
    );
    expect(screen.getByText("test")).toHaveStyle("color: #FFF")
  });

  it("Allows responsive styles for variant", () => {
    render(<Typography variant={{mobile: "labelSansRegular", tablet: "paragraphSansMedium", desktop: "displayXLSerifRegular"}}>test</Typography>);
  });
});
