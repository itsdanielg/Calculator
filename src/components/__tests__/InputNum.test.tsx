import {inputNum} from "../Calculations"

describe("Buttons 0-9 output", () => {

    let output = "0";

    it("Enters output 1", () => {
        output = "0";
        output = inputNum("1", output);
        expect(output).toBe("1");
    })
    
    it("Enters output 3", () => {
        output = "0";
        output = inputNum("3", output);
        expect(output).toBe("3");
    }) 

    it("Enters output 7", () => {
        output = "0";
        output = inputNum("7", output);
        expect(output).toBe("7");
    }) 

})

describe("Buttons 0-9 and . append", () => {

    let output = "0";

    it("Enters output 21", () => {
        output = "0";
        output = inputNum("2", output);
        output = inputNum("1", output);
        expect(output).toBe("21");
    })
    
    it("Enters output 387", () => {
        output = "0";
        output = inputNum("3", output);
        output = inputNum("8", output);
        output = inputNum("7", output);
        expect(output).toBe("387");
    })

    it("Enters output 70520", () => {
        output = "0";
        output = inputNum("7", output);
        output = inputNum("0", output);
        output = inputNum("5", output);
        output = inputNum("2", output);
        output = inputNum("0", output);
        expect(output).toBe("70520");
    })

    it("Enters output 27 with leading 0", () => {
        output = "0";
        output = inputNum("0", output);
        output = inputNum("2", output);
        output = inputNum("7", output);
        expect(output).toBe("27");
    }) 

    it("Enters output 9 with leading 000000", () => {
        output = "0";
        output = inputNum("0", output);
        output = inputNum("0", output);
        output = inputNum("0", output);
        output = inputNum("0", output);
        output = inputNum("0", output);
        output = inputNum("0", output);
        output = inputNum("9", output);
        expect(output).toBe("9");
    })

    it("Enters output 9.02", () => {
        output = "0";
        output = inputNum("9", output);
        output = inputNum(".", output);
        output = inputNum("0", output);
        output = inputNum("2", output);
        expect(output).toBe("9.02");
    })

    it("Enters output 0.33", () => {
        output = "0";
        output = inputNum(".", output);
        output = inputNum(".", output);
        output = inputNum("3", output);
        output = inputNum("3", output);
        expect(output).toBe("0.33");
    })

})