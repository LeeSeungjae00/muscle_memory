import React, { useState } from 'react'
import { getNowDate } from '../../lib/dateConverter';
import AddFormCard from '../add_form_card/add_form_card';
import styles from './add_form.module.css'


function getInitData() {
    const id = Date.now();
    return {
        [id]: {
            id: id,
            event: '',
            sets: 5,
            volume: 10
        }
    }
}

export default function AddForm() {
    const [cards, setCards] = useState(
        getInitData
    );
    const onAddEvent = (e) => {
        e.preventDefault();
        createOrUpdateCard({
            id: Date.now(),
            event: '',
            sets: 5,
            volume: 10
        });
    }

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    }

    const onDelete = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    }
    return (
        <form className={styles.addForm}>
            <button onClick={onAddEvent}>plus</button>
            {Object.keys(cards).map((card) => {
                return (
                    <AddFormCard onDelete={onDelete} key={card} card={cards[card]} onUpdate={createOrUpdateCard}></AddFormCard>
                )
            })}
        </form>
    )
}
