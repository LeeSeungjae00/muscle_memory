import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventData } from '../../modules/card_data';
import EventLog from '../event_log/event_log';
import styles from './event_log_area.module.css';

export default function EventLogArea({ userId }) {
    const { data } = useSelector(state => state.cardData.eventData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEventData({ userId }))
    }, [userId, dispatch])
    return (
        <div className = {styles.eventLogArea}>
            <ul className={styles.eventLog}>
                {data && Object.keys(data).map(
                    (event) => <EventLog key={event} date={event} data={data[event]} />)
                }
            </ul>
        </div>
    )
}
