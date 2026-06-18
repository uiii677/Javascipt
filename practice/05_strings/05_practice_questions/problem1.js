// First letter uppercase
// Remaining letters lowercase

let firstName = "umair"
let lastName = "iqbal"

let formattedFirst = 
               firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

let formattedLast =
               lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

console.log(`${formattedFirst} ${formattedLast}`);               

