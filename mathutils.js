// getting math from dropbox

export function dropBoxMath (operator, value1, value2) {
    if (operator === "add") {
        return value1 + value2;
    } else if (operator === "sub") {
        return  value1 - value2;
    } else if (operator === "times") {
        return value1 * value2;
    } else if (operator === "div") {
        return value1 / value2;
    }

}

const results = document.getElementById('results');

export function showAnswer(value) {
    results.textContent = value;
}