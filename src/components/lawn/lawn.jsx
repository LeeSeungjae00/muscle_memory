import React, { useMemo } from 'react'
import { useCallback } from 'react';
import { convertDateFormat, monthArray } from '../../lib/dateConverter';
import Grass from '../grass/grass';
import styles from './lawn.module.css'
import { useSelector } from 'react-redux';

export default function Lawn() {
    const { data } = useSelector(state => state.cardData.eventData);
    const grassRendering = useMemo(
        () => {
            let date = new Date();
            let day = (date.getDay() - 6) * -1;
            const result = [];
            for (let i = 0; i < 371 - day; i++) {
                const sendDate = convertDateFormat(date);
                let sendTotalVol = 0;
                if(data){
                    if(data[sendDate]) sendTotalVol = data[sendDate].total_volume
                }
                result.unshift(<Grass key={i} totalVolume ={sendTotalVol} date={sendDate} />);
                date.setDate(date.getDate() - 1);
            }
            return result;
        },[data])

    const monthRendering = useMemo(
        () => {
            let date = new Date();
            let month = date.getMonth();
            const result = [];
            for(let i = 0 ; i < 13 ; i ++){
                result.push(<div key={i} className={styles.month}>{monthArray[month]}</div>);
                month = (month + 1) % 12;
            }
            return result;
        } , [])
    return (
        <div className={styles.lawnContent}>
            <div className={styles.yearTotal}>
                {data && Object.keys(data).map((obj) => data[obj].total_volume).reduce((pre, curr) => pre + curr)}
                Kg in the last year 
            </div>
            <div className={styles.lawnMain}>
                <div className={styles.months}>
                    {monthRendering}
                </div>
                <div className={styles.lawnInner}>
                    <div className={styles.days}>
                        <div className={styles.day}>Mon</div>
                        <div className={styles.day}>Wed</div>
                        <div className={styles.day}>Fri</div>
                    </div>
                    <div className={styles.lawn}>{grassRendering}</div>
                </div>
                <div className={styles.lawnBottm}>
                    <a href="https://lsjportfolio.netlify.app/">Learn how we count volume</a>
                    <div className={styles.grassColorChart}>
                        Less
                        <div className={styles.grass_basic} />
                        <div className={styles.grass_levelOne} />
                        <div className={styles.grass_levelTwo} />
                        <div className={styles.grass_levelThree} />
                        <div className={styles.grass_levelfour} />
                        More
                    </div>

                </div>
            </div>
        </div>
    )
}
