import React from 'react'
import styles from './event_log.module.css'
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';

export default function EventLog({ date, data }) {
    const total_volume = Object.keys(data)
        .map((event) => data[event].sets * data[event].volume)
        .reduce((pre, curr) => pre + curr);
    const [check, setCheck] = useState(true);
    const onDetail = () => {
        setCheck(check => !check);
    }
    return (<>
        <li className={styles.logLap}>
            <div className={styles.mainLog}>
                <div style={{ display: 'flex' }}>
                    <div className={styles.logDot}></div>
                    <div className={styles.logDate}>
                        {`${date}'s Total volume ${total_volume} Kg`}
                    </div>
                </div>
                <button onClick={onDetail} className={styles.detailBtn}>Detail {check ? '☝' : '↓'}</button>
            </div>
            <Collapse in={check}>
                <ul className = {styles.detailList}>
                    {Object.keys(data)
                        .map((event) => <li>{`${data[event].event} (을)를 ${data[event].volume}kg 씩 ${data[event].sets} 세트 했습니다.`}</li>)}
                </ul>
            </Collapse>
        </li>

    </>
    )
}
