import React from 'react'
import styles from './add_form_card.module.css'
import { Slider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function AddFormCard({ card, onUpdate , onDelete}) {
    const { event, sets, volume } = card;
    const onChange = (event) => {
        let name, value;
        if (event.target !== null) {
            value = event.target.value;
            name = event.target.name;
        } else if(event.currentTarget != null){
            value = event.currentTarget.value;
            name = event.currentTarget.name;
        }else {
            return ;
        }
        event.preventDefault();
        onUpdate({
            ...card,
            [name] : value,
        })
    }
    return (
        <div className={styles.formCard}>
            <input
                className={styles.formInput}
                type="text"
                name="event"
                value={event}
                onChange={onChange}
                placeholder="운동 종목"
            />
            <div className={styles.formSliders}>
                <div className={styles.sliderLap}>
                    <Slider
                        aria-label="sets"
                        name="sets"
                        step={1}
                        marks
                        min={1}
                        max={20}
                        valueLabelDisplay="auto"
                        onChange={onChange}
                        value = {sets}
                    />
                    <p className = {styles.sliderVal}>{`${sets} SETS`}</p>
                </div>
                <div className={styles.sliderLap}>
                    <Slider
                        aria-label="volume"
                        name="volume"
                        step={5}
                        marks
                        min={0}
                        max={500}
                        valueLabelDisplay="auto"
                        onChange={onChange}
                        value = {volume}
                    />
                    <p className = {styles.sliderVal}>{`${volume} Kg  `}</p>
                </div>
            </div>

            {/* <input
                type="range"
                name="sets"
                value={sets}
                onChange={onChange}
                
                min='1'
                max='20'
            />
            <input
                type="range"
                name="volume"
                value={volume}
                onChange={onChange}
                min='1'
                max='500'
            /> */}
            <div className = {styles.totalVol}>
                <label>Total Volume</label>
                <div>{sets * volume} kg</div>
            </div>
            <button onClick = {() => onDelete(card)} className = {styles.delete}><CloseIcon fontSize='sm'/></button>
            
        </div>
    )
}
