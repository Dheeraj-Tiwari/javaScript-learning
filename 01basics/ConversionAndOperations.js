// let score = 100
// let score = "100"
// let score = "abc123" //Not a number but it still consedered as number
// let score = null //0
// let score = undefined //nan number
let score = true //0



// const {score} =req.body no garentey that this will return number

// console.log(typeof score)
// console.log(typeof (score))

// console.log(typeof score);

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let isLoggedIn = 1

// let boolenIsLoggedIn = Boolean(isLoggedIn)

// console.log(boolenIsLoggedIn); //true

isLoggedIn = ""

// let boolenIsLoggedIn = Boolean(isLoggedIn)

// console.log(boolenIsLoggedIn); //false

isLoggedIn = "ckdn"

let boolenIsLoggedIn = Boolean(isLoggedIn)

// console.log(boolenIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

//******************* Operations *********************

let value = 3
let negValue = -value

// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**2) //power


let str1 = "hello"
let str2 = " dheeraj"

let str3 = str1 + str2

console.log(str3)

// console.log("1" + 2) //12
// console.log(typeof(1 + "2")) //12 converting to string

// console.log("2" - 1) //converted into number
// console.log(2 - "1")

//console.log("1" + 2 + 2) //122
//console.log("1" +  + (2 + 2)) //14
//console.log(1+2+"2"); //32
// console.log(3+4*(5%3))

// console.log(+true); //1
// console.log(true+)  no
// console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2+2

// console.table([num1, num2, num3]) //4

let gameCounter = 100;

// gameCounter++; //101
++gameCounter
// console.log(gameCounter);
/////////////compare
// console.log("2" > 1); //true
// console.log(2 > "1"); //true

// console.log(null > 0); comparisions convert null to number => 0
// console.log(null == 0); //but equliaty check works differently
// console.log(null <= 0); t
// console.log(null < 0); //f

// console.log(undefined == 0); //f
// console.log(undefined > 0); //f
// console.log(undefined < 0); //f

//=== strict check

console.log("2" == 2);
console.log("2" === 2);







