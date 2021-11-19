import React from 'react'
// import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
// import Preview from '../preview/preview'
import styles from './main.module.css'

export default function Main() {

    return (
        <section className = {styles.maker}>
            <Header></Header>
            <button className = {styles.logout}>Logout</button>
            <div className={styles.container}>
                <div>edite</div>
                <div>preview</div>
            </div>
            <Footer></Footer>
        </section>
    )
}
