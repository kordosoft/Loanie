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

    refund = (amount: number): void => {
        this.loanAmount -= amount;
    };

    flush(): void {
        console.log(this.monthlyInterestRate, this.monthlyInterestFactor, this.monthlyPayment, this.currentMonthFactor, this.monthlyInterest, this.monthlyPrincipal);
    };
}

interface ILoanCalculatorService {
    calculate(loanDetails: LoanDetails): LoanDetails;
    refund(loanDetails: LoanDetails[], month: number, amount: number): LoanDetails[];
    displayLoanInformation(loanDetails: LoanDetails[]): void;
};

class LoanCalculatorService implements ILoanCalculatorService {
    constructor() {

    }

    calculate = (loanDetails: LoanDetails): LoanDetails => {
        return new LoanDetails(
            {
                loanAmount: (loanDetails.loanAmount - loanDetails.monthlyPrincipal),
                annualInterestRate: loanDetails.annualInterestRate,
                loanMonths: loanDetails.loanMonths-1
            }
        );
    };

    generate = (loanDetails: LoanDetails): LoanDetails[] => {
        let scopeLoanDetails: LoanDetails = loanDetails;
        const loanDetailsCollection: LoanDetails[] = [];

        while (scopeLoanDetails.loanMonths > 0 && scopeLoanDetails.loanAmount > 0) {            
            scopeLoanDetails = loanCalculatorService.calculate(scopeLoanDetails);            
            loanDetailsCollection.push(scopeLoanDetails);
        }

        return loanDetailsCollection;
    };

    refund = (loanDetails: LoanDetails[], month: number, amount: number): LoanDetails[] => {
        let loanDetail = loanDetails.filter(loan => loan.loanMonths == month)[0];
        let index = loanDetails.indexOf(loanDetail);

        if (index > -1) {
            loanDetail.refund(amount);

            while (loanDetail.loanMonths > 0 && loanDetail.loanAmount > 0) {
                loanDetail = loanCalculatorService.calculate(loanDetail);

                loanDetails[index] = loanDetail;
                index++;
            }
        }

        return loanDetails;
    };

    displayLoanInformation = (loanDetails: LoanDetails[]): void => {
        loanDetails.forEach((item) => {
            item.flush()
        });
    };
};

const loanCalculatorService = new LoanCalculatorService();

const loanDetails = new LoanDetails({ loanAmount: (205602.66 + 2192.36), annualInterestRate: 6.18, loanMonths: 133 });
let generatedData = loanCalculatorService.generate(loanDetails);
console.log(loanCalculatorService.displayLoanInformation(generatedData));
generatedData=loanCalculatorService.refund(generatedData, 130, 4000);
console.log(loanCalculatorService.displayLoanInformation(generatedData));


//export default loanCalculatorService;