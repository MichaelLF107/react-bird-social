'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Draft from '@/components/Draft/Draft'
import Post from '@/components/Post/Post'
import UserModal from '@/components/UserModal/UserModal'
import Navbar from '@/components/Navbar/Navbar'

interface User {
  name: string | null
  handle: string | null
  color: string | null
}

export default function Home() {
  const [timeline, setTimeline] = useState<any[]>([])
  const [content, setContent] = useState('')
  const [userModalOpen, setUserModalOpen] = useState(false)
  const [user, setUser] = useState({} as User)

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      setUser(user)
  }, [])

  function closeModal() {
    setUserModalOpen(false)
  }

  function sendPost() {
    if (!user?.handle) {
      setUserModalOpen(true)
      return
    }
    if (content.length > 0) {
      fetch('/api/sendPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content,
          authorName: user.name,
          authorHandle: user.handle,
          authorColor: user.color
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setContent('')
            setTimeline([data.post, ...timeline])
          }
        })
    }
  }

  useEffect(() => {
    fetch('/api/getPosts')
      .then(res => res.json())
      .then(data => setTimeline(data))
  }, [])

  return (
    <>
      <Head>
        <title>React Bird</title>
        <meta name="description" content="Social Media Project Example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar openUserModal={() => setUserModalOpen(true)} user={user} setUser={setUser} />
        <Draft content={content} setContent={setContent} sendPost={sendPost} />
        {timeline?.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
      <UserModal isOpen={userModalOpen} onClose={closeModal} user={user} setUser={setUser} />
    </>
  )
}
