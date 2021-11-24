import React from 'react'
import { useSelector } from 'react-redux'
import AddForm from '../add_form.jsx/add_form'
// import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
// import Preview from '../preview/preview'
import styles from './main.module.css' 
import EventLogArea from '../event_log_area/event_log_area'

export default function Main() {
    const { data } = useSelector(state => state.auth.userData);
    return (
        <section className = {styles.maker}>
            <Header></Header>
            <button className = {styles.logout}>Logout</button>
            <div className={styles.container}>
                <div className = {styles.topContainer}>
                    <AddForm userId = {data.user.uid}/>
                    <EventLogArea userId = {data.user.uid}/>
                </div>
                <div className = {styles.bottomContainer}>
                    
                </div>
            </div>
            <Footer></Footer>
        </section>
    )
}
