import { Tooltip } from '@mui/material';
import React from 'react'
import { useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import styles from '../lawn/lawn.module.css'

export default function Grass({ date , totalVolume }) {
    return (
        <Tooltip arrow placement="top"
         title={`${totalVolume === 0 ? 'No Volume' : `${totalVolume}Kg`} on ${date}`}>
            <div className={checkTotalVolume(totalVolume)} />
        </Tooltip>

    )
}


const checkTotalVolume = (total_volume) => {
    if (total_volume > 2000) {
        return styles.grass_levelfour;
    } else if (total_volume > 1500) {
        return styles.grass_levelThree;
    } else if (total_volume > 1000) {
        return styles.grass_levelTwo;
    } else if(total_volume !== 0){
        return styles.grass_levelOne;
    } else{
        return styles.grass_basic;
    }
}