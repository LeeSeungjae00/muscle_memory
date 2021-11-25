import React , {memo} from 'react'
import styles from './header.module.css'

 const Header = memo(({onLogout}) => {
    return (
        <header className = {styles.header}>
            {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
            <img className = {styles.logo} src="/logo.png" alt="logo" />
            <h1 className = {styles.title}>Muscle hub</h1>
        </header>
    )
})

export default Header;