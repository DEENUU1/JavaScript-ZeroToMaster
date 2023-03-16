function inscreaseSolary(money, bonus) {
    money = money + (money * 0.2);
    return bonus + money;
  };

  let salary = 5000;
  let newSalary = inscreaseSolary(salary, 1000);
  console.log(salary, newSalary);