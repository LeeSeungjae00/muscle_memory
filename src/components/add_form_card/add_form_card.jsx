import React from 'react'

export default function AddFormCard({card , onUpdate}) {
    const {event, sets, volume} = card;
    const onChange = (event) => {
        if(event.currentTarget == null){
            return;
        }
        event.preventDefault();
        onUpdate({
            ...card,
            [event.currentTarget.name] : event.currentTarget.value,
        })
    }
    return (
        <div>
            <input
                type="text"
                name="event"
                value={event}
                onChange = {onChange}
                placeholder="운동 종목"
            />
            <input
                type="range"
                name="sets"
                value={sets}
                onChange = {onChange}
                min='1'
                max='20'
            />
            <input
                type="range"
                name="volume"
                value={volume}
                onChange = {onChange}
                min='1'
                max='500'
            />
            {<>total volume {sets * volume} kg</>}
        </div>
    )
}
