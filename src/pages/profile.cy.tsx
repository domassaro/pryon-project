import React from "react";
import Profile from "./profile";

describe("<Profile />", () => {
  it("renders", () => {
    cy.mount(<Profile />);
  });
});
