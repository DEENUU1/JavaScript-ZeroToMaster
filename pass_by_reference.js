let employee = {
    name: "Kacper",
    email: "kacper@kacper.pl",
    rank: "programmer",
    salary: 8000
  };

  function promoteToManager(user) {
    if (user.rank == "manager") {
      console.log("Pracownik jest już managerem.");
      return;
    }
    user.rank = "manager";
    let salary = user.salary;
    user.salary = salary + (salary * 0.5);

  };

  promoteToManager(employee);
  console.log(employee)
