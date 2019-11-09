import { Loan } from './types';

export default class LoanCalculatorService {
    constructor(loanPrincipal, numberOfPayments, interestRate) {
        this.loanPrincipal = loanPrincipal;
        this.numberOfPayments = numberOfPayments;
        this.interestRate = interestRate;
    }

    generate = () => {
        const loans = [];
        let principal = this.loanPrincipal;
        let payments = this.numberOfPayments;

        do {
            let current = new Loan(principal, payments, this.interestRate)

            loans.push(current);

            principal = current.newBalance;
            payments--;
        }
        while (principal > 0 && payments > 0)

        return loans;
    };
    refund = (loans, month, amount) => {
        const scopeLoans = loans;

        let current = scopeLoans.filter(loan => loan.numberOfPayments === month)[0];
        let index = scopeLoans.indexOf(current);

        if (index === -1) {
            return scopeLoans;
        }

        current.refund(amount);
        let principal = scopeLoans[index].newBalance;

        for (let payment = index+1; payment < scopeLoans.length; payment++) {
            scopeLoans[payment].loanPrincipal = principal
            principal = scopeLoans[payment].newBalance;
        }

        return scopeLoans;
    };
    flush = (proposedLoans) => {
        proposedLoans.forEach((current) => {
            console.log({
                ...current, ...{
                    monthlyPayment: current.monthlyPayment,
                    interest: current.interest,
                    newBalance: current.newBalance
                }
            });
        });
    };
}
