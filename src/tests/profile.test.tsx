import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "../pages/profile";
import { useSession } from "next-auth/react";
import "@testing-library/jest-dom";
jest.mock("next-auth/react");

describe("Profile", () => {
  it("Tests that profile content renders", async () => {
    const mockSession = {
      expires: "1",
      user: { email: "deirdre.massaro@gmail.com", name: "Deirdre", image: "c" },
    };

    (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

    render(<Profile />);

    expect(screen.getByTestId("welcome-copy")).toBeInTheDocument();
  });
});
