/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/



// Subtask-1:
let i = 61;
while (i <= 100) {
    // console.log(i);
    if (i % 2 !== 0) {
        console.log(`This is ODD number = ${i}`);
    }
    i++;
}




// Subtask-2:
let j = 78;
while (j <= 98) {
    // console.log(j);
    if (j % 2 === 0) {
        console.log("This is even number = ", j);
    }
    j++;
}
