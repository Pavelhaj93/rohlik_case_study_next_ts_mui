// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import data from '../../../src/data/data.json';


export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {

  const newData = {
    products: data.map(({ name, id, image, price: { full, currency } }) => {
      return {
        name, 
        id,
        image, 
        price: {
          full,
          currency
        },
      }
    })
  }

  res.status(200).json(newData.products)
}
