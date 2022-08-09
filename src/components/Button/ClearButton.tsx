import { useEffect, useState } from "react";
import Calculations from "../Calculations";
import Button from "./Button"

interface ClearButtonProps{
    input: string,
    output: string,
    setOutput: any
}

function ClearButton(props: ClearButtonProps)  {

    const [button, setButton] = useState(() => {
        return props.input;
    })

    const handleButton = () => {
        if (button === "C") props.setOutput(Calculations.clearOutput());
        else if (button === "AC") props.setOutput(Calculations.clearExpression());
    }
    
    useEffect(() => {
        if (props.output === "0") setButton("AC");
        else setButton("C");
    }, [props.output])

    return (
        <Button className="symbol" handleButton={handleButton} input={button}></Button>
    )

}

export default ClearButton;