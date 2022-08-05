import Button from "./Button";
import Calculations from "../Calculations";

interface NumberButtonProps{
    input: string,
    prevOutput: string,
    setOutput: any
}

function NumberButton(props: NumberButtonProps)  {

    const handleButton = () => {
        props.setOutput(Calculations.inputNum(props.input, props.prevOutput));
    }

    return (
        <Button className={props.input !== "0" ? "number" : "number zero"} handleButton={handleButton} input={props.input}></Button>
    )

}

export default NumberButton;