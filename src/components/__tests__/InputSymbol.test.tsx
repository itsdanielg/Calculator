import Calculations from "../Calculations";

describe ("Clear, All Clear", () => {

    let output = "0";

    it("2+5, C", () => {
        output = "0";
        Calculations.resetExpression();
        output = Calculations.inputNum("2", output);
        output = Calculations.inputOperation("+");
        output = Calculations.inputNum("5", output);
        output = Calculations.clearOutput();
        expect(Calculations.expression).toEqual([2,"+",5]);
    })

    it("2+5, C", () => {
        output = "0";
        Calculations.resetExpression();
        output = Calculations.inputNum("2", output);
        output = Calculations.inputOperation("+");
        output = Calculations.inputNum("5", output);
        output = Calculations.clearOutput();
        expect(output).toBe("0");
    })

    it("25, +/-", () => {
        output = "0";
        Calculations.resetExpression();
        output = Calculations.inputNum("25", output);
        output = Calculations.inputSign();
        expect(output).toBe("-25");
    })

    it("25, %", () => {
        output = "0";
        Calculations.resetExpression();
        output = Calculations.inputNum("25", output);
        output = Calculations.inputPercentage();
        expect(output).toBe("0.25");
    })

})