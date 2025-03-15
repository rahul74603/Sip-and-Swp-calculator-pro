// script.js
function calculate() {
    // SIP Calculation
    const sipP = parseFloat(document.getElementById('sipInvestment').value);
    const sipR = parseFloat(document.getElementById('sipRate').value) / 100;
    const sipT = parseFloat(document.getElementById('sipYears').value);
    const sipN = 12;

    const sipFV = sipP * (((Math.pow(1 + sipR / sipN, sipN * sipT) - 1) / (sipR / sipN)) * (1 + sipR / sipN);

    // SWP Calculation
    const swpAmount = parseFloat(document.getElementById('swpAmount').value);
    const swpWithdrawal = parseFloat(document.getElementById('swpWithdrawal').value);
    const swpR = parseFloat(document.getElementById('swpRate').value) / 100;
    const swpT = parseFloat(document.getElementById('swpYears').value);
    const swpN = 12;

    let remainingAmount = swpAmount;
    for (let i = 0; i < swpT * swpN; i++) {
        remainingAmount = remainingAmount * (1 + swpR / swpN) - swpWithdrawal;
    }

    // Display Results
    document.getElementById('sipResult').textContent = `SIP Maturity Amount: ₹${sipFV.toFixed(2)}`;
    document.getElementById('swpResult').textContent = `SWP Remaining Amount: ₹${remainingAmount.toFixed(2)}`;
}
