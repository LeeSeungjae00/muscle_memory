import React from 'react'
import { useCallback } from 'react';
import { convertDateFormat } from '../../lib/dateConverter';
import Grass from '../grass/grass';
import styles from './lawn.module.css'

export default function Lawn() {
    const rendering = useCallback(
        () => {
            let date = new Date();
            let day = (date.getDay() - 6) * -1;
            const result = [];
            for (let i = 0; i < 371 - day; i++) {
                result.unshift(<Grass key={i} date={convertDateFormat(date)} />);
                date.setDate(date.getDate() - 1);
            }
            return result;
        },
    )
    return (
        <div className={styles.lawnContent}>
            {/* {
                rendering()
            } */}
            <div className={styles.yearTotal}>10000Kg in the last year </div>
            <div><div className={styles.months}>
                    <div className={styles.month}>Nov</div>
                    <div className={styles.month}>Dec</div>
                    <div className={styles.month}>Jan</div>
                    <div className={styles.month}>Feb</div>
                    <div className={styles.month}>Mar</div>
                    <div className={styles.month}>Apr</div>
                    <div className={styles.month}>May</div>
                    <div className={styles.month}>Jun</div>
                    <div className={styles.month}>Jul</div>
                    <div className={styles.month}>Aug</div>
                    <div className={styles.month}>Sep</div>
                    <div className={styles.month}>Oct</div>
                    <div className={styles.month}>Nov</div>
                </div>
                <div className={styles.lawnMain}>
                    <div className={styles.days}>
                        <div className={styles.day}>Mon</div>
                        <div className={styles.day}>Wed</div>
                        <div className={styles.day}>Fri</div>
                    </div>
                    <div className={styles.lawn}>{rendering()}</div>
                </div>
            </div>
        </div>
    )
}
