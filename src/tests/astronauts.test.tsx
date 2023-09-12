import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Astronauts from "../pages/astronauts";
import { useSession } from "next-auth/react";
import "@testing-library/jest-dom";
import { fetchAstronautData } from "@/pages/api/astronautApi";
jest.mock("next-auth/react");
jest.mock("../pages/api/astronautApi");

describe("Astronauts", () => {
  it("Astronauts page loads", async () => {
    const mockSession = {
      expires: "1",
      user: { email: "deirdre.massaro@gmail.com", name: "Deirdre", image: "c" },
    };

    (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

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

    jest.fn().mockResolvedValue(mockResponse);
    fetchAstronautData.mockResolvedValue(mockResponse);

    render(<Astronauts />);

    await waitFor(() => {
      expect(screen.getByTestId("astronaut-wrapper")).toBeInTheDocument();
    });
  });
});
