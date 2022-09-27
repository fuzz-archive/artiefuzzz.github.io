import { fetch, FetchMethods, FetchResultTypes } from '@sapphire/fetch'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { authorization } = req.headers

    if (authorization === process.env.AUTH_SECRET) {
      const { fact, image } = await fetch<{ fact: string; image: string }>(
        'https://some-random-api.ml/animal/red_panda',
        FetchResultTypes.JSON
      )

      const embed = {
        title: 'Daily Cuteness (+ A fact!)',
        footer: fact,
        image: {
          url: image,
        },
      }

      await fetch(process.env.WEBHOOK_URL!, {
        method: FetchMethods.Post,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed],
        }),
      })

      return res.status(200).json({ status: 200, message: 'OK' })
    } else {
      return res.status(200).json({ status: 200, message: 'KO' })
    }
  }

  return res
    .status(405)
    .json({ status: 405, message: 'KO, Method Not Allowed' })
}
