window.onload = function () {
    ui.init();
    // ui.salaryChange();
};

// przez pracownika
class MonthlyEmployeeIncome {
    grossAmount; // kwota brutto
    acumulatedYearlyIncomeSum; // zakumulowany dochód od początku roku
    retirementContribution;  // Składka emerytalna 9.76%
    pensionContribution;  // Składka rentowa 1.5%
    sicknessContribution; // Składka chorobowa 2.45%
    workerSocialContributionSum; // Suma składek na ubezpieczenie społeczne
    baseForHealthContribution; // Podstawa wymiaru składki na ubezpieczenie zdrowotne
    healthContribution; // Składka na ubezpieczenie zdrowotne 9%
    advanceTax; // Zaliczka na podatek
    healthAmountToExclude; // Składka zdrowotna 7.75%
    finalWorkerNetMoney; // Kwota netta
    income; // dochód który jest wynikiem pomniejszonym o podatki 

    calculate(grossAmount, monthNum, acumulatedYearlyIncomeSum) {
        if(!acumulatedYearlyIncomeSum) acumulatedYearlyIncomeSum = 0;

        this.grossAmount = grossAmount;
        this.monthNum = monthNum;
        this.acumulatedYearlyIncomeSum = acumulatedYearlyIncomeSum;

        this.retirementContribution = grossAmount * 0.0976;
        this.pensionContribution = grossAmount * 0.015;
        this.sicknessContribution = grossAmount * 0.0245;

        this.workerSocialContributionSum = this.retirementContribution + this.pensionContribution + this.sicknessContribution;

        this.baseForHealthContribution = grossAmount - this.workerSocialContributionSum;

        this.healthContribution = this.baseForHealthContribution * 0.09;
        
        this.income = Math.ceil(this.baseForHealthContribution - 250);

        if (acumulatedYearlyIncomeSum < 85528
            && this.income + acumulatedYearlyIncomeSum >= 85528) {
                // pierwszy miesiąc gdzie przekroczony jest próg 17% do 85k, 32%
                this.advanceTax = this.income * 0.17;

                const taxAbove85k = ((this.income + acumulatedYearlyIncomeSum) - 85528 ) * 0.32;
                
                this.advanceTax += taxAbove85k;
        } else if (this.income + acumulatedYearlyIncomeSum >= 85528) {
            this.advanceTax = this.income * 0.32;

        } else {
            this.advanceTax = (this.income * 0.17) - 43.76;
            
        }

        this.healthAmountToExclude = this.baseForHealthContribution * 0.0775;
        this.advanceTax = Math.floor(this.advanceTax - this.healthAmountToExclude);
        
        this.finalWorkerNetMoney = grossAmount 
            - this.workerSocialContributionSum 
            - this.healthContribution 
            - this.advanceTax;

        
    }
}

const monthlyIncome = new MonthlyEmployeeIncome();

// przez pracowadcę 
class MonthlyEmployeerCost {
    employerRetirementContribution; // składka na ub. emeryt. 9.76%
    employerPensionContribution; // Składka na ub. rentowe 6.5%
    employerAccidentInsurance; // Składka na ub. wypadkowe 1.67%
    employerWorkFundContribution; // Składka na fundusz pracy 2.45%
    employerGuaranteedWorkFundContribution; // 0.1%
    employerContributionSum; // Suma składek pracodawcy

    calculate(grossAmount, monthNum, acumulatedYearlyIncomeSum) {
        this.grossAmount = grossAmount;
        this.monthNum = monthNum;
        this.acumulatedYearlyIncomeSum = acumulatedYearlyIncomeSum;

        this.employerRetirementContribution = grossAmount * 0.0976;
        this.employerPensionContribution = grossAmount * 0.065;
        this.employerAccidentInsurance = grossAmount * 0.0167;
        this.employerWorkFundContribution = grossAmount * 0.0245;
        this.employerGuaranteedWorkFundContribution = grossAmount * 0.001;
        this.employerContributionSum = this.employerRetirementContribution
                    + this.employerPensionContribution
                    + this.employerAccidentInsurance
                    + this.employerWorkFundContribution
                    + this.employerGuaranteedWorkFundContribution;


    }
}

const monthlyEmployerCost = new MonthlyEmployeerCost();

// ui
class Ui {
    salaryInput;
    salaryGross; // kwota brutto

    init() {
        this.salaryInput = document.getElementById("salary");
        this.salaryInput.addEventListener('input', this.salaryChange);
    }

    salaryChange = (e) => {
        if(e) this.salaryGross = e.target.value;

        // this.salaryGross = 2600;
        if ( !this.salaryGross || isNaN(this.salaryGross)) this.salaryGross = 0;

        monthlyIncome.calculate(this.salaryGross, 1, 0);
        monthlyEmployerCost.calculate(this.salaryGross, 1, 0);
    
        this.updateDom();
    }

    updateDom = () => {
        this.setValueById("retirementContribution", monthlyIncome.retirementContribution.toFixed(2));
        this.setValueById("pensionContribution", monthlyIncome.pensionContribution.toFixed(2));
        this.setValueById("sicknessContribution", monthlyIncome.sicknessContribution.toFixed(2))
        this.setValueById("workerSocialContributionSum", monthlyIncome.workerSocialContributionSum.toFixed(2))
        this.setValueById("baseForHealthContribution", monthlyIncome.baseForHealthContribution.toFixed(2))
        this.setValueById("healthContribution", monthlyIncome.healthContribution.toFixed(2))
        this.setValueById("advanceTax", monthlyIncome.advanceTax.toFixed(2))        
        this.setValueById("healthAmountToExclude", monthlyIncome.healthAmountToExclude.toFixed(2))
        this.setValueById("finalWorkerNetMoney", monthlyIncome.finalWorkerNetMoney.toFixed(2))        


        this.setValueById("employerRetirementContribution", monthlyEmployerCost.employerRetirementContribution.toFixed(2))
        this.setValueById("employerPensionContribution", monthlyEmployerCost.employerPensionContribution.toFixed(2))
        this.setValueById("employerAccidentInsurance", monthlyEmployerCost.employerAccidentInsurance.toFixed(2))
        this.setValueById("employerWorkFundContribution", monthlyEmployerCost.employerWorkFundContribution.toFixed(2))
        this.setValueById("employerGuaranteedWorkFundContribution", monthlyEmployerCost.employerGuaranteedWorkFundContribution.toFixed(2))
        this.setValueById("employerContributionSum", monthlyEmployerCost.employerContributionSum.toFixed(2))


    }

    setValueById(id, v) {
        document.getElementById(id).innerHTML = v;
    }
}

const ui = new Ui();