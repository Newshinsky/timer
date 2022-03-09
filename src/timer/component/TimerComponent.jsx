import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TimerComponent.css";
import 'animate.css';


const TimerComponent = (props) => {
    return (
        <div className="dateWrapper">
            {
                props.isOpen
                    ?
                    <>
                        <h1>To Your date</h1>
                        <div className="timerWrapper" >
                            <div className="infoItem animate__animated animate__zoomInDown  animate__delay-1s">
                                <h2>Years</h2>
                                <h1>{props.timerData.years}</h1>
                            </div>
                            <div className="infoItem animate__animated animate__zoomInDown  animate__delay-1s">
                                <h2>Months</h2>
                                <h1>{props.timerData.months}</h1>
                            </div>
                            <div className="infoItem animate__animated animate__zoomInDown  animate__delay-2s">
                                <h2>Days</h2>
                                <h1>{props.timerData.days}</h1>
                            </div >
                            <div className="infoItem animate__animated animate__zoomInDown  animate__delay-2s">
                                <h2>Hours</h2>
                                <h1>{props.timerData.hours}</h1>
                            </div>
                            <div className="infoItem animate__animated animate__zoomInDown  animate__delay-3s">
                                <h2>Minutes</h2>
                                <h1>{props.timerData.minutes}</h1>
                            </div>
                            <div className="infoItem animate__animated animate__zoomInDown  animate__delay-3s">
                                <h2>Seconds</h2>
                                <h1>{props.timerData.seconds}</h1>
                            </div>
                        </div>
                        <button
                            className="button"
                            onClick={props.handleChange}>
                            Choose date
                        </button>
                    </>
                    :
                    <>
                        <h1>Choose your Date </h1>
                        <DatePicker
                            selected={props.finishDate}
                            onChange={(date) => props.setFinishDate(date)}
                            filterDate={props.filterDate}
                            filterTime={props.filterPassedTime}
                            withPortal
                            showTimeSelect
                        />
                        <button
                            onClick={props.handleChange}
                            className="button"
                            disabled={props.result < 0}
                        >
                            Calculate
                        </button>
                    </>
            }
        </div >)
}

export default TimerComponent