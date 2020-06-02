// Code your solutions in this file
function writeCards(array, event) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}

// function countDown(integer) {
//     let i = 0
//     while (i <= integer) {
//         console.log(integer - i)
//         i++
//     }
// }

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer -= 1;
    }
}