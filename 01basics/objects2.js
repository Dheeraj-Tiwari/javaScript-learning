// const bro = new Object(); //singleton
const bro1 = {} //non

bro1.id = "1245fsd"
bro1.name = "sam"
bro1.isLoggedIn = false

// console.log('bro1', bro1)

const user = {
    email: "name@email.com",
    fullname: {
        userfullname: {
            fName: 'Dheeraj',
            mName: 'Sai',
            lName: 'Tiwari'
        }
    }
}

// console.log(user.fullname.userfullname.fName);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = {obj1, obj2} //nested objs
// console.log('obj3', obj3) //nested objs

// const newobj = Object.assign(obj1, obj2) //combineds and copys in one obj
// const newobj = Object.assign({}, obj1, obj2) //gerantes the return will be in obj ✅
                            //target sorce
// console.log('newobj', newobj)

const obj3 = {...obj1, ...obj2} //easy and lastet ✅

// console.log(obj3)

const users = [ //array of objs
    {
        id: 1,
        email: "d@mail.com"
    },
    {
        id: 2,
        email: "h@mail.com"
    },
    {
        id: 3,
        email: "e@mail.com"
    }
]

// console.log(users[1].email) //accessing array objs

// console.log(bro1)

// console.log(Object.keys(bro1)) //keys output is an array
// console.log(Object.values(bro1)) //values output is an array
// console.log(Object.entries(bro1)) //everything in array //nested arrays

// console.log(bro1.hasOwnProperty('isLoggedIn')) //true

//******Objects destructuring and JSON API ************** */

const shop = {
    shopName: "pro-gram",
    prices: "100",
    owener: "dheeraj"
}

const {owener: name} = shop;

// console.log(owener)
// console.log(name)

// { //json //JavaScript Object Notation
//     "name": "dheeraj",
//     "age": "23"
// }

// [
//     {},
//     {},
//     {}
// ]