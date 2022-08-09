import { useEffect, useState } from "react";
import Calculations from "../Calculations";
import Button from "./Button"

interface SymbolButtonProps{
    input: string,
    output: string,
    setOutput: any
}

function SymbolButton(props: SymbolButtonProps)  {

    const handleButton = () => {
        if (props.input === "+/-") props.setOutput(Calculations.inputSign());
        else props.setOutput(Calculations.inputPercentage());
    }

    return (
        <Button className="symbol" handleButton={handleButton} input={props.input}></Button>
    )

}

export default SymbolButton;