import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const requestUrl = "http://api.open-notify.org/iss-now.json";
    const response = await fetch(requestUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong: " + err });
  }
}
