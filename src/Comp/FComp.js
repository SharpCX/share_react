import React, {useState} from "react";

export default function FComp() {
    const [counter, setCounter] = useState(0);

    const increaseOne = () => {
        setCounter(counter + 1)
    }

    return (
        <div>{counter}<input type='button' onClick={increaseOne} value='increase'/></div>
    )
}