import React from 'react'
import AddForm from '../add_form.jsx/add_form'
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
                <div className = {styles.topContainer}>
                    <AddForm></AddForm>
                </div>
                <div className = {styles.bottomContainer}></div>
            </div>
            <Footer></Footer>
        </section>
    )
}
