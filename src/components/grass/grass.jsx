import React from 'react'
import { useSelector } from 'react-redux';
import styles from './grass.module.css'

export default function Grass({ date }) {
    const { data, loading, error } = useSelector(state => state.cardData.eventData);

    return (
        <div className={checkTotalVolume(data, date)} />
    )
}


const checkTotalVolume = (data , date) => {
    if(!data) return styles.grass_basic;
    if (data[date]) {
        if (data[date].total_volume > 5000) {
            return styles.grass_levelfour;
        } else if (data[date].total_volume < 5000 &&
            data[date].total_volume > 4000) {
            return styles.grass_levelThree;
            return;
        } else if (data[date].total_volume < 4000 &&
            data[date].total_volume > 1300) {
            return styles.grass_levelTwo;
        } else {
            return styles.grass_levelOne;
        }
    }
    return styles.grass_basic;
}