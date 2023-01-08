import React from "react";
import Scoreboard from "./Scoreboard";
import Time from "./Time";
import laughingMEME from './images/laughingMEME.png'

export default function FailedButtons({time, level, timeAttack, TimeAttempts, retryButton,mainMenuButton, levelDisplay,speedDisplay, speed}) {

    return (
        <div className="info-container">
            <h1 className="message">Failed!</h1>
            <div className="menu-button-container">
                {retryButton}
                {mainMenuButton}
            </div>
            {level == "Easy" && speed.label == "Slowest" ? (<img className="meme" src={laughingMEME} alt="MEMe"/>) : ""}
            <div className="info">
                <Time  time={time}/>
                {levelDisplay}
                {speedDisplay}
            </div>
            <Scoreboard timeAttack={timeAttack} level={level} TimeAttempts={TimeAttempts} />
        </div>
    )
}