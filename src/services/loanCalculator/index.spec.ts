import { expect } from 'chai';
import 'mocha';

import loanCalculatorService from ".";
import { Loan } from "./types";

describe('loanCalculatorService', () => {
    const round = (value: number, numberOfDecimals?: number): number => {
        return Math.round(value * Math.pow(10, numberOfDecimals||2)) / Math.pow(10, numberOfDecimals||2);
    };

    const numberOfMonths = 133;
    const loanDetails = new Loan(207795.02, numberOfMonths, 6.18);

    it(`should generate exacly ${numberOfMonths} records`, () => {        
        const generatedData = loanCalculatorService.generate(loanDetails);

        expect(generatedData.length-1).to.equal(numberOfMonths);
    });

    describe('in second month', () => {
        it(`should return the correct interest value`, () => {
            const generatedData = loanCalculatorService.generate(loanDetails);
            const current = generatedData[1];

            expect(round(current.monthlyInterest)).to.equal(1070.03);
        });

        it(`should return the correct principal value`, () => {
            const generatedData = loanCalculatorService.generate(loanDetails);
            const current = generatedData[1];

            expect(round(current.monthlyPrincipal)).to.equal(1091.94);
        });

        it(`should return the correct monthly payment`, () => {
            const generatedData = loanCalculatorService.generate(loanDetails);
            const current = generatedData[1];

            expect(current.monthlyPayment).to.equal(current.monthlyInterest + current.monthlyPrincipal);
        }); 

        it(`should return the correct amount`, () => {
            const generatedData = loanCalculatorService.generate(loanDetails);
            const current = generatedData[1];
            const previous = loanDetails;

            expect(round(current.amount)).to.equal(round(previous.amount - previous.monthlyPrincipal));
        }); 
    }); 

    describe('with refund in third month', () => {
        const amountToRefund = 4000;

        it(`should substract the correct amount`, () => {
            const generatedData = loanCalculatorService.generate(loanDetails);
            const previous = generatedData[1];

            const updatedLoans = loanCalculatorService.refund(generatedData, numberOfMonths - 2, amountToRefund);
            const updated = updatedLoans[2];

            expect(round(updated.amount)).to.equal(round(previous.amount - previous.monthlyPrincipal - amountToRefund));
        });
    });
});