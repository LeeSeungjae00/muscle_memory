import React , {memo} from 'react'
import styles from './header.module.css'

 const Header = memo(({onLogout}) => {
    return (
        <header className = {styles.header}>
            {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
            <img className = {styles.logo} src="/logo.png" alt="logo" />
            <h3 className = {styles.title}>Muscle hub</h3>
        </header>
    )
})

export default Header;