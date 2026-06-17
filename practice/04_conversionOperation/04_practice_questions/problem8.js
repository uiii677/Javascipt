const shop = {
    apples: "25",
    bananas:"40",
    oranges:"35"

}

// Convert all prices to numbers.
// Buy:
// 4 apples
// 6 bananas
// 2 oranges
// Calculate total bill.
// Apply 10% discount.
// Print final bill.

let applesPriceInNumber = Number(shop.apples)
let bananasPriceInNumber = Number(shop.bananas)
let orangesPriceInNumber = Number(shop.oranges)

let totalBill = 4 * applesPriceInNumber + 6 * bananasPriceInNumber + 2 * (orangesPriceInNumber)

let discountPercent = 10

let discountAmount = totalBill * discountPercent / 100
let finalBill = totalBill - discountAmount;

console.log(`Final bill: ${finalBill}`);
