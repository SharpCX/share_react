import {WithWeightAComp} from "./HComp";
import DataSource from "./DataSource";
import {useState} from "react";

export default function () {

    const [weight, setWeight] = useState()

    function changeDs() {
        DataSource.change(parseInt(weight))
    }

    return (
        <div>
            WithWeightAComp
            <br/>
            <input value={weight} onChange={e => {
                setWeight(e.target.value)
            }}/>
            <input type='button' onClick={changeDs} value='apply'/>
            <WithWeightAComp/>
        </div>
    )
}