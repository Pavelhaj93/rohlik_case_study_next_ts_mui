import type { NextApiRequest, NextApiResponse } from "next";

import data from "../../../src/data/data.json";

export default function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {query: {id}} = req
  const filtered = data.filter((item: any) => item.id == id)
  
  res.status(200).json(filtered[0]);
}
