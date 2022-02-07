import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

describe("<Layout />", () => {
  describe("the buttons", () => {
    it("shows a link to the Arbitrary Page", () => {
      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      );
      const linkElement = screen.getByLabelText("Link To Arbitrary Page");

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("Arbitrary Page");
    });

    it("shows a link to the Arbitrary Page", () => {
      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      );
      const linkElement = screen.getByLabelText("Link To Home Page");

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent("Home");
    });
  });
});
