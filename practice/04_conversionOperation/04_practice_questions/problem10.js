let person1 ={
    name: "Umair"
};

let person2 = person1
person2.name = "Ali"

console.log(person2.name)
console.log(person1.name)

//********************************* 
// array reference

let arr1 = [ 1, 2, 3]
let arr2 = arr1

arr2[0] = 99

console.log(arr1);
console.log(arr2);

//********************************** 
let product = {
    product1: "laptop",
    price: 50000
};

let cartItem = product

cartItem.price = 30000

console.log(product.price);
console.log(cartItem);
 
//*********************************

let x = 10
let y = x

x = 50

console.log(x);
console.log(y);

