//for of

//["", "", ""]
//[{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const value of arr) { //for of loop
    // console.log(value)
}

const greets = "Hello Guys"

for (const greet of greets) {
    if (greet == " ") {
        continue
    }
    // console.log(greet);
}

//Maps

const map = new Map()

/*The Map object holds key-value pairs and remembers the original 
insertion order of the keys. Any value (both objects and primitive values) 
fmay be used as either a key or a value. */

map.set("IN", "India") //key value parirs
map.set("USA", "United States of America")
map.set("France", "France") //value are unque and put on same oder as you 
map.set("France", "France")


// console.log('map', map)

// for (const mp of map) { //prients all arrays
//  console.log(mp);  
// }
// console.log(typeof map)
for (const [key, value] of map) { //prients all arrays
    // console.log(key, value);  
    // console.log(typeof key);
   }

   const newObj = {
    name: "dhhearj",
    number: 45
   }

// for(const [obj] of newObj){  //❌ //newObj is not iterable
//     console.log(obj)
// }




