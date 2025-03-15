// SIP Calculation Function
function calculateSIP() {
    let P = parseFloat(document.getElementById("sipAmount").value);
    let r = parseFloat(document.getElementById("sipRate").value) / 100 / 12;
    let n = parseFloat(document.getElementById("sipYears").value) * 12;

    let futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    document.getElementById("sipResult").innerHTML = "Future Value: ₹" + futureValue.toFixed(2);
}

// SWP Calculation Function
function calculateSWP() {
    let P = parseFloat(document.getElementById("swpInvestment").value); // Initial Investment
    let W = parseFloat(document.getElementById("swpAmount").value);  // Monthly Withdrawal
    let r = parseFloat(document.getElementById("swpRate").value) / 100 / 12; // Monthly Interest Rate
    let n = parseFloat(document.getElementById("swpYears").value) * 12; // Total Months

    // SWP Final Value Calculation
    let FV = (P * Math.pow(1 + r, n)) - (W * ((Math.pow(1 + r, n) - 1) / r));

    document.getElementById("swpResult").innerHTML = "Final Value: ₹" + FV.toFixed(2);
}
