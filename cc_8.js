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
