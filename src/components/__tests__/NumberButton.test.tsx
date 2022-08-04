import { fireEvent, screen, render } from '@testing-library/react';
import NumberButton from '../Button/NumberButton'

describe("Buttons 0-9 output", () => {

    let output = "0";
    const setOutput = (prevOutput: string) => {
        output = prevOutput;
    }

    it("Enters output 1", () => {
        output = "0";
        render(<NumberButton input={"1"} prevOutput={output} setOutput={setOutput}/>)
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(output).toBe("1");
    })
    
    it("Enters output 3", () => {
        output = "0";
        render(<NumberButton input={"3"} prevOutput={output} setOutput={setOutput}/>)
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(output).toBe("3");
    }) 

    it("Enters output 7", () => {
        output = "0";
        render(<NumberButton input={"7"} prevOutput={output} setOutput={setOutput}/>)
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(output).toBe("7");
    }) 

})

describe("Buttons 0-9 and . append", () => {

    let output = "40";
    const setOutput = (prevOutput: string) => {
        output = prevOutput;
    }

    it("Enters output 21", () => {
        output = "0";
        let button: any = "";
        render(<NumberButton input={"2"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[0];
        fireEvent.click(button);
        render(<NumberButton input={"1"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[1];
        fireEvent.click(button);
        expect(output).toBe("21");
    })

    it("Enters output 387", () => {
        output = "0";
        let button: any = "";
        render(<NumberButton input={"3"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[0];
        fireEvent.click(button);
        render(<NumberButton input={"8"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[1];
        fireEvent.click(button);
        render(<NumberButton input={"7"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[2];
        fireEvent.click(button);
        expect(output).toBe("387");
    })

    it("Enters output 70520", () => {
        output = "0";
        let button: any = "";
        render(<NumberButton input={"7"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[0];
        fireEvent.click(button);
        render(<NumberButton input={"0"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[1];
        fireEvent.click(button);
        render(<NumberButton input={"5"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[2];
        fireEvent.click(button);
        render(<NumberButton input={"2"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[3];
        fireEvent.click(button);
        render(<NumberButton input={"0"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[4];
        fireEvent.click(button);
        expect(output).toBe("70520");
    })

    it("Enters output 27 with leading 0", () => {
        output = "0";
        let button: any = "";
        render(<NumberButton input={"0"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[0];
        fireEvent.click(button);
        render(<NumberButton input={"2"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[1];
        fireEvent.click(button);
        render(<NumberButton input={"7"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[2];
        fireEvent.click(button);
        expect(output).toBe("27");
    }) 

    it("Enters output 9 with leading 000000", () => {
        output = "0";
        let button: any = "";
        render(<NumberButton input={"0"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[0];
        fireEvent.click(button);
        render(<NumberButton input={"0"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[1];
        fireEvent.click(button);
        render(<NumberButton input={"0"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[2];
        fireEvent.click(button);
        render(<NumberButton input={"0"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[3];
        fireEvent.click(button);
        render(<NumberButton input={"0"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[4];
        fireEvent.click(button);
        render(<NumberButton input={"0"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[5];
        fireEvent.click(button);
        render(<NumberButton input={"9"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[6];
        fireEvent.click(button);
        expect(output).toBe("9");
    })

    it("Enters output 9.02", () => {
        output = "0";
        let button: any = "";
        render(<NumberButton input={"9"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[0];
        fireEvent.click(button);
        render(<NumberButton input={"."} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[1];
        fireEvent.click(button);
        render(<NumberButton input={"0"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[2];
        fireEvent.click(button);
        render(<NumberButton input={"2"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[3];
        fireEvent.click(button);
        expect(output).toBe("9.02");
    })

    it("Enters output 0.33", () => {
        output = "0";
        let button: any = "";
        render(<NumberButton input={"."} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[0];
        fireEvent.click(button);
        render(<NumberButton input={"."} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[1];
        fireEvent.click(button);
        render(<NumberButton input={"3"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[2];
        fireEvent.click(button);
        render(<NumberButton input={"3"} prevOutput={output} setOutput={setOutput}/>)
        button = screen.getAllByRole("button")[3];
        fireEvent.click(button);
        expect(output).toBe("0.33");
    })

})