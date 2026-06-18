const accountId=1
let accountEmail="yasmeen@gmmail.com"
var accountPassword="12345"
accountCity="Hyderabad"
let accountState;

// accountId=2   //not allowed
console.log(accountId);

accountEmail="yasmeen123@gmail.com"
accountPassword="777"
accountCity="Bangalore"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
