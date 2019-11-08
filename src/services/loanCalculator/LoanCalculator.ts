import LoanCalculatorService from './LoanCalculatorService';
import { LoanDetails, Loan } from './types';

export default class LoanCalculator implements LoanCalculatorService {    
    calculateNext = (loanDetails: LoanDetails): LoanDetails => {
        return new Loan(
            (loanDetails.amount - loanDetails.monthlyPrincipal),
            loanDetails.months - 1,
            loanDetails.annualInterestRate
        );
    };

    generate = (loanDetails: LoanDetails): LoanDetails[] => {
        let scopeLoanDetails: LoanDetails = loanDetails;
        const loanDetailsCollection: LoanDetails[] = [scopeLoanDetails];

        while (scopeLoanDetails.months > 0 && scopeLoanDetails.amount > 0) {
            scopeLoanDetails = this.calculateNext(scopeLoanDetails);
            loanDetailsCollection.push(scopeLoanDetails);
        }

        return loanDetailsCollection;
    };

    refund = (loanDetails: LoanDetails[], month: number, amount: number): LoanDetails[] => {
        let loanDetail = loanDetails.filter(loan => loan.months == month)[0];
        let index = loanDetails.indexOf(loanDetail);

        if (index > -1) {            
            loanDetail.refund(amount);
            loanDetails.splice(index);

            loanDetails = loanDetails.concat(this.generate(loanDetail));
        }

        return loanDetails;
    };

    flush = (loanDetails: LoanDetails[]): void => {
        loanDetails.forEach((item) => {
            item.flush()
        });
    };
}