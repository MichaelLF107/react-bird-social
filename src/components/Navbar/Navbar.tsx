import { useState, useEffect } from 'react'
import { getInitials, getTextColor } from '@/lib/utils'
import styles from './styles.module.css'
import WebStoriesIcon from '@mui/icons-material/WebStories'
import { Avatar, ClickAwayListener, Button } from '@mui/material'

interface User {
    name: string | null
    handle: string | null
    color: string | null
}

interface NavbarProps {
    openUserModal: () => void
    user: User
    setUser: (user: User) => void
}

export default function Navbar({ openUserModal, user, setUser }: NavbarProps) {
    const [initials, setInitials] = useState('')
    const [textColor, setTextColor] = useState('')
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user') || '{}')
            const initials = getInitials(user.name)
            const textColor = getTextColor(user.color)
            setInitials(initials)
            setTextColor(textColor)
        }
    }, [user])

    function handleLogout() {
        localStorage.removeItem('user')
        setUser({} as User)
        setInitials('')
        setTextColor('')
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <WebStoriesIcon fontSize='inherit' />
                React Bird Social
            </div>
            <div className={styles.user} onClick={() => setOpen(!open)}>
                <Avatar
                    sx={{
                        bgcolor: user.color ? user.color : '#ffffff',
                        color: textColor ? textColor : '#000000'
                    }}
                >
                    {initials ? initials : '?'}
                </Avatar>
            </div>
            {open && (
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                    <div className={styles.menu}>
                        {user.name ? (
                            <>
                                <span className={styles.name}>{user.name}</span>
                                <span className={styles.handle}>@{user.handle}</span>
                                <Button variant='outlined' onClick={() => handleLogout()}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <span className={styles.name}>Guest</span>
                                <Button variant='outlined' onClick={() => openUserModal()}>
                                    Register
                                </Button>
                            </>
                        )}
                    </div>
                </ClickAwayListener>
            )}
        </div>
    )
}
