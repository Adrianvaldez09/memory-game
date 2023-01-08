import React from "react";

export default function Tiles(props) {
    let correctNotClicked = "correctNotClicked"

    let wrongNotClicked = "wrongNotClicked"

    let wrongButClicked = 'wrongButClicked'

    let rightSequence
    if (props.value == props.sequence) {
        rightSequence = 'rightSequence'
    } else {
        rightSequence = ''
    }

    return (
        <div className={
            props.clicked ? 
            (props.correct ? (props.clickedEarly ? `tile-container clickedEarly` : 'tile-container clickedCorrect') : `tile-container clicked ${wrongButClicked}`) 
            : 
            (props.correct? (props.value == props.sequence && props.failed == true ? `tile-container ${rightSequence}` :`tile-container ${correctNotClicked}`): `tile-container ${wrongNotClicked}`)} onClick={props.holdTile}>
            <h3>{props.value}</h3>
        </div>
    )
}