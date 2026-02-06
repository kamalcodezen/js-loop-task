/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/


// Subtask-1:
let j = 81;
let sum = 0;
while (j <= 131) {
    if (j % 2 !== 0) {
        sum += j;
    }
    j++;
}

console.log("sum of all the ODD number", sum);


// Subtask-2
let i = 206;
let sum2 = 0;
while (i <= 311) {
    if (i % 2 === 0) {
        sum2 += i;
    }
    i++;
}
console.log("Sum of all the Even number", sum2);