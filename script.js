function calculateBMI() {
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let feet = document.getElementById("feet").value;
    let inches = document.getElementById("inches").value;
    let weight = document.getElementById("weight").value;

    let result = document.getElementById("result");
    let tips = document.getElementById("tips");

    if (!age || !gender || !feet || !weight) {
        result.innerHTML = "⚠️ Please fill all required fields!";
        return;
    }

    // Convert feet + inches to meters
    let totalInches = (feet * 12) + (inches ? parseInt(inches) : 0);
    let heightMeters = totalInches * 0.0254;

    let bmi = (weight / (heightMeters * heightMeters)).toFixed(2);

    let category = "";
    let color = "";
    let advice = "";

    if (bmi < 18.5) {
        category = "Underweight";
        color = "blue";
        advice = "Eat more nutritious food 🍎";
    } else if (bmi < 24.9) {
        category = "Normal";
        color = "green";
        advice = "Maintain your healthy lifestyle 💪";
    } else if (bmi < 29.9) {
        category = "Overweight";
        color = "orange";
        advice = "Exercise regularly 🏃";
    } else {
        category = "Obese";
        color = "red";
        advice = "Consult a doctor ⚠️";
    }

    result.innerHTML = `BMI: ${bmi} (${category})`;
    result.style.color = color;
    tips.innerHTML = advice;
}

function clearAll() {
    document.querySelectorAll("input").forEach(i => i.value = "");
    document.getElementById("gender").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("tips").innerHTML = "";
}