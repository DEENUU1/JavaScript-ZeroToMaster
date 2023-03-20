const company = {
    name: "example",
    address: {
        city: "Warsaw",
        street: "Włochy"
    },
    employees: [],

    addEmployee: function(email, job, salary) {
        if (typeof email !== "string" 
            || email.indexOf("@") === -1
            || typeof job !== "string"
            || typeof salary !== "number"
            || salary < 4000) {
                console.log("błędne dane");
                return false;
            }
        
        const employee = {
            emial: email,
            job: job,
            salary: salary,
            getInfo: function() {
                return this.email + " - " + this.job + ", pensja: " + this.salary;
            }
        };

        this.employees.push(employee)
        return true;

    },

    showEmployees: function () {
        console.log("Pracownicy" + this.name);
        for (let i = 0; i < this.employees.length; i++) {
            const e = this.employees[i];
            console.log(e.getInfo());
        }
    },

    changeSalaries: function (percentageChange) {
        for (let i = 0; i < this.employees.length; i++) {
            const e = this.employees[i];
            e.salary += e.salary * (0.01 * percentageChange);
        }
    }
 };

 company.addEmployee("test@test.com", "admin", 10000);
 company.showEmployees();
 company.changeSalaries(20);
 company.showEmployees();
