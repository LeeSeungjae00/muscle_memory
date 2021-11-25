import React, { useState } from 'react'
import { getNowDate } from '../../lib/dateConverter';
import { setGetEventData } from '../../modules/card_data';
import AddFormCard from '../add_form_card/add_form_card';
import styles from './add_form.module.css'
import { useDispatch } from 'react-redux';

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

export default function AddForm({userId}) {
    const dispatch = useDispatch();
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
    const onCommit = async (e) => {
        e.preventDefault();
        const total_volume = Object.keys(cards)
                            .map((card) => cards[card].sets * cards[card].volume)
                            .reduce((pre, cur) => pre + cur)
        const result = { cards , total_volume};

        dispatch(setGetEventData({userId, date : getNowDate(), result}));
        setCards(getInitData());
    }
    return (
        
        <form className={styles.addForm}>
            <button className={styles.eventAddBtn} onClick={onAddEvent}>운동 종목 추가</button>
            <div className={styles.cards}>
                {Object.keys(cards).map((card) => {
                    return (
                        <AddFormCard onDelete={onDelete} key={card} card={cards[card]} onUpdate={createOrUpdateCard}></AddFormCard>
                    )
                })}
            </div>
            <div className={styles.submitArea}>
                <div>
                    Today Volume : {cards &&
                        Object.keys(cards).map((card) => cards[card].sets * cards[card].volume)
                                          .reduce((pre, cur) => pre + cur)
                    } Kg
                </div>
                <button className={styles.commit} onClick={onCommit}>Commit</button>

            </div>
        </form>
    )
}
