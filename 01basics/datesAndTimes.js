//Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString()) //date time day month timezone
// console.log(myDate.getDate()); //date
// console.log(myDate.getDay()); //day //0 - 6
// console.log(myDate.getFullYear()) //year
// console.log(myDate.toDateString()) //day and full date
// console.log(myDate.toLocaleString()) //11/4/2024, 2:59:35 am

// console.log(typeof myDate) //object

// let myDatenow = new Date(2024, 0, 4)
// let myDatenow = new Date(2024, 0, 4, 5, 3)
let myDatenow = new Date("2024-01-25") //yyyy-mm-dd


// console.log(myDatenow.toDateString())
console.log(myDatenow.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myDatenow.getTime())

// console.log(Math.floor(Date.now()/1000))


// console.log(`Today's date is ${myDate.getDate()} and Time now is ${myDate.toTimeString()}`)

myDate.toLocaleString('default', {
    weekday: "long"
})


