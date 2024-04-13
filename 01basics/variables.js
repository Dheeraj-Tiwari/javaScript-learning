

const accountId = 1234
let accountEmail = "dheeraj@gamail.com"
var accountPassword = "12345"
accontCity = "hyd" //var

let accontState;

// accountId = 2 not allowed const
{} //scope

// console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope
*/

accountEmail = "d@email.com"
accountPassword = "464646464" 
accontCity = "Bengaluru"

console.table([accountId, accountEmail, accontCity, accountPassword, accontState]);

