function multiplyArr(arr) {
    let number = 1;
    for (let i=0; i < arr.length; i++) {
        number *= arr[i];
    }
    return number;
  }  

  console.log(multiplyArr([1,2,3,4,5]));