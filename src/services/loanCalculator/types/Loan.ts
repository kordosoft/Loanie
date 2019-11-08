import { LoanDetails } from './';

export default class Loan implements LoanDetails {
    amount: number;
    months: number;
    annualInterestRate: number;

    constructor(amount: number, months: number, annualInterestRate: number) {
        this.amount = amount;
        this.months = months;
        this.annualInterestRate = annualInterestRate;       
    }

    static monthsInYear = 12;

    get monthlyInterestRate(): number {
        return this.annualInterestRate / Loan.monthsInYear / 100;
    }
    get monthlyInterestFactor(): number {
        return this.monthlyInterestRate + (this.monthlyInterestRate / (Math.pow(this.monthlyInterestRate + 1, this.months) - 1));
    }
    get monthlyPayment(): number {
        return this.amount * this.monthlyInterestFactor;
    }
    get currentMonthFactor(): number {
        return this.monthlyInterestRate + (this.monthlyInterestRate / (Math.pow(this.monthlyInterestRate + 1, 1) - 1));
    }
    get monthlyInterest(): number { 
        return this.amount * this.monthlyInterestRate * this.currentMonthFactor;
    }
    get monthlyPrincipal(): number {
        return this.monthlyPayment - this.monthlyInterest;
    }

    refund = (amount: number): void => {
        this.amount -= amount;
    };

    flush(): void {
        console.log(
            'months',
            this.months,
            'amount',
            this.amount,
            'monthlyInterestRate',
            this.monthlyInterestRate,
            'monthlyInterestFactor',
            this.monthlyInterestFactor,
            'monthlyPayment',
            this.monthlyPayment,
            'currentMonthFactor',
            this.currentMonthFactor,
            'monthlyInterest',
            this.monthlyInterest,
            'monthlyPrincipal',
            this.monthlyPrincipal
        );
    }
}
