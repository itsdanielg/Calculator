class Calculations {

    static isNewFlag: boolean = false;
    static expression: any = [0];
    static expressionIndex = 0;

    static setFlag(flag: boolean) {
        this.isNewFlag = flag;
        return this;
    }

    static resetExpression() {
        this.expression = [0];
        this.expressionIndex = 0;
        return this;
    }

    static clearOutput(): string {
        this.setFlag(true);
        return "0";
    }

    static clearExpression(): string {
        this.resetExpression();
        return this.clearOutput();
    }

    static equals(): string {
        let result = 0;
        if (this.expression[1] === '+') result = this.expression[0] + this.expression[2];
        else if (this.expression[1] === '-') result = this.expression[0] - this.expression[2];
        else if (this.expression[1] === 'x') result = this.expression[0] * this.expression[2];
        else result = this.expression[0] / this.expression[2];
        this.expression = [result];
        this.expressionIndex = 1;
        return result.toString();
    }

    static inputNum(input: string, output: string): string {
        let string = "";
        // Reset output if operation was pressed before
        if (Calculations.isNewFlag) {
            this.setFlag(false);
        }
        else string = output;
        // Prevent duplicate decimal points
        if (input===".") {
            if (string.includes(".")) return string;
            this.expression[this.expressionIndex] = string + '.';
            return string + '.';
        }
        // Don't include leading 0 in output
        if (string === "0") string = "";
        // Set expression to new output
        this.expression[this.expressionIndex] = parseInt(string+input);
        return string + input;
    }

    static inputOperation(operation: string): string {
        // Reset output
        this.setFlag(true);
        if (this.expression.length === 1) {
            this.expression[1] = operation;
            this.expressionIndex = 2;
            return this.expression[0].toString();
        }
        if (this.expression.length === 2) {
            this.expression[1] = operation;
            return this.expression[0].toString();
        }
        let result = this.equals();
        this.expression = [parseInt(result), operation];
        this.expressionIndex = 2;
        return this.expression[0].toString();
    }

    static inputSign(): string {
        this.expression[this.expressionIndex] = this.expression[this.expressionIndex]*-1;
        return this.expression[this.expressionIndex].toString();
    }

    static inputPercentage(): string {
        this.expression[this.expressionIndex] = this.expression[this.expressionIndex]*0.01;
        return this.expression[this.expressionIndex].toString();
    }

}

export default Calculations;