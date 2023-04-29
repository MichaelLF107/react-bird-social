import styles from './styles.module.css'
import { TextField, Button } from '@mui/material'

export type DraftProps = {
    content: string
    setContent: (content: string) => void
    sendPost: () => void
}

export default function Draft({ content, setContent, sendPost }: DraftProps) {
    return (
        <div className={styles.draft}>
            <TextField
                label="What's happening?"
                multiline
                sx={{ width: '800px' }}
                rows={4}
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <Button
                variant="contained"
                sx={{ float: 'right', marginTop: '10px' }}
                onClick={sendPost}
            >
                Send
            </Button>
        </div>
    )
}