function getEmailParts(email) {
    let getMonkeyIndex = email.indexOf("@");
    const user = email.slice(0, getMonkeyIndex);
    let getDotIndex = email.indexOf(".", getMonkeyIndex);
    const domainName = email.slice(getMonkeyIndex, getDotIndex);
    let lastDotIndex = email.lastIndexOf(".");
    const domainExt = email.slice(lastDotIndex);

    return emailInfo = {
      user: user,
      domainName: domainName,
      domainExt: domainExt
    };

  }   
  
  console.log(getEmailParts("ola@domena.com"));