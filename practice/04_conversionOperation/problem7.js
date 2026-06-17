// employee
//name
//salary = 50000
//bonus after salary = 15%


let  employee = {
    name: "Umair",
    salary: "50000",
    bonuspercent: 15
    
}

let salaryInNumber = Number(employee.salary)
let calculateBonus = salaryInNumber  * employee.bonuspercent / 100;


console.log(`Name: ${employee.name}`);
console.log(`Salary: ${employee.salary}`);

console.log(`Bonus Amount : ${calculateBonus}`);
console.log(`Type: ${typeof salaryInNumber}`);

// 80 banana each banana price 20 
// total bill 1600 
// discount 5 on each banana 
// total bill after discount

let bananaPrice = 20
let totalBananas = 80
let discount = 5

let originalBill = bananaPrice * totalBananas
let discountPerBanana = (bananaPrice * discount) / 100
let newPricerPerBanana = bananaPrice - discountPerBanana
let totalbill = totalBananas * newPricerPerBanana


console.log(`Original bill : ${originalBill}`);
console.log(`Total bill after discount: ${totalbill}`);
console.log(`Discount per banana:${discountPerBanana}`);
console.log(`Total discount ${originalBill - totalbill}`);

