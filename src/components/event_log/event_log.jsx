import React from 'react'
import styles from './event_log.module.css'
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function EventLog({ date, data }) {
    const { cards, total_volume } = data;
    const [check, setCheck] = useState(true);
    const onDetail = () => {
        setCheck(check => !check);
    }
    return (
        <li className={styles.logLap}>
            <div className={styles.mainLog}>
                <div style={{ display: 'flex' }}>
                    <div className={styles.logDot}></div>
                    <div className={styles.logDate}>
                        {`${date}'s Total volume ${total_volume} Kg`}
                    </div>
                </div>
                <button onClick={onDetail} className={styles.detailBtn}>{check ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/> }</button>
            </div>
            <div>
                <Collapse in={check}>
                    <ul className={styles.detailList}>
                        {cards && Object.keys(cards)
                            .map((card) => <li key = {card}>
                                {`${cards[card].event} (을)를 ${cards[card].volume}kg 씩 ${cards[card].sets} 세트 했습니다.`}
                                </li>)}
                    </ul>
                </Collapse>
            </div>
        </li>
    )
}
