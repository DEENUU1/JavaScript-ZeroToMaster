function cToF(stopnie) {
    return stopnie * (9/5) + 32;
  }
  
  function fToc(stopnie) {
    return (stopnie - 32) * (5/9);
  }
  
  let cToFResult = cToF(20);
  console.log(cToFResult);
  
  let fTocResult = fToc(86);
  console.log(fTocResult);