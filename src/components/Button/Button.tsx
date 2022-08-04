export interface ButtonProps {
    input: string,
    handleButton: any,
    className: string
}

function Button(props: ButtonProps) {

    return (
        <button className={props.className} onClick={props.handleButton}>{props.input}</button>
    )

}

export default Button;