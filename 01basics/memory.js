/////**************Memorys******************** */

//Stack => Primitive //copy of the origanal 


//eg

let myDom = "dheerajdotcom"
let anoutherDom = myDom //copy of myDom

anoutherDom = "hello.com"
// ________________
// |_______________|              
// ________________
// |_____user1_____| //stacks -------------------------
// |_____user2_____|----------------------------------|      //same ref                           
// |___myDom_______|                                  |
// heap => Non-Primitive //ref of orignal             |
//                                                    |
// _____________________________                      |
// |                           |                      |
// |                           |                      |
// | {email, upi}              | //heap --------------      
// |                           |   
// |                           |
// |___________________________|

let user1 = {
    email: "user@mail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "dhhearj@gmail.com"
console.log(user1.email) //changed becos of ref