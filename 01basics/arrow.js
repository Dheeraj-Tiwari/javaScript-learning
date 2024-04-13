const user = {
    username: "dheeraj",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this) //current context
    }
}

// user.welcomeMsg()

// user.username = "sam" //context chanegd

// user.welcomeMsg()

// console.log(this) //empty obj

//but broswer this globle obj is window obj for dom

// function good(){

    // let user = "dheeraj"
    // console.log(this.user) only works on obj not in functions
// }

// good()

// const good = function(){

//     let user = "dheeraj"
//     console.log(this.user) //only works on obj not in functions
// }
// good()

const good = () =>{ //arrow function

    let user = "dheeraj"
    console.log(this) //only works on obj not in functions
}
// good()

// const addnums = (num1, num2) => {
//     return num1+num2 //explecit return
// }

// console.log(addnums(5, 6))

// const addnums = (num1, num2) => num1+num2 //implect return
// const addnums = (num1, num2) => (num1+num2) //implect return //dont need to return

const addnums = (num1, num2) => ({username: "dheeraj"}) //to return obj

// console.log(addnums(5, 6))

// const myArr = [2,3,4,5]

// myArr.forEach(() => {})
