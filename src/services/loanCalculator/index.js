"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoanDetails = /** @class */ (function () {
    function LoanDetails(loanDetailsConfig) {
        this.loanAmount = loanDetailsConfig.loanAmount;
        this.annualInterestRate = loanDetailsConfig.annualInterestRate;
        this.loanMonths = loanDetailsConfig.loanMonths;
    }
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
    Object.defineProperty(LoanDetails.prototype, "monthlyPayment", {
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
            return this.loanAmount * this.monthlyInterestRate * this.currentMonthFactor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanDetails.prototype, "monthlyPrincipal", {
        get: function () {
            return this.monthlyPayment - this.monthlyInterest;
        },
        enumerable: true,
        configurable: true
    });
    LoanDetails.prototype.flush = function () {
        console.log(this.monthlyInterestRate, this.monthlyInterestFactor, this.monthlyPayment, this.currentMonthFactor, this.monthlyInterest, this.monthlyPrincipal);
    };
    LoanDetails.monthsInYear = 12;
    return LoanDetails;
}());
;
var LoanCalculatorService = /** @class */ (function () {
    function LoanCalculatorService() {
        this.calculate = function (loanDetails) {
            loanDetails.loanAmount -= loanDetails.monthlyPrincipal;
            loanDetails.loanMonths--;
            return loanDetails;
        };
        this.generate = function (loanDetails) {
            var scopeLoanDetails = loanDetails;
            var loanDetailsCollection = [];
            while (scopeLoanDetails.loanMonths > 0 && scopeLoanDetails.loanAmount > 0) {
                scopeLoanDetails = loanCalculatorService.calculate(scopeLoanDetails);
                loanDetailsCollection.push(scopeLoanDetails);
            }
            return loanDetailsCollection;
        };
        this.refund = function (loanDetails, amount) {
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
var loanDetails = new LoanDetails({ loanAmount: (205602.66 + 2192.36), annualInterestRate: 6.18, loanMonths: 133 });
console.log(loanCalculatorService.generate(loanDetails).forEach(function (item) { return item.flush(); }));
exports.default = loanCalculatorService;
//# sourceMappingURL=index.js.map