import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Post } from '@prisma/client'

interface PostInput {
    content: string
    authorName: string
    authorHandle: string
    authorColor: string
}

interface Data {
    post: Post
    success: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
    const { content, authorName, authorHandle, authorColor }: PostInput = req.body
    const post = await prisma.post.create({
        data: {
            content,
            authorName,
            authorHandle,
            authorColor,
            stars: 0,
            shares: 0,
            date: new Date()
        }
    })
    res.status(200).json({ post, success: true })
}