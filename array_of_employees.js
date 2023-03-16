const company = {
    name: "Example Ltd",
    street: "Wilcza",
    city: "Warsaw",
    employees: [] 
  };

  function addEmployee(name, email, job) {
    const user = {
      name: name,
      email: email,
      job: job
    };

    company.employees.push(user);
    
  }

  addEmployee("Adam", "adam@e.pl", "programmer");
  addEmployee("Jacek", "jacek@e.pl", "programmer");
  addEmployee("Oskar", "oskar@e.pl", "programmer");
  
  console.log(company);