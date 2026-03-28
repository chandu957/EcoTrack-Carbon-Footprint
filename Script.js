function calculate() {
    let travel = document.getElementById("travel").value;
    let electricity = document.getElementById("electricity").value;

    // Simple carbon formulas
    let travelEmission = travel * 0.21; // kg CO2 per km
    let electricityEmission = electricity * 0.5; // kg CO2 per kWh

    let total = travelEmission + electricityEmission;

    document.getElementById("result").innerText =
        "Your daily carbon footprint: " + total.toFixed(2) + " kg CO2";

    if (total > 10) {
        document.getElementById("result").innerText += " ⚠️ High! Try reducing usage.";
    } else {
        document.getElementById("result").innerText += " ✅ Good!";
    }
}
