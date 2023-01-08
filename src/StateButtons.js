import React from "react";
import FailedButtons from "./FailedButtons";
import PlayingButtons from "./PlayingButtons";

export default function StateButtons({time, level, timeAttack, TimeAttempts, retryButton,mainMenuButton, levelDisplay, failed, speedDisplay, speed,start}) {

    return (
        (
            failed ?
            <FailedButtons 
                timeAttack={timeAttack}
                time={time}
                level={level}
                failed={failed}
                retryButton={retryButton}
                mainMenuButton={mainMenuButton}
                levelDisplay={levelDisplay}
                speedDisplay={speedDisplay}
                TimeAttempts={TimeAttempts}
                speed={speed}
            />

            :
            <PlayingButtons
                timeAttack={timeAttack}
                time={time}
                level={level}
                failed={failed}
                mainMenuButton={mainMenuButton}
                levelDisplay={levelDisplay}
                speedDisplay={speedDisplay}
                TimeAttempts={TimeAttempts}
                start={start}

            />
        )
    )
}