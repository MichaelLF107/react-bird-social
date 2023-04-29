import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { Avatar } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ReplyIcon from '@mui/icons-material/Reply'
import { getTextColor, getInitials } from '@/lib/utils'

export type PostProps = {
    post: {
        id: number
        content: string
        date: string
        authorName: string
        authorHandle: string
        authorColor: string
        stars: number
        shares: number
    }
}

function getPostDate(date: string) {
    const dateObj = new Date(date)
    const today = new Date()
    const hours = Math.floor((today.getTime() - dateObj.getTime()) / 1000 / 60 / 60)
    if (hours < 24) {
        if (hours < 1) {
            const minutes = Math.floor((today.getTime() - dateObj.getTime()) / 1000 / 60)
            if (minutes < 1) {
                const seconds = Math.floor((today.getTime() - dateObj.getTime()) / 1000)
                return `${seconds}s`
            }
            return `${minutes}m`
        }
        return `${hours}h`
    }
    return dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}

export default function Post({ post }: PostProps) {
    const [starred, setStarred] = useState(false)
    const [shared, setShared] = useState(false)

    const initialsColor = getTextColor(post.authorColor)

    useEffect(() => {
        const starredPosts = JSON.parse(localStorage.getItem('starredPosts') || '[]')
        const sharedPosts = JSON.parse(localStorage.getItem('sharedPosts') || '[]')
        if (starredPosts.includes(post.id)) {
            setStarred(true)
        }
        if (sharedPosts.includes(post.id)) {
            setShared(true)
        }
    }, [])

    return (
        <div className={styles.post}>
            <div className={styles.profile}>
                <Avatar className={styles.avatar} sx={{ bgcolor: post.authorColor, color: initialsColor }}>
                    {getInitials(post.authorName)}
                </Avatar>
                <strong>{post.authorName}</strong>
                <div className={styles.userInfo}>
                    <span>@{post.authorHandle}</span>
                    <span className={styles.dot}>·</span>
                    <span>{getPostDate(post.date)}</span>
                </div>
            </div>
            <div className={styles.content}>
                {post.content}
            </div>
            <div className={styles.actions}>
                <span className={styles.stars}>
                    {starred ? (
                        <StarIcon sx={{ color: '#ffd700' }} />
                    ) : (
                        <StarBorderIcon />
                    )}
                    {post.stars}
                </span>
                <span className={styles.stars}>
                    {shared ? (
                        <ReplyIcon sx={{ color: '#00bcd4' }} />
                    ) : (
                        <ReplyIcon />
                    )}
                    {post.shares}
                </span>
            </div>
        </div>
    )
}