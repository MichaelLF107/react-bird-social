import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Post } from '@prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post[]>
    ) {
    const posts = await prisma.post.findMany({
        orderBy: {
            date: 'desc'
        }
    })
    res.status(200).json(posts)
}