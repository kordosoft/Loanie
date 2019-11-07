"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoanDetails = /** @class */ (function () {
    function LoanDetails(loanDetailsConfig) {
        this.loanAmount = loanDetailsConfig.loanAmount;
        this.annualInterestRate = loanDetailsConfig.annualInterestRate;
        this.loanMonths = loanDetailsConfig.loanMonths;
        this.currentMonth = this.loanMonths;
        this.currentLoanAmount = this.loanAmount;
    }
    Object.defineProperty(LoanDetails.prototype, "loanTermYears", {
        get: function () { return this.currentMonth / LoanDetails.monthsInYear; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanDetails.prototype, "monthlyInterestRate", {
        get: function () {
            return this.annualInterestRate / LoanDetails.monthsInYear / 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanDetails.prototype, "monthlyInterestFactor", {
        get: function () {
            return this.monthlyInterestRate + (this.monthlyInterestRate / (Math.pow(this.monthlyInterestRate + 1, this.loanMonths) - 1));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanDetails.prototype, "montlyPayment", {
        get: function () {
            return this.loanAmount * this.monthlyInterestFactor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanDetails.prototype, "currentMonthFactor", {
        get: function () {
            return this.monthlyInterestRate + (this.monthlyInterestRate / (Math.pow(this.monthlyInterestRate + 1, 1) - 1));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanDetails.prototype, "monthlyInterest", {
        get: function () {
            return this.currentLoanAmount * this.monthlyInterestRate * this.currentMonthFactor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanDetails.prototype, "monthlyPrincipal", {
        get: function () {
            return this.montlyPayment - this.monthlyInterest;
        },
        enumerable: true,
        configurable: true
    });
    LoanDetails.prototype.flush = function () {
        console.log(this.loanTermYears, this.monthlyInterestRate, this.monthlyInterestFactor, this.montlyPayment, this.currentMonthFactor, this.monthlyInterest, this.monthlyPrincipal);
    };
    LoanDetails.monthsInYear = 12;
    return LoanDetails;
}());
;
var LoanCalculatorService = /** @class */ (function () {
    function LoanCalculatorService() {
        this.calculate = function (loanDetails) {
            loanDetails.currentMonth = loanDetails.loanMonths;
            return loanDetails;
        };
        this.refund = function (loanDetails, amount) {
            //loanDetails.loanAmount -= amount;
            //loanDetails.currentLoanAmount -= amount;
            return loanDetails;
        };
        this.round = function (value) {
            return Math.round(value * 100) / 100;
        };
        this.displayLoanInformation = function (loanDetails) {
            loanDetails.flush();
        };
    }
    return LoanCalculatorService;
}());
;
var loanCalculatorService = new LoanCalculatorService();
/*
let loanDetails = new LoanDetails({ loanAmount: (205602.66 + 2192.36), annualInterestRate: 6.18, loanMonths: 133});

while (loanDetails.currentMonth > 0 && loanDetails.currentLoanAmount > 0) {
    loanDetails = loanCalculatorService.calculate(loanDetails);
    loanCalculatorService.displayLoanInformation(loanDetails);
    loanDetails = loanCalculatorService.refund(loanDetails, 4000);

    loanDetails.currentMonth--;
}
*/
exports.default = loanCalculatorService;
//# sourceMappingURL=index.js.map