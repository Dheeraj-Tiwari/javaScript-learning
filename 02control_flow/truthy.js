// const userEmail = "dheerah@mail.com" //truthy value
const userEmail = "" //truthy value

// if(userEmail){
//     console.log("Got user email")
// }else{
//     console.log("Dont have user email")
// }

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
//  console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let valu;

// valu = 5 ?? 10

// val1 = undefined ?? 15

// valu = null ?? 10
// console.log('valu', valu)
val1 = null ?? 10 ?? 20

console.log('val1', val1)

//Terniary Operator

// condition ? true : false

const icePriice = 100

icePriice <= 80 ? console.log("less than 80") : console.log("more then 80")