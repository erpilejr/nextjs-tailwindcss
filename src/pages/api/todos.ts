import type { NextApiRequest, NextApiResponse } from 'next'

import { BASE_API_URL } from '@/config'

type Data = {
    todos: string[]
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ todos: ['Todo1', 'Todo 2', 'Todo 3'] })
}