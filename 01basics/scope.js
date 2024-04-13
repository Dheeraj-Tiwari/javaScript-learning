var c = 500 //hoisting concept //an unknown or overlooked behavior of JavaScript

let b = 500

if(true){

    let a = 10
    
    const b = 20
    
    var c = 30
    
    d = 50

    // console.log("Inner:", b)
}

{} //function scope
// console.log(a);
// console.log(b);
// console.log(c); //problem ❌
// console.log(d); //problem ❌
// console.log(b) //✅

//browser globle scope and node.js globle scope are differant

function one(){
    const username = "dheeraj"

    function two(){
        const website = "github"
        console.log(username)
    }

    // console.log(website)❌ line by line execution did not whent to next line

    two() //function call stack is created differently
}

// one()

if(true){
    const username = "dheeraj"

    if(username == "dheeraj"){
        const website = " youtube"
        // console.log(username + website)

    }
    // console.log(website);
}

// console.log(username);

//***************intersting *************/
console.log(addone(5))

function addone(num){
    return num+1
}


// console.log(addTwo(6)) //Cannot access 'addTwo' before initialization
const addTwo = function(num){ //function expression
    return num + 2
}

console.log(addTwo(6))