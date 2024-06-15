function calculateCalories() {
    // Get input values
    const sets = parseFloat(document.getElementById('sets').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Basic formula for calculating calories burned
    // These formulas are simple approximations and may not be accurate
    const setsCalories = sets * 5; // 5 calories per set (approximation)
    const distanceCalories = distance * weight * 0.5; // 0.5 calories per kg per km (approximation)

    // Total calories burned
    const totalCalories = setsCalories + distanceCalories;

    document.getElementById('calories-output').textContent = `Calories burned: ${totalCalories.toFixed(2)}`;

    document.getElementById('sets').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('weight').value = '';
}
