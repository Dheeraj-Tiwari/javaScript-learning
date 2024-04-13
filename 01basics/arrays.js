//arrays

//3:13:12

const myArr = [0, 1, 2, 3, 4, 5] //value //collections of multiple items //js arrys are resizeable
              //0 1  2  3  4  5 : index
// console.log(myArr[2]);

const name = ["dheeraj", "sai", "tiwari"]

const nums = new Array(1, 2, 3, 4); //sallow copy

// console.log(nums.length);

///methods

nums.push(6) //add to the last element stack
nums.push(7)
nums.pop() //removes last element from the stack
// console.log('nums', nums)

nums.unshift(0) //adds to the first of array by shifting
// console.log('nums', nums)
nums.shift() //delets first
// console.log('nums', nums)

// console.log(nums.includes(6)) //true
// console.log(nums.indexOf(3)) //4


const newArr = myArr.join() //joins tow strings and coverts to string
// console.log('newArr', typeof newArr) //string
// console.log('myArr', typeof myArr) //array formate

//slice, splice

console.log("A ", myArr)

const myar1 = myArr.slice(1, 3) //will not incude last set index and will create a copy of array to perform oparations
console.log('myar1', myar1)
console.log("B ", myArr)

const myar2 = myArr.splice(1, 3) //is manupaulats the origanal array and also incudes last index
console.log('myar2', myar2)
console.log("C ", myArr)

