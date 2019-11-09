import { expect } from 'chai';
import 'mocha';

import LoanCalculatorService from ".";
import { Loan } from "./types";

describe('loanCalculatorService', () => {
    const round = (value, numberOfDecimals) => {
        return Math.round(value * Math.pow(10, numberOfDecimals || 2)) / Math.pow(10, numberOfDecimals || 2);
    };

    const numberOfMonths = 133;
    const loanCalculatorService = new LoanCalculatorService(207795.02, numberOfMonths, 6.18);

    it(`should generate exacly ${numberOfMonths} records`, () => {
        const generatedData = loanCalculatorService.generate();

        expect(generatedData.length).to.equal(numberOfMonths);
    });

    describe('in second month', () => {
        it(`should return the interest value`, () => {
            const generatedData = loanCalculatorService.generate();
            const current = generatedData[1];

            expect(round(current.interest)).to.equal(1064.52);
        });

        it(`should return the monthly payment`, () => {
            const generatedData = loanCalculatorService.generate();
            const current = generatedData[1];

            expect(round(current.monthlyPayment)).to.equal(2161.92);
        });

        it(`should return the updated balance`, () => {
            const generatedData = loanCalculatorService.generate();
            const current = generatedData[1];

            expect(round(current.newBalance)).to.equal(round(current.loanPrincipal - (current.monthlyPayment - current.interest)));
        });

        it(`should update the loan principal of the next month`, () => {
            const generatedData = loanCalculatorService.generate();
            const current = generatedData[1];
            const next = generatedData[2];

            expect(round(current.newBalance)).to.equal(round(next.loanPrincipal));
        });
    });

    describe('with refund in third month', () => {
        const amountToRefund = 4000;
        const index = 2;

        it(`should substract the correct amount`, () => {
            const generatedData = loanCalculatorService.generate();
            const before = {
                ...generatedData[index]
            };

            const updatedLoans = loanCalculatorService.refund(generatedData, numberOfMonths - index, amountToRefund);
            const after = {
                ...updatedLoans[index]
            };

            expect(round(after.loanPrincipal)).to.equal(round(before.loanPrincipal - amountToRefund));
        });

        it(`should update the loan principal of the next month`, () => {
            const generatedData = loanCalculatorService.generate();
            
            const updatedLoans = loanCalculatorService.refund(generatedData, numberOfMonths - index, amountToRefund);
            const current = updatedLoans[index];
            const next = updatedLoans[index + 1];

            expect(round(current.newBalance)).to.equal(round(next.loanPrincipal));
        });
    });
});