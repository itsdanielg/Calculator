import Calculations from "../Calculations";

describe ("Addition/Subraction operation", () => {

    let output = "0";
    let operation = "+"

    it("2+", () => {
        output = "0";
        Calculations.resetExpression();
        output = Calculations.inputNum("2", output);
        output = Calculations.inputOperation(operation);
        expect(output).toBe("2");
    })

    it("2+3=", () => {
        output = "0";
        Calculations.resetExpression();
        output = Calculations.inputNum("2", output);
        output = Calculations.inputOperation(operation);
        output = Calculations.inputNum("3", output);
        output = Calculations.equals();
        expect(output).toBe("5");
    })

    it("12+20=", () => {
        output = "0";
        Calculations.resetExpression();
        output = Calculations.inputNum("12", output);
        output = Calculations.inputOperation(operation);
        output = Calculations.inputNum("20", output);
        output = Calculations.equals();
        expect(output).toBe("32");
    })

    it ("5+7+9=", () => {
        output = "0";
        Calculations.resetExpression();
        output = Calculations.inputNum("5", output);
        output = Calculations.inputOperation(operation);
        output = Calculations.inputNum("7", output);
        output = Calculations.inputOperation(operation);
        output = Calculations.inputNum("9", output);
        output = Calculations.inputOperation(operation);
        expect(output).toBe("21");
    })


    it("7-", () => {
        output = "0";
        operation = "-";
        Calculations.resetExpression();
        output = Calculations.inputNum("7", output);
        output = Calculations.inputOperation(operation);
        expect(output).toBe("7");
    })
    
    it("7-3=", () => {
        output = "0";
        operation = "-";
        Calculations.resetExpression();
        output = Calculations.inputNum("7", output);
        output = Calculations.inputOperation(operation);
        output = Calculations.inputNum("3", output);
        output = Calculations.equals();
        expect(output).toBe("4");
    })

    it("87-34=", () => {
        output = "0";
        operation = "-";
        Calculations.resetExpression();
        output = Calculations.inputNum("87", output);
        output = Calculations.inputOperation(operation);
        output = Calculations.inputNum("34", output);
        output = Calculations.equals();
        expect(output).toBe("53");
    })

    it("18-5-7-", () => {
        output = "0";
        operation = "-";
        Calculations.resetExpression();
        output = Calculations.inputNum("18", output);
        output = Calculations.inputOperation(operation);
        output = Calculations.inputNum("5", output);
        output = Calculations.inputOperation(operation);
        output = Calculations.inputNum("7", output);
        output = Calculations.inputOperation(operation);
        expect(output).toBe("6");
    })

    it("7-+-+-+1=", () => {
        output = "0";
        Calculations.resetExpression();
        output = Calculations.inputNum("7", output);
        output = Calculations.inputOperation("-");
        output = Calculations.inputOperation("+");
        output = Calculations.inputOperation("-");
        output = Calculations.inputOperation("+");
        output = Calculations.inputOperation("-");
        output = Calculations.inputOperation("+");
        output = Calculations.inputNum("1", output);
        output = Calculations.equals();
        expect(output).toBe("8");
    })

    it("3+5=-4=", () => {
        output = "0";
        Calculations.resetExpression();
        output = Calculations.inputNum("3", output);
        output = Calculations.inputOperation("+");
        output = Calculations.inputNum("5", output);
        output = Calculations.equals();
        output = Calculations.inputOperation("-");
        output = Calculations.inputNum("4", output);
        output = Calculations.equals();
        expect(output).toBe("4");
    })
    
})