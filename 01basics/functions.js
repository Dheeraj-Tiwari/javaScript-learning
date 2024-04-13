

function sayName(){
    console.log('a');
    console.log('b');
    console.log('c');
}

// sayName //referance
// sayName() //exegution

function addTwoNumbers(num1, num2){ //parameters
    // console.log(num1 + num2)
    return num1 + num2;
}

const res = addTwoNumbers(2, 5) //arguments 

// console.log("Result: ", res)

function loginUserMessage(username = "user"){ //default value will be overwrited
    if(/*username === undefined*/ !username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("dheeraj"))
// console.log(loginUserMessage()) //undefined

function calculateCartPrice(...num1){ //rest operated n number of parameters
    return num1 //returns array
}

// console.log(calculateCartPrice(200, 300, 400))

function calculateCartPrice(...num1){ 
    return num1 
}

const user = {  
    username: "dheeraj",
    price: 454
}

function handelObjects(anyObject){ //obj as args
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handelObjects(user)
// handelObjects({username: "dhheaj", price: 454})

const myArray = [500, 200, 500, 800]

function returnSecoundValue(getArray){
    return getArray[1]
}

// console.log(returnSecoundValue(myArray));
console.log(returnSecoundValue([200, 400, 500]));

