"use strict";

function firstTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i = 0; i < data.length; i++) {
        result[i] = data[(data.length - 1) - i];
    }

    return result;
}

console.log(firstTask());