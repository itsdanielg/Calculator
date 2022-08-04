import Button from "./Button"

interface OperationButtonProps{
    input: string,
    internal: number,
    setInternal: any,
    output: string,
    setOutput: any
}

function OperationButton(props: OperationButtonProps)  {

    const handleButton = () => {
        props.setOutput(1);
    }

    return (
        <Button className="operation" handleButton={handleButton} input={props.input}></Button>
    )

}

export default OperationButton;