function findLargest(num1, num2) {
    if (num1 > num2) {
      return num1 + " jest większa";
    } else if (num1 < num2) {
      return num2 + " jest większa";
    } else if (num1 == num2) {
      return "Liczby są takie same";
    }
  }
  
  let findLargestResult = findLargest(3, 3);
  console.log(findLargestResult);