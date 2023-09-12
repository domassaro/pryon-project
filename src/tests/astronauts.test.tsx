import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Astronauts from "../pages/astronauts";
import { useSession } from "next-auth/react";
import "@testing-library/jest-dom";
import { fetchAstronautData } from "@/pages/api/astronautApi";
jest.mock("next-auth/react");
jest.mock("../pages/api/astronautApi");

const mockResponse = {
  message: "success",
  number: 1,
  people: [
    {
      craft: "ISS",
      name: "Sergey Prokopyev",
    },
  ],
};

describe("Astronauts", () => {
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
    fetchAstronautData.mockResolvedValue(mockResponse);
  });
  it("loads the Astronaut page and respecting content", async () => {
    render(<Astronauts />);

    // useEffect runs for the first time after mount so the instant after it
    // observes the component is when it renders the data -- so waitFor is required
    await waitFor(() => {
      expect(screen.getByTestId("astronaut-wrapper")).toBeInTheDocument();
    });
  });
  it("returns the same amount of astronauts as the number it also returns", async () => {
    render(<Astronauts />);

    await waitFor(() => {
      expect(screen.getByTestId("astronaut-count")).toHaveTextContent(
        mockResponse.number.toString()
      );
    });
  });
});
