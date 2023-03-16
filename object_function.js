function generateUser(name, email, city, job) {
    return {
      firstName: name,
      emailAddress: email,
      cityLive: city,
      work: job
    };
  };
  
  let userInfo = generateUser("Kacper", "kacper@t.com", "Warsaw", "Programmer");
  console.log(userInfo);
