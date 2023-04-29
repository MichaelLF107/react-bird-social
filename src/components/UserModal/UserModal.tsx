import styles from './styles.module.css'
import Modal from '../Modal/Modal'
import { useState, useEffect } from 'react'
import { TextField, Button, Avatar } from '@mui/material'
import { ChromePicker } from 'react-color'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { getTextColor, getInitials } from '@/lib/utils'

interface User {
    name: string | null
    handle: string | null
    color: string | null
}

interface UserModalProps {
    isOpen: boolean
    onClose: () => void
    user: User
    setUser: (user: User) => void
}

export default function UserModal({ isOpen, onClose, user, setUser }: UserModalProps) {
    const [name, setName] = useState('')
    const [handle, setHandle] = useState('')
    const [color, setColor] = useState('#ffffff')
    const [initials, setInitials] = useState('')
    const [textColor, setTextColor] = useState('')
    const [nameError, setNameError] = useState(false)
    const [handleError, setHandleError] = useState(false)

    useEffect(() => {
        const initials = getInitials(name)
        setInitials(initials)
    }, [name])

    useEffect(() => {
        if (color.length > 0) {
            setTextColor(getTextColor(color))
        }
    }, [color])

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
        setNameError(false)
    }

    function handleHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const handle = e.target.value.replace(/[^a-zA-Z0-9]/g, '')
        setHandle(handle)
        setHandleError(false)
    }

    function saveUserInfo() {
        if (name.length === 0) {
            setNameError(true)
            return
        }
        if (handle.length === 0) {
            setHandleError(true)
            return
        }
        const user = {
            name,
            handle,
            color
        }
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
        onClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            header={
                <div className={styles.header}>
                    <PersonAddIcon fontSize='inherit' />
                    Tell us about yourself
                </div>
            }
            footer={
                <div className={styles.footer}>
                    <Button variant="outlined" color="primary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" onClick={saveUserInfo}>
                        Save
                    </Button>
                </div>
            }
        >
            <div className={styles.userModal}>
                <div className={styles.form}>
                    <Avatar
                        sx={{ bgcolor: color, color: textColor }}
                        className={styles.avatar}
                    >
                        {initials ? initials : '?'}
                    </Avatar>
                    <div className={styles.input}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={handleNameChange}
                            error={nameError}
                        />
                        <div className={styles.error}>
                            {nameError && 'Name is required'}
                        </div>
                    </div>
                    <div className={styles.input}>
                        <TextField
                            label="Handle"
                            variant="outlined"
                            value={handle}
                            onChange={handleHandleChange}
                            InputProps={{
                                startAdornment: '@'
                            }}
                            error={handleError}
                        />
                        <div className={styles.error}>
                            {handleError && 'Handle is required'}
                        </div>
                    </div>
                </div>
                <div className={styles.colorPicker}>
                    <span className={styles.colorLabel}>
                        Pick a color
                    </span>
                    <ChromePicker
                        color={color}
                        onChange={color => setColor(color.hex)}
                        disableAlpha
                        styles={{
                            default: {
                                picker: {
                                    background: '#333'
                                },
                                color: {
                                    background: '#333',
                                    color: '#fff'
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </Modal>
    )
}