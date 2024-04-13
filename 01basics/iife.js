//Immediately Invoked Function Expressions (IIFE) //()()

// const breaking = (() => (console.log("bad")))() //Iife
// console.log('breaking', breaking())

(function connectDB(){
    //named iife
    console.log(`DB CONNECTED`);
})(); //to stop globle scope pollution //must use simecolen to end
// connectDB()

(() => { //(intermediate value)(...) is not a function
    //unnamed iife
    console.log(`Hello1`)
})();

(/* function code */(name) =>{ //(intermediate value)(...) is not a function
    //parameterazed iife
    console.log(`Hello2 ${name}`)
})("dheeraj");