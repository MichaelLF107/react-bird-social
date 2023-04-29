import styles from './styles.module.css'
import { ClickAwayListener } from '@mui/material'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    header: React.ReactNode;
    footer?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children, header, footer }: ModalProps) {
    if (!isOpen) return null
    return (
        <div className={styles.modal}>
            <ClickAwayListener onClickAway={onClose}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        {header}
                    </div>
                    <div className={styles.modalBody}>
                        {children}
                    </div>
                    <div className={styles.modalFooter}>
                        {footer}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    )
}