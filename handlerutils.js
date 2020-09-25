
import { dropBoxMath , showAnswer } from './mathutils.js';

// click handlers
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const dropDown = document.getElementById('drop-down');

export function solveClick() {
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    const checkDrop = dropDown.value;
    
    const doMath = dropBoxMath(checkDrop, value1, value2);

    showAnswer(doMath)
}
