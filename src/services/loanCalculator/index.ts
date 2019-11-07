interface ILoanDetails {
    loanAmount: number;
    annualInterestRate: number;
    loanMonths: number;
}

class LoanDetails implements ILoanDetails {
    loanAmount: number;
    annualInterestRate: number;
    loanMonths: number;    
    currentMonth: number;
    currentLoanAmount: number;

    constructor(loanDetailsConfig: ILoanDetails) {        
        this.loanAmount = loanDetailsConfig.loanAmount;
        this.annualInterestRate = loanDetailsConfig.annualInterestRate;
        this.loanMonths = loanDetailsConfig.loanMonths;

        this.currentMonth = this.loanMonths;
        this.currentLoanAmount = this.loanAmount;      
    }

    static monthsInYear: number = 12;

    get loanTermYears(): number { return this.currentMonth / LoanDetails.monthsInYear; }
    get monthlyInterestRate(): number {
        return this.annualInterestRate / LoanDetails.monthsInYear / 100;
    }
    get monthlyInterestFactor(): number {
        return this.monthlyInterestRate + (this.monthlyInterestRate / (Math.pow(this.monthlyInterestRate + 1, this.loanMonths) - 1));
    }
    get montlyPayment(): number {
        return this.loanAmount * this.monthlyInterestFactor;
    }
    get currentMonthFactor(): number {
        return this.monthlyInterestRate + (this.monthlyInterestRate / (Math.pow(this.monthlyInterestRate + 1, 1) - 1));
    }
    get monthlyInterest(): number {
        return this.currentLoanAmount * this.monthlyInterestRate * this.currentMonthFactor;
    }
    get monthlyPrincipal(): number {
        return this.montlyPayment - this.monthlyInterest;
    }

    flush(): void {
        console.log(this.loanTermYears, this.monthlyInterestRate, this.monthlyInterestFactor, this.montlyPayment, this.currentMonthFactor, this.monthlyInterest, this.monthlyPrincipal);
    }
}

interface ILoanCalculatorService {
    calculate(loanDetails: LoanDetails): LoanDetails;
    refund(loanDetails: LoanDetails, amount: number): LoanDetails;
    displayLoanInformation(loanDetails: LoanDetails): void;
};

class LoanCalculatorService implements ILoanCalculatorService{
    constructor() {
        
    }

    calculate = (loanDetails: LoanDetails): LoanDetails => {
        loanDetails.currentMonth = loanDetails.loanMonths;

        return loanDetails;
    };

    refund = (loanDetails: LoanDetails, amount: number): LoanDetails => {
        //loanDetails.loanAmount -= amount;
        //loanDetails.currentLoanAmount -= amount;

        return loanDetails;
    };

    round = (value: number): number => {
        return Math.round(value * 100) / 100;
    };

    displayLoanInformation = (loanDetails: LoanDetails): void => {
        loanDetails.flush();
    };
};

const loanCalculatorService = new LoanCalculatorService();
/*
let loanDetails = new LoanDetails({ loanAmount: (205602.66 + 2192.36), annualInterestRate: 6.18, loanMonths: 133});

while (loanDetails.currentMonth > 0 && loanDetails.currentLoanAmount > 0) {
    loanDetails = loanCalculatorService.calculate(loanDetails);
    loanCalculatorService.displayLoanInformation(loanDetails);
    loanDetails = loanCalculatorService.refund(loanDetails, 4000);

    loanDetails.currentMonth--;
}
*/

export default loanCalculatorService;