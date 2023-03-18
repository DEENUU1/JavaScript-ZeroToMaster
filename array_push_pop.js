function generateNumArray(size) { 
    let arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(i);
    }

    return arr;
  }

  console.log(generateNumArray(5))