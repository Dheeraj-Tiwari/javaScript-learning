const languages = ["hindi", "telugu", "english", "urdu"]

// languages.forEach( function (item){
//     console.log(item);
// } )

// languages.forEach( (val)=>{ //arrow function
//     console.log(val)
// })

function printMe(item){
    console.log(item)
}

// languages.forEach(printMe) //only referance

// languages.forEach((item, index, arr)=>{
//     // console.log(`${item} of ${index} in ${arr}`);
//     console.log(item, index, arr);
// })

const coding = [
    { //objs are keys => obj.value
        languageNmae: "javaScript",
        languageFileName: "js"
    },
    {
        languageNmae: "java",
        languageFileName: "java"
    },
    {
        languageNmae: "html",
        languageFileName: "html"
    },
]

coding.forEach((key)=>{
    console.log(key.languageNmae)

})