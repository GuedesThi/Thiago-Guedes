import { ReactNode } from 'react';
import styles from './Header.module.css'

interface HeaderProps {
    children: ReactNode;
}

function Header({ children }: HeaderProps) {
    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <h1 className={styles.author}>{children}</h1>
            </div>
        </div>
    )
} 

export default Header;