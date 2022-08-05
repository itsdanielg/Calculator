import Button from "./Button";
import Calculations from "../Calculations";

interface OperationButtonProps{
    input: string
    setOutput: any
}

function OperationButton(props: OperationButtonProps)  {

    const handleButton = () => {
        props.setOutput(Calculations.inputOperation(props.input));
    }

    return (
        <Button className="operation" handleButton={handleButton} input={props.input}></Button>
    )

}

export default OperationButton;