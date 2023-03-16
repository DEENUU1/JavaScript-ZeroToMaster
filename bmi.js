function calculateBmi(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
  }
  
  let bmiResult = calculateBmi(70, 1.90);
  console.log("Twoje BMI wynosi " + bmiResult);
  
  if (18.5 < bmiResult < 24.9) {
    console.log("Twoje BMI jest prawidłowe")
  } else {
    console.log("Twoje BMI nie jest prawidłowe")
  }