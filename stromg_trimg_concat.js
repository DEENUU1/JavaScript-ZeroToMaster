function getUserInformation(name, surname, job) {
    name = name.toUpperCase().trim();
    surname = surname.toUpperCase().trim();
    let fullname = `${name} ${surname} `;
    return fullname.concat(job);
  };

  console.log(getUserInformation("Kacper", "Włodarczyk", "programista"));
