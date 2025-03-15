// Show the selected calculator
function showCalculator(type) {
    document.getElementById("sip-calculator").style.display = (type === "sip") ? "block" : "none";
    document.getElementById("swp-calculator").style.display = (type === "swp") ? "block" : "none";
}

// SIP Calculation
function calculateSIP() {
    let P = parseFloat(document.getElementById("sipAmount").value);
    let r = parseFloat(document.getElementById("sipRate").value) / 100 / 12;
    let n = parseFloat(document.getElementById("sipYears").value) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r <= 0 || n <= 0) {
        document.getElementById("sipResult").innerText = "Please enter valid values.";
        return;
    }

    let maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    document.getElementById("sipResult").innerText = "Final Value: ₹" + maturity.toFixed(2);
}

// SWP Calculation
function calculateSWP() {
    let investment = parseFloat(document.getElementById("swpTotal").value);
    let withdrawal = parseFloat(document.getElementById("swpWithdraw").value);
    let rate = parseFloat(document.getElementById("swpRate").value) / 100 / 12;
    let months = parseFloat(document.getElementById("swpYears").value) * 12;

    if (isNaN(investment) || isNaN(withdrawal) || isNaN(rate) || isNaN(months) || investment <= 0 || withdrawal <= 0 || rate < 0 || months <= 0) {
        document.getElementById("swpResult").innerText = "Please enter valid values.";
        return;
    }

    let balance = investment;
    for (let i = 0; i < months; i++) {
        balance = balance * (1 + rate) - withdrawal;
        if (balance <= 0) {
            balance = 0;
            break;
        }
    }

    document.getElementById("swpResult").innerText = "Final Value: ₹" + balance.toFixed(2);
}
