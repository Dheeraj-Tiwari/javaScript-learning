const name = "dheeraj"
const repoCount = 50;

// console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //backticks //string interpalation

const gameName = new String('dheeraj')//string class

// console.log(gameName[1]); //stored as obj with key value paris
//  console.log(gameName.__proto__); //obj
// console.log(gameName.length); //length of string
// console.log(gameName.toLowerCase) //function
// console.log(gameName.toLowerCase()) //need to call
// console.log(gameName.toUpperCase()) //dous not change the orignal value

// console.log(gameName.charAt(2)) //e
// console.log(gameName.indexOf('r')); //2
// console.log(gameName.charCodeAt(1)); //UTF-16 code unit value at the given index.
// console.log(gameName.codePointAt(4));
// console.log(gameName.concat(" hi"));//add strings //returns new string
// console.log(gameName.concat("hi"[0]));//add strings
// console.log(gameName.endsWith('j')); //true
// console.log(gameName.includes('a')); //true
// console.log(gameName.lastIndexOf('j'));
// console.log(gameName.localeCompare('a'));
// console.log(gameName.padEnd(6, 'hihihihi'));
// console.log(gameName.repeat(2));//Returns a string consisting of the elements of the object repeated count times.
// console.log(gameName.replace('dh','j')); //replaces letters
// console.log(gameName.replaceAll('e','a')); //replaces trough out the string
// console.log(gameName.search('a')); //search index
// console.log(gameName.slice(2,4)); //slices and creats new string from start index to end
// console.log(gameName.split('a')); //splits the string obj
// console.log(gameName.startsWith('d'));
// console.log(gameName.substring(2,4)); //returns a new substrings 
// console.log(gameName.substr(1,3));
const newName = '    hi my name is dheeraj '
// console.log(newName);
// console.log(newName.trim(' ')); //removes whitespaces
// console.log(newName.trimStart()) 
// console.log(newName.valueOf());
const anoth = gameName.slice(-6, 4) //only method that takes neg value
// console.log(anoth);

const url = "https://dheeraj.com/dheeraj%20tiwari"
// console.log(url.replace('%20', '-'))

console.log('n ew Na me'.split(' '))




