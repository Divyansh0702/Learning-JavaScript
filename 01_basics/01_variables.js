const accountId = 1662334
let accountName = "Divyansh"
let accountMail = "divyansh@gmail.com"
let accountPass = "49634"
var accountMob = "+92135442344" // do not use var because of the "issue" in block and functional scope
let accountCity;
accountState = "Las Vegas"


console.log(accountId);
// accountId = 12465 // we cannot change it as it is in const keyword

console.table([accountId, accountName, accountMail, accountPass, accountMob, accountCity, accountState])