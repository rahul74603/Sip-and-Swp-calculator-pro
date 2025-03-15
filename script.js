// script.js
function calculate() {
    // Input values
    const P = parseFloat(document.getElementById('investment').value); // Monthly Investment
    const r = parseFloat(document.getElementById('rate').value) / 100; // Annual Interest Rate
    const t = parseFloat(document.getElementById('years').value); // Investment Period in Years
    const n = 12; // Compounding Frequency (Monthly)

    // SIP Calculation
    const sipFV = P * (((Math.pow(1 + r / n, n * t) - 1) / (r / n)) * (1 + r / n);

    // SWP Calculation (Assuming same formula for simplicity)
    const swpFV = P * (((Math.pow(1 + r / n, n * t) - 1) / (r / n));

    // Display Results
    document.getElementById('sipResult').textContent = `SIP Maturity Amount: ₹${sipFV.toFixed(2)}`;
    document.getElementById('swpResult').textContent = `SWP Maturity Amount: ₹${swpFV.toFixed(2)}`;
}
