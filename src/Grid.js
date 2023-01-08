import React from "react";

export default function Grid({start, level, correctElements, tileElements, finished, failed}) {
    const showCorrectElements = (
        <div className={`game-container ${level}`}>
                {correctElements}
        </div>
    )

    const gameFailed = `game-container failedState ${level}`
    const gameSuccess = `game-container finished ${level}`
    const gameOnGoing = `game-container onGoing ${level}`

    return (
        (start ?
            (showCorrectElements) 
        :
        <div 
        className={
            failed ? 
                (gameFailed) 
            : 
                (finished ? 
                    (gameSuccess) 
                    :
                    (gameOnGoing))
                }
            >
            {tileElements}
        </div>)
            
    )
}