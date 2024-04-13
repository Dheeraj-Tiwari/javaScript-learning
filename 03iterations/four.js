const myObj = {
    js: "javascript",
    cSharp: "C#",
    Java: "java",
    php: "php",
    mySQL: "sql"

}

for (const key in myObj) {
    // if (Object.hasOwnProperty.call(myObj, key)) {
    //     const element = myObj[key];
    //     console.log('element', element)   
    // }

    // console.log(`${key} for ${myObj[key]}`);
}

const myArray = [1, 2, 3, 4, 5, 6]

for (const key in myArray) {
//    console.log(`${key} for ${myArray[key]}`)
}

const map = new Map()
map.set("IN", "India") 
map.set("USA", "United States of America")
map.set("France", "France") 
map.set("France", "Fr")

for(const key in map){ //map is not itratable
    // console.log(`${key} for ${map[key]}`)

}

//obj => for in loop, arr => forOf loop