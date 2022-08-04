export function inputNum(input: string, output: string): string {
    let string = output;
    if (input===".") {
        if (string.includes(".")) return string;
        return string + input;
    }
    if (string === "0") string = "";
    return string + input;
}