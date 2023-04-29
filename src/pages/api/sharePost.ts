import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Post } from '@prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post>
) {
    const { id } = req.body
    const post = await prisma.post.update({
        where: { id },
        data: {
            shares: {
                increment: 1
            }
        }
    })
    if (!post) {
        return res.status(404)
    }
    res.status(200).json(post)
}
