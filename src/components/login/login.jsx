import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../../modules/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.auth.userData);
    const navigate = useNavigate();
    

    const onLogin = async (e) => {
        dispatch(getUserData(e.currentTarget.textContent));
    }

    useEffect(() => {
        if(data && !error) navigate('main');
    }, [data])

    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick = {onLogin}>
                            Google
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button}>
                            Github
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    )
}
