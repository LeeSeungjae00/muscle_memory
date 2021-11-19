import React , {memo} from 'react'
import styles from './header.module.css'

 const Header = memo(({onLogout}) => {
    return (
        <header className = {styles.header}>
            {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
            <img className = {styles.logo} src="/images/logo.png" alt="logo" />
            <h1 className = {styles.title}>Muscle Memory</h1>
        </header>
    )
})

export default Header;