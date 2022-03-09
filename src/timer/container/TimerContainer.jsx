import React, { useCallback, useEffect, useState } from 'react';
import TimerComponent from '../component/TimerComponent';

const TimerContainer = () => {
    let [timer, setTimer] = useState(0)
    let [finishDate, setFinishDate] = useState(0);
    const [isOpen, setIsOpen] = useState(false);



    const handleChange = () => {
        setIsOpen(!isOpen);
    };
    let dateNow = Date.now()
    timer = +finishDate - dateNow

    let years = Math.floor(timer / (1000 * 60 * 60 * 24 * 30 * 12))
    let months = Math.floor(timer / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(timer / (1000 * 60 * 60 * 24) % 30)
    let hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
    let minutes = Math.floor((timer / (1000 * 60)) % 60)
    let seconds = Math.floor((timer / 1000) % 60);

    let timerData = {
        years: `${years < 10 ? '0' + years : '' + years}`,
        months: `${months < 10 ? '0' + months : '' + months}`,
        days: `${days < 10 ? '0' + days : '' + days}`,
        hours: `${hours < 10 ? '0' + hours : '' + hours}`,
        minutes: `${minutes < 10 ? '0' + minutes : '' + minutes}`,
        seconds: `${seconds < 10 ? '0' + seconds : '' + seconds}`
    }

    const filterDate = useCallback(date => {
        return date > dateNow
    }, [dateNow])

    const filterPassedTime = useCallback(time => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    }, [])

    useEffect(() => {
        timer > 0 ?
            setTimeout(() => setTimer(timer - 1), 1000)
            : clearTimeout(timer);;
    }, [timer])


    return (
        <>
            <TimerComponent
                handleChange={handleChange}
                finishDate={finishDate}
                setFinishDate={setFinishDate}
                filterDate={filterDate}
                filterPassedTime={filterPassedTime}
                isOpen={isOpen}
                result={timer}
                timerData={timerData}
            />
        </>
    )
}

export default TimerContainer