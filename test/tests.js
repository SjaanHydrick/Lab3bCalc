import { dropBoxMath } from '../mathutils.js';

const test = QUnit.test;

test('add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const input1 = 1;
    const input2 = 2;
    const operator = 'add';
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = dropBoxMath(operator, input1, input2)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const input1 = 1;
    const input2 = 2;
    const operator = 'sub';
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = dropBoxMath(operator, input1, input2)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const input1 = 2;
    const input2 = 2;
    const operator = 'times';
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = dropBoxMath(operator, input1, input2)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divide', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const input1 = 4;
    const input2 = 2;
    const operator = 'div';
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = dropBoxMath(operator, input1, input2)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
