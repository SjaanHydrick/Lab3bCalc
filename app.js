const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const solve = document.getElementById('solve');
const results = document.getElementById('results');

solve.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;
    console.log(value1, value2);
    const value1Number = Number(value1);
    const value2Number = Number(value2);
    console.log(typeof value1Number, typeof value2Number);
    const sum = value1Number + value2Number; 
    console.log(sum);
    results.textContent = sum;

});