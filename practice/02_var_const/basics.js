/*
 let = Varaible value can change or whose value can change it later
 var = older way its work but scope related issues arise modern js use let & const
 prefer not use var becsuse of issue in block scope & functional scope 
 Implicit global varaible = creates a varaible automatically
Constant value cannot change later
*/

console.log("Umair")
const accountId = 1212
let accountEmail = "Umair@gmail.com"
accountCity = "Maldives"
var accountPassword = "12312"

console.log(accountCity);

// accountId = 12412

accountEmail = "Umair12@gmail.com"
accountCity = "Tokyo"

console.table([accountId,accountEmail,accountCity,accountPassword ])
