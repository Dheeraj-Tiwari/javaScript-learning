const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) num.00

const othewr = 454.464 //ignors small decimals
const others = 454.895 //op is 455

// console.log(others.toPrecision(3));

const hunderads = 10000000
// console.log(hunderads.toLocaleString()); //us standads
// console.log(hunderads.toLocaleString("en-IN")); //In

// console.log(Number.MIN_VALUE)

// ***********MAth***************************

// console.log(Math)
// console.log(Math.abs(-4)) //absalute value -ve to +ve
// console.log(Math.round(4.6)) 
// console.log(Math.ceil(4.2)) //TOp priurety
// console.log(Math.floor(4.6)) //bottem priurety
// console.log(Math.min(-4, 5, 6, -1)) 
// console.log(Math.max(-4, 5, 6, -1)) 

// console.log(Math.random()) //0 - 1 
// console.log(Math.random()*10+1) //0 - 10  //+1 to avoud zeros
// console.log(Math.floor(Math.random()*10) + 1)  //currect only nums

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)






