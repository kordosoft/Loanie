import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { LoanCalculatorService } from 'modules/loan/services';

import './index.scss';

const DataView = ({ data }) => {
	const { loanPrincipal, numberOfPayments, interestRate } = data;
	const [loanCalculator, setLoanCalculator] = useState(new LoanCalculatorService(loanPrincipal, numberOfPayments, interestRate));

	useEffect(() => {
		loanCalculator.refund(120, 5000);

		setLoanCalculator(loanCalculator);
	}, [loanCalculator]);

	const numberOfDigits = 2;
	const currencyFormater = new Intl.NumberFormat(navigator.language, {
		style: 'currency',
		currency: 'EUR',
		useGrouping: false,
		maximumFractionDigits: numberOfDigits
	});

	const currency = (value) => <>{currencyFormater.format(value)}</>;

	return (
		<div className="data-view">
			<div className="row sticky-top card bg-primary">
				<div className="col card-body">
					<div className="row">
						<div className="col">Current month</div>
						<div className="col">Loan principal</div>
						<div className="col">Monthly payment</div>
						<div className="col">Monthly interest</div>
						<div className="col">Monthly principal</div>
					</div>
				</div>
			</div>
			<div className="data-view-container">
				{loanCalculator.loans.map((loan) => (
					<div key={`loan-${loan.numberOfPayments}`} className="row card bg-light">
						<div className="col card-body">
							<div className="row">
								<div className="col">{data.numberOfPayments - loan.numberOfPayments + 1}</div>
								<div className="col">{currency(loan.loanPrincipal)}</div>
								<div className="col">{currency(loan.monthlyPayment)}</div>
								<div className="col">{currency(loan.interest)}</div>
								<div className="col">{currency(loan.monthlyPayment - loan.interest)}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

DataView.propTypes = {
	data: PropTypes.shape({
		loanPrincipal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		numberOfPayments: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		interestRate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
	}).isRequired
};

export default DataView;
