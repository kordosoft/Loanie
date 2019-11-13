import { expect } from 'chai';
import 'mocha';

import LoanCalculatorService from '.';

describe('Loan Calculator Service', () => {
    const round = (value, numberOfDecimals) => {
        return Math.round(value * 10 ** (numberOfDecimals || 2)) / 10 ** (numberOfDecimals || 2);
    };

    const loanPrincipal = 207795.02;
    const numberOfMonths = 133;
    const interest = 6.18;

    it(`should generate exacly ${numberOfMonths} records`, () => {
        const loanCalculatorService = new LoanCalculatorService(
            loanPrincipal,
            numberOfMonths,
            interest
        );

        expect(loanCalculatorService.loans.length).to.equal(numberOfMonths);
    });

    describe('in second month', () => {
        it(`should return the interest value`, () => {
            const loanCalculatorService = new LoanCalculatorService(
                loanPrincipal,
                numberOfMonths,
                interest
            );
            const current = loanCalculatorService.loans[1];

            expect(round(current.interest)).to.equal(1064.52);
        });

        it(`should return the monthly payment`, () => {
            const loanCalculatorService = new LoanCalculatorService(
                loanPrincipal,
                numberOfMonths,
                interest
            );
            const current = loanCalculatorService.loans[1];

            expect(round(current.monthlyPayment)).to.equal(2161.92);
        });

        it(`should return the updated balance`, () => {
            const loanCalculatorService = new LoanCalculatorService(
                loanPrincipal,
                numberOfMonths,
                interest
            );
            const current = loanCalculatorService.loans[1];

            expect(round(current.newBalance)).to.equal(
                round(current.loanPrincipal - (current.monthlyPayment - current.interest))
            );
        });

        it(`should update the loan principal of the next month`, () => {
            const loanCalculatorService = new LoanCalculatorService(
                loanPrincipal,
                numberOfMonths,
                interest
            );
            const current = loanCalculatorService.loans[1];
            const next = loanCalculatorService.loans[2];

            expect(round(current.newBalance)).to.equal(round(next.loanPrincipal));
        });
    });

    describe('with refund in third month', () => {
        const amountToRefund = 4000;
        const index = 2;

        it(`should substract the correct amount`, () => {
            const loanCalculatorService = new LoanCalculatorService(
                loanPrincipal,
                numberOfMonths,
                interest
            );
            const before = {
                ...loanCalculatorService.loans[index],
            };

            loanCalculatorService.refund(numberOfMonths - index, amountToRefund);
            const after = {
                ...loanCalculatorService.loans[index],
            };

            expect(round(after.loanPrincipal)).to.equal(
                round(before.loanPrincipal - amountToRefund)
            );
        });

        it(`should update the loan principal of the next month`, () => {
            const loanCalculatorService = new LoanCalculatorService(
                loanPrincipal,
                numberOfMonths,
                interest
            );

            loanCalculatorService.refund(numberOfMonths - index, amountToRefund);
            const current = loanCalculatorService.loans[index];
            const next = loanCalculatorService.loans[index + 1];

            expect(round(current.newBalance)).to.equal(round(next.loanPrincipal));
        });
    });
});
