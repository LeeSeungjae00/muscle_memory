import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddForm from '../add_form.jsx/add_form'
// import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
// import Preview from '../preview/preview'
import styles from './main.module.css' 
import EventLogArea from '../event_log_area/event_log_area'
import Lawn from '../lawn/lawn'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'


export default function Main() {
    const { data } = useSelector(state => state.auth.userData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLogout = (e) => {
        console.log(e)
        dispatch({type : 'AUTH_LOGOUT'});
        navigate('/');
    }

    useEffect(() => {
        if(data === null) navigate('/');
    })
    return (
        <section className = {styles.maker}>
            <Header></Header>
            <button className = {styles.logout} onClick={onLogout}><LogoutIcon fontSize="sm"/>Logout</button>
            <div className={styles.container}>
                <div className = {styles.topContainer}>
                    <AddForm userId = {data && data.user.uid}/>
                    <EventLogArea userId = {data && data.user.uid}/>
                </div>
                <div className = {styles.bottomContainer}>
                    <Lawn></Lawn>
                </div>
            </div>
            <Footer></Footer>
        </section>
    )
}
