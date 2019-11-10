export default class Loan {
  constructor(loanPrincipal, numberOfPayments, interestRate) {
    this.loanPrincipal = loanPrincipal;
    this.numberOfPayments = numberOfPayments;
    this.interestRate = interestRate;
  }

  refund = (amount) => {
    this.loanPrincipal -= amount;
  };

  get monthlyPayment() {
    return (
      (this.monthlyInterestRate * this.loanPrincipal) /
      (1 - (1 + this.monthlyInterestRate) ** (-1 * this.numberOfPayments))
    );
  }

  get interest() {
    return this.monthlyInterestRate * this.loanPrincipal;
  }

  get newBalance() {
    return this.loanPrincipal - (this.monthlyPayment - this.interest);
  }

  get monthlyInterestRate() {
    return this.interestRate / 100 / 12;
  }
}
