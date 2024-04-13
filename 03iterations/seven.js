//filter map and reduce

const myNum = [1, 2, 3, 4, 5, 6, 7]


// const newNums = myNum.map((num) => num + 10)

// console.log(newNums);

/*
chaining
*/
                       //passed result     //got res from first map   //passes only if true
const newNums = myNum.map((num)=>num * 10).map((num) => num+1).filter((num) => num >= 40)
// console.log('newNums', newNums)

//***************************reduce***********************

const MyNums = [1, 2, 3]

// const myTotal = MyNums.reduce(function (acc, currval){
//     console.log(`accumalater: ${acc} and current value: ${currval}`);
//     return acc +currval
// }, 0)

const myTotal = MyNums.reduce((acc, crv) => acc + crv, 0)
console.log('myTotal', myTotal)

const shoppingCart = [
    {
        itemName: "carrots",
        price: 30
    },
    {
        itemName: "cocolates",
        price: 100
    },
    {
        itemName: "Bread",
        price: 15
    },
    {
        itemName: "milk",
        price: 30
    },
]

const MyTotal = shoppingCart.reduce((acc,item) => (acc+item.price), 0)
console.log('MyTotal', MyTotal)