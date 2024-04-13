//for

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

for (let i = 0; i <= 10; i++) {
    
    // console.log(i)
    
}

for (let i = 1; i < 10; i++) {
    for (let j = i; j < 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`)
        
    }
    
}

const myArr = ["hi", "hello", "bye"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)
    
}

//break and continue

// for (let index = 0; index < 20; index++) {
//     if(index == 5){
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`Value of i is ${index}`)
    
// }

for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log("Detected 5")
        continue;
    }
    console.log(`Value of i is ${index}`)
    
}