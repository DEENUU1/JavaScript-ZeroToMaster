function validateEmail(email) {
    let monkeySymbol = email.indexOf("@");
    if (monkeySymbol < 0) return false;
    let dotSymbol = email.indexOf(".", monkeySymbol);
    if (dotSymbol == -1) return false;
    
    return true;
  }

  const email1 = "asiaex@ample.com";
  console.log(validateEmail(email1));
