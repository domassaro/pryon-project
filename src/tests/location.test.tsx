import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { useSession } from "next-auth/react";
import { fetchLocation } from "@/pages/api/locationApi";
import Location from "@/pages/location";
import "@testing-library/jest-dom";
jest.mock("next-auth/react");
jest.mock("../pages/api/locationApi");

const mockResponse = {
  message: "success",
  iss_position: { longitude: "-59.6478", latitude: "-12.0609" },
  timestamp: 1694551798,
};

describe("ISS Location", () => {
  beforeEach(() => {
    const mockSession = {
      expires: "1",
      user: {
        email: "deirdre.massaro@gmail.com",
        name: "Deirdre",
        image: "c",
      },
    };
    (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

    jest.fn().mockResolvedValue(mockResponse);
    fetchLocation.mockResolvedValue(mockResponse);
  });
  it("loads the ISS page and respecting content", async () => {
    render(<Location />);

    await waitFor(
      () => {
        expect(screen.getByTestId("location-wrapper")).toBeInTheDocument();
      },
      { timeout: 8000 }
    );
  });
});
