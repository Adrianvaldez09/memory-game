import React from "react";

export default function Time({time}) {

    return (
        <div className="timer">
            <span className="digits">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
            {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
        </div>
    )
}