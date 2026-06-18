const name = "Umair"
const repoCount = 6

// console.log(name + repoCount + "String");

const gameName = new String('Umair-ui')

console.log(typeof String);
console.log(typeof gameName);


console.log(gameName[0]);
// console.log(gameName .__proto__.gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('U'));

const newString = gameName.substring(0, 8)
console.log(newString);

const anotherString = gameName.slice(-5, 5)
console.log(anotherString);

const newOneString = "    Umair  "
console.log(newOneString);
console.log(newOneString.trim());

const url = "https://umair.com/umair%20khan"
console.log(url.replace("%20", "-"));
console.log(url.includes('umair'));

console.log(gameName.split('-'));

