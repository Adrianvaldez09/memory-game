import React from "react";

export default function Scoreboard({timeAttack, TimeAttempts}) {
    return (
        <div className={timeAttack.length == 0 ? ("noAttempts") : ""}>
            <h2 className="results-title">Attempts</h2>
            <div className="results-headers">
                <h4>Time:</h4>
                <h4>Status:</h4>
                <h4>Difficulty:</h4>
                <h4>Speed:</h4>
            </div>
            <div className="results-container">
                <div className="results-list">
                    {TimeAttempts}
                </div>
            </div>
        </div>
    )
}