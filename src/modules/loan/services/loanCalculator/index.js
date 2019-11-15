import { Loan } from 'modules/loan/types';

export default class LoanCalculatorService {
	constructor(loanPrincipal, numberOfPayments, interestRate) {
		this.loanPrincipal = loanPrincipal;
		this.numberOfPayments = Number(numberOfPayments);
		this.interestRate = interestRate;

		this.loans = [];

		this.generate();
	}

	generate = () => {
		let principal = this.loanPrincipal;
		let payments = this.numberOfPayments;

		do {
			const current = new Loan(principal, payments, this.interestRate);

			this.loans.push(current);

			principal = current.newBalance;
			payments -= 1;
		} while (principal > 0 && payments > 0);
	};

	refund = (month, amount) => {
		const current = this.loans.filter((loan) => loan.numberOfPayments === month)[0];
		const index = this.loans.indexOf(current);

		if (index === -1) {
			return;
		}

		current.refund(amount);
		let principal = this.loans[index].newBalance;

		for (let payment = index + 1; payment < this.loans.length; payment += 1) {
			this.loans[payment].loanPrincipal = principal;
			principal = this.loans[payment].newBalance;
		}
	};

	flush = () => {
		return this.loans.map((current) => {
			return {
				...current,
				...{
					monthlyPayment: current.monthlyPayment,
					interest: current.interest,
					newBalance: current.newBalance
				}
			};
		});
	};
}
