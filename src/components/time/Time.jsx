import React, { useState } from 'react';

const Time = () => {
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    const fetchHour =() =>{
        const now = new Date()
        setHours(now.getHours())
        setMinutes(now.getMinutes())
        setSeconds(now.getSeconds())
    }
    setInterval(() => {
        fetchHour()
    }, 100)

    return (
        <div className='mainTime'>
            <span>{hours < 9 ? '0' + hours : hours} : {minutes < 9 ? '0' + minutes : minutes} : {seconds < 9 ? '0' + seconds : seconds}</span>
            
        </div>
    );
};

export default Time;