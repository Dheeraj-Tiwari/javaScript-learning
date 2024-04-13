// const languages = ["hindi", "telugu", "english", "urdu"]


// const values = languages.forEach((item) => { //foreach do not return anything
//     return item
// })

// console.log(values);

const nums = [1, 2, 3, 4, 5, 9]

// nums.filter((i)=>{
//     console.log(i)
// })
                                //condition
const allNums = nums.filter((i)=> i > 4 ) //returns value
// console.log('allNums', allNums)

// const NewNums = []

// nums.forEach((num)=>{
//     if(num > 4){
//         NewNums.push(num)
//     }
// })
// console.log('NewNums', NewNums)

const books = [ //database op
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBook = books.filter((bk)=> bk.genre == "History")

//   console.log(userBook)

const pbook = books.filter((bk)=> bk.publish > 1995 && bk.genre === "History")
console.log(pbook)
