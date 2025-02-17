//Task 1: Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}; // Created a function that calculates the employees salary and prints it to the console.

console.log(calculateSalary(5000, 500, 0.1));  // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"
// Prints the net salary to the console.

// Task 2: Product Price After Discount
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
}; // Created a function that applies a discount and calculates the new price.

console.log(calculateDiscount(100, 0.2));  // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"
// Prints the final price after the discount is applied to the console.

// Task 3: Service Fee Calculation
let calculateServiceFee = (amount, serviceType) => {
    let rateFee = serviceType === "Premium" ? 0.15: serviceType === "Standard" ? 0.10 : serviceType === "Basic" ? 0.05 : 0;
    let servicefee = amount * rateFee;
        return `Service Fee: $${servicefee.toFixed(2)}`;
}; // Created a function that calculates the service fee based on the service type.

console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"
// Prints the service fee for both standard and premium in the console.

// Task 4: Car Rental Cost Calculation
function calculateRentalCost(days, carType, insurance = false ) {
    let rate = carType === "Economy" ? 40 : carType === "Standard" ? 60: carType === "Luxury" ? 100: 0;
    let rentalcost = rate * days;
    if(insurance) rentalcost += days * 20;
    return `Total Rental Cost: $${rentalcost}`;
}; // Created a function that calculates the total rental cost based on package.

console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"
// Prints the total rental cost for the economy and luxury packages to the console.

// Task 5: Loan Payment Calculations
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}; // Created a function that calculates the total loan payments.

console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"
// Prints the total loan payments to the console.

// Task 6: Identifying Large Transactions
let transactions = [200, 1500, 3200, 800, 2500];
const filterLargeTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
}; // Created a function that filters all transactions above $1000

console.log(filterLargeTransactions(transactions, amount => amount > 1000));
// Prints the filtered transactions to the console.

// Task 7: Shopping Cart Tracker
function createCartTracker() {
    let total = 0;
    return function (amount){
        total += amount;

        return `Total Cart Value: $${total}`
    };
}; // Created a function that calculates the total value in the shopping cart.
let cart = createCartTracker();

console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"
// Prints the total value of the cart to the console.

// Task 8: Savings Growth Projection
function calculateSavings(years, amount) {
    if (years >= 10) 
        return `Projected Savings: $${amount.toFixed(2)}`;

    return calculateSavings(years + 1, amount * 1.05);
}; // Created a function that shows the projected growth of the savings at a 5% increase each year until year 10.

console.log(calculateSavings(8, 1000)); // Expected output: "Projected Savings: $1102.50"
console.log(calculateSavings(5, 5000)); // Expected output: "Projected Savings: $5525.63"
// Prints the projected savings to the console.