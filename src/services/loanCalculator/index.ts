interface ILoanDetails {
    loanAmount: number;
    annualInterestRate: number;
    loanMonths: number;
}

class LoanDetails implements ILoanDetails {
    loanAmount: number;
    annualInterestRate: number;
    loanMonths: number;    

    constructor(loanDetailsConfig: ILoanDetails) {        
        this.loanAmount = loanDetailsConfig.loanAmount;
        this.annualInterestRate = loanDetailsConfig.annualInterestRate;
        this.loanMonths = loanDetailsConfig.loanMonths; 
    }

    static monthsInYear: number = 12;

    get monthlyInterestRate(): number {
        return this.annualInterestRate / LoanDetails.monthsInYear / 100;
    }
    get monthlyInterestFactor(): number {
        return this.monthlyInterestRate + (this.monthlyInterestRate / (Math.pow(this.monthlyInterestRate + 1, this.loanMonths) - 1));
    }
    get monthlyPayment(): number {
        return this.loanAmount * this.monthlyInterestFactor;
    }
    get currentMonthFactor(): number {
        return this.monthlyInterestRate + (this.monthlyInterestRate / (Math.pow(this.monthlyInterestRate + 1, 1) - 1));
    }
    get monthlyInterest(): number {
        return this.loanAmount * this.monthlyInterestRate * this.currentMonthFactor;
    }
    get monthlyPrincipal(): number {
        return this.monthlyPayment - this.monthlyInterest;
    }

    flush(): void {
        console.log(this.monthlyInterestRate, this.monthlyInterestFactor, this.monthlyPayment, this.currentMonthFactor, this.monthlyInterest, this.monthlyPrincipal);
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
        loanDetails.loanAmount -= loanDetails.monthlyPrincipal;
        loanDetails.loanMonths--;

        return loanDetails;
    };

    generate = (loanDetails: LoanDetails): LoanDetails[] => {
        let scopeLoanDetails: LoanDetails = loanDetails;
        let loanDetailsCollection: LoanDetails[] = [];
        while (scopeLoanDetails.loanMonths > 0 && scopeLoanDetails.loanAmount > 0) {
            scopeLoanDetails = loanCalculatorService.calculate(scopeLoanDetails);

            loanDetailsCollection.push(scopeLoanDetails);
        }

        return loanDetailsCollection;
    };

    refund = (loanDetails: LoanDetails, amount: number): LoanDetails => {
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

let loanDetails = new LoanDetails({ loanAmount: (205602.66 + 2192.36), annualInterestRate: 6.18, loanMonths: 133 });
console.log(loanCalculatorService.generate(loanDetails).forEach((item)=>item.flush()));


export default loanCalculatorService;