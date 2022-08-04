import Button from "./Button"

interface SymbolButtonProps{
    input: string,
    internal: number,
    setInternal: any,
    output: string,
    setOutput: any
}

function SymbolButton(props: SymbolButtonProps)  {

    const handleButton = () => {
        props.setOutput(1);
    }

    return (
        <Button className="symbol" handleButton={handleButton} input={props.input}></Button>
    )

}

export default SymbolButton;