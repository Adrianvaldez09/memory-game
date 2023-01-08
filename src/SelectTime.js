import React from "react";
import Select, { components } from 'react-select'

export default function SelectTime({setTimeLength, speed, setSpeed}) {
    const options = [
        {value: 200, label: 'Fastest', color: "red"},
        {value: 400, label: 'Fast', color: "orange"},
        {value: 600, label: 'Normal', color: "blue"},
        {value: 800, label: 'Slow', color: "#97d639"},
        {value: 1000, label: 'Slowest', color: "green"},
    ]

    const colorStyles = {
        control: (styles) => ({...styles, color:"blue", backgroundColor:"white"}),
        option: (styles, {data, isDisabled, isFocused, isSelected}) => {
            // console.log("option", data,isFocused, isDisabled,isSelected)
            return{...styles, color:data.color}
        },
        singleValue: (styles, {data}) => {
            return {
                ...styles,
                color:data.color,
            }
        }
    };

    function handleChange(selectedOption) {
        setSpeed(selectedOption)
        setTimeLength(selectedOption.value)
    }
    return (
        <div className="select-time-container">
            <p>Timer:</p>
            <Select singleValue styles={colorStyles} className="select-time" defaultValue={speed} options={options} onChange= {handleChange}>
        </Select>
        </div>
    )
}