// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Astronauts from "../pages/astronauts";
// import { useSession } from "next-auth/react";
// import API from "../pages/api/astronauts";
// import "@testing-library/jest-dom";
// jest.mock("next-auth/react");
// jest.mock("../pages/api/astronauts");

// describe("Astronauts", () => {
//   it("Astronauts page loads", async () => {
//     const mockSession = {
//       expires: "1",
//       user: { email: "deirdre.massaro@gmail.com", name: "Deirdre", image: "c" },
//     };

//     (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

//     const mockResponse = {
//       message: "success",
//       number: 1,
//       people: [
//         {
//           craft: "ISS",
//           name: "Sergey Prokopyev",
//         },
//       ],
//     };

//     jest.fn().mockResolvedValue(mockResponse);
//     const mockFetch = jest.fn().mockImplementation(() => ({
//       json: jest.fn().mockResolvedValue(mockResponse),
//     }));

//     jest.mock("node-fetch", () => {
//       return jest.fn().mockImplementation((...p) => {
//         return mockFetch(...p);
//       });
//     });

//     render(<Astronauts />);

//     expect(screen.getByTestId("astronaut-wrapper")).toBeInTheDocument();
//   });
// });
