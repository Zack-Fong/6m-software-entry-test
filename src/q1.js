/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function isNumeric(variableToBeChecked) {
    return isNaN(Number(variableToBeChecked)) ? false : true;
}

function swap(x, y) {
    // Task 1: Add code here
    if (!isNumeric(x) || !isNumeric(y)) return -1;

    x = x + y;

    y = x - y;
    x -= y;

    console.log("Swapped x: ", x);
    console.log("Swapped y: ", y);

    return [x, y]
}

// Task 2: Add code here
swap(1, 3);


module.exports = swap;
