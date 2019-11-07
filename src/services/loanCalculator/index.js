var LoanDetails = /** @class */ (function () {
    function LoanDetails(loanDetailsConfig) {
        var _this = this;
        this.refund = function (amount) {
            _this.loanAmount -= amount;
        };
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
    ;
    LoanDetails.monthsInYear = 12;
    return LoanDetails;
}());
;
var LoanCalculatorService = /** @class */ (function () {
    function LoanCalculatorService() {
        this.calculate = function (loanDetails) {
            return new LoanDetails({
                loanAmount: (loanDetails.loanAmount - loanDetails.monthlyPrincipal),
                annualInterestRate: loanDetails.annualInterestRate,
                loanMonths: loanDetails.loanMonths - 1
            });
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
        this.refund = function (loanDetails, month, amount) {
            var loanDetail = loanDetails.filter(function (loan) { return loan.loanMonths == month; })[0];
            var index = loanDetails.indexOf(loanDetail);
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
        this.displayLoanInformation = function (loanDetails) {
            loanDetails.forEach(function (item) {
                item.flush();
            });
        };
    }
    return LoanCalculatorService;
}());
;
var loanCalculatorService = new LoanCalculatorService();
var loanDetails = new LoanDetails({ loanAmount: (205602.66 + 2192.36), annualInterestRate: 6.18, loanMonths: 133 });
var generatedData = loanCalculatorService.generate(loanDetails);
console.log(loanCalculatorService.displayLoanInformation(generatedData));
generatedData = loanCalculatorService.refund(generatedData, 130, 4000);
console.log(loanCalculatorService.displayLoanInformation(generatedData));
//export default loanCalculatorService;
//# sourceMappingURL=index.js.map