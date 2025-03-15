
// Elements Selection
const sipBtn = document.getElementById("sipBtn");
const swpBtn = document.getElementById("swpBtn");
const sipForm = document.getElementById("sipForm");
const swpForm = document.getElementById("swpForm");

// Show SIP Form
sipBtn.addEventListener("click", function () {
    sipForm.style.display = "block";
    swpForm.style.display = "none";
});

// Show SWP Form
swpBtn.addEventListener("click", function () {
    sipForm.style.display = "none";
    swpForm.style.display = "block";
});

// SIP Calculation
function calculateSIP() {
    let monthlyInvestment = parseFloat(document.getElementById("sipInvestment").value);
    let rate = parseFloat(document.getElementById("sipRate").value) / 100 / 12;
    let months = parseInt(document.getElementById("sipMonths").value);

    if (isNaN(monthlyInvestment) || isNaN(rate) || isNaN(months)) {
        alert("कृपया सभी मान्य इनपुट डालें!");
        return;
    }

    let sipValue = (monthlyInvestment * ((Math.pow(1 + rate, months) - 1) / rate)) * (1 + rate);
    document.getElementById("sipResult").innerText = `Final Amount: ₹${sipValue.toFixed(2)}`;
}

// SWP Calculation
function calculateSWP() {
    let totalInvestment = parseFloat(document.getElementById("swpInvestment").value);
    let withdrawal = parseFloat(document.getElementById("swpWithdrawal").value);
    let rate = parseFloat(document.getElementById("swpRate").value) / 100 / 12;
    let months = parseInt(document.getElementById("swpMonths").value);

    if (isNaN(totalInvestment) || isNaN(withdrawal) || isNaN(rate) || isNaN(months)) {
        alert("कृपया सभी मान्य इनपुट डालें!");
        return;
    }

    let finalValue = totalInvestment;
    for (let i = 0; i < months; i++) {
        finalValue = (finalValue - withdrawal) * (1 + rate);
        if (finalValue <= 0) {
            finalValue = 0;
            break;
        }
    }

    document.getElementById("swpResult").innerText = `Final Value: ₹${finalValue.toFixed(2)}`;
}
