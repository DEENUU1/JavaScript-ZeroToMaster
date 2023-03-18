function combineNames(arr, char) {
    return arr.reverse().join(char);
  }  

  let arrNames = ["Kacper", "Maciek", "Jan"];
  console.log(combineNames(arrNames, "|"));