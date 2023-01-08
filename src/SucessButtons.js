import React from "react";
import Scoreboard from "./Scoreboard";
import Time from "./Time";

export default function SuccessButtons({time, level, timeAttack, TimeAttempts,mainMenuButton, levelDisplay, againButton, speedDisplay}) {

    return (
          <div>
            <h1 className="message">Success!</h1>
            <div className="menu-button-container">
              {againButton}
              {mainMenuButton}
            </div>
            <div className="info">
                <Time  time={time}/>
                {levelDisplay}
                {speedDisplay}
            </div>
            <Scoreboard timeAttack={timeAttack} level={level} TimeAttempts={TimeAttempts} />
          </div>
    )
}