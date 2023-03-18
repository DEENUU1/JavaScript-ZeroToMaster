const soldCars = 1200;
const carPrice = 90000;

let revenue = soldCars * carPrice;
console.log(revenue);

let factoryCosts = revenue * 0.65;
console.log(factoryCosts);

let marketingCost = revenue * 0.1;
console.log(marketingCost);

let income = revenue - factoryCosts - marketingCost;
console.log(income);

let incomeTax = income * 0.19;
console.log(incomeTax);

let incomeAfterTax = income - incomeTax;
console.log(incomeAfterTax);

let actionPrice = incomeAfterTax / 30000;
console.log(actionPrice);
