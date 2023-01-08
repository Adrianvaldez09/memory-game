import React from "react";
import Scoreboard from "./Scoreboard";
import Time from "./Time";

export default function PlayingButtons({time, level, timeAttack, TimeAttempts,mainMenuButton, levelDisplay, speedDisplay, start}) {
    return (
            <div>
                <div className="info">
                    <Time  time={time}/>
                    {levelDisplay}
                    {speedDisplay}
                </div>
                <Scoreboard timeAttack={timeAttack} level={level} TimeAttempts={TimeAttempts} />
            </div>
    )
}