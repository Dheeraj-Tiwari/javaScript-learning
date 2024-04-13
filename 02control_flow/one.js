//if

// if(condition){

// }

// const isUserloggedIn = true

// if(isUserloggedIn){

// }

// <, >, <=, >=, ==, !=, === check type, !==

if(2 == "2"){
    // console.log("executed1")
}

if(2 === "2"){ //strect equal
    // console.log("executed2")
}

const temperature = 41

if(temperature < 50){
    // console.log("less then 50");
}else{
// console.log("greater than 50")
}

const score = 200

if(score > 100){
    const power = "walk"
    // console.log(`User power: ${power}`);
}

const bal = 1000
 
// if(bal < 500) console.log("test"), console.log("test1") //impeset scope 

// if (bal < 500) {
//     console.log("less than 500");
// }else if(bal < 750){
//     console.log("less than 750");
// }else if(bal < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const isUserloggedIn = true

const debitCard = true

const loggedInFromGoogle = false

const loggedInFromEmail = true

if (isUserloggedIn && debitCard && 2==3) {
    console.log("allow to buy")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user looged in")
}
