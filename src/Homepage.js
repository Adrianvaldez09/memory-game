import React from "react";
import SelectTime from "./SelectTime";
import Scoreboard from "./Scoreboard";

export default function Homepage({level, changeToEasy, changeToMedium, changeToHard, startGame, timeLength, setTimeLength, speed, setSpeed, timeAttack, TimeAttempts}) {

    return (
        <div className="homepage-container">
            <h1>Welcome to Faster than Fast</h1>
            <h3>Memorize the numbers on the screen and click on them in order.</h3>
            <div className="btn-Container">
                <button className="lvlButton startBtn" onClick={() => startGame()}>Start</button>
                <p className="currentLvl select-level">Select your level:</p>
                <div className="lvlChangerContainer">
                    <button className={level == "Easy" ? "lvlButton easyLevel" :  "lvlButton"} onClick={() => changeToEasy()}>Easy - 4</button>
                    <button className={level == "Medium" ? "lvlButton mediumLevel" :  "lvlButton"} onClick={() => changeToMedium()}>Medium - 6</button>
                    <button className={level == "Hard" ? "lvlButton hardLevel" :  "lvlButton"} onClick={() => changeToHard()}>Hard - 8</button>
                </div>
                <SelectTime 
                timeLength={timeLength} 
                setTimeLength={setTimeLength}
                speed={speed}
                setSpeed={setSpeed}
                />
            </div>
            <Scoreboard timeAttack={timeAttack} level={level} TimeAttempts={TimeAttempts} />
        </div>
    )
}