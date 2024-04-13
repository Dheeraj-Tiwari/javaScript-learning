const hello = ["hi", 'ola', "hello", "namasta"]
const bye = ["bye", "goodbye", "sayonara", "namasta"]

// hello.push(bye) //created nested arrays ❌
// console.log('hello', hello) 

// console.log(hello[4][1]) //nested array access 2darrays

const nwar = hello.concat(bye) //combinds arrays and returns new array ✅
// console.log('nwar', nwar)

//sprad operater eg glass trow down and it splits into pices

const newarr = [...hello, ...bye] //arrys elements indevduval
// console.log('newarr', newarr)

const anouther_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //super nested arrays
// console.log('anouther_array', anouther_array)
const indArry = anouther_array.flat(Infinity) //insert the depth
console.log('indArry', indArry)



console.log( Array.isArray("Hiiiii")) //checks is if this is a array
console.log(Array.from("hiiiiiiii")) //converts to array
console.log(Array.from({name: "hihihih"})) //returns empaty arrays


let score1 = 100
let score2 = 500
let score3 = 300

console.log(Array.of(score1, score2, score3)) //convers to array
