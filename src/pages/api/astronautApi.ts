import React from "react";

export const fetchAstronautData = async () => {
  const api = await fetch("/api/astronauts");
  return api.json();
};
