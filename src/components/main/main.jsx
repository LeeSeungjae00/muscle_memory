import React from 'react'
import { useSelector } from 'react-redux'
import AddForm from '../add_form.jsx/add_form'
// import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
// import Preview from '../preview/preview'
import styles from './main.module.css' 

export default function Main() {
    const { data } = useSelector(state => state.login.userData);
    return (
        <section className = {styles.maker}>
            <Header></Header>
            <button className = {styles.logout}>Logout</button>
            <div className={styles.container}>
                <div className = {styles.topContainer}>
                    <AddForm userId = {data.user.uid}></AddForm>
                </div>
                <div className = {styles.bottomContainer}>
                    <div style = {{backgroundColor : 'black' , width : '100%', height : '100%'}}></div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    )
}
