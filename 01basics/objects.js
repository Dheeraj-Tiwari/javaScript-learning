// singleton

// Object.create

//obj literals
const mySym = Symbol("key1")

const jsUser = { //no singleton

    name: "druve",
    //key: value
    "full name": "dheeaj",
    [mySym] : "mykey1", //[Symbol(key1)]: 'mykey1'
    age: 23,
    location: "Hyd",
    email: "dheeraj@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["mon", "tue"]

} 
//access formats
// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

//changes

jsUser.email = "dheeraj@gmail.com"
// console.log('jsUser', jsUser)

//obj frezz

// Object.freeze(jsUser)
jsUser.email = "dheeraj@google.com" //this value not propagated due to frezze
// console.log('jsUser', jsUser)

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greeting = function(){
    console.log("hello js user")
}
jsUser.greeting2 = function(){
    console.log(`hello ${this.name}`) //this denots current obj
}


console.log(jsUser.greeting2())


