import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Stepper = ({ title, currentStep, steps }) => {
	return (
		<div className="row">
			<div className="col">
				<div className="row">
					<div className="col text-center mt-5 mb-3">
						<h1>{title}</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<ul className="progressbar">
							{steps.map((step, index) => (
								<li key={`stepper-${step.title}-${step.index}`} className={index <= currentStep ? 'active' : ''}>
									{step.title}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col" key={currentStep}>
						{steps[currentStep].content}
					</div>
				</div>
			</div>
		</div>
	);
};

Stepper.propTypes = {
	title: PropTypes.string.isRequired,
	currentStep: PropTypes.number,
	steps: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			content: PropTypes.node
		})
	).isRequired
};

Stepper.defaultProps = {
	currentStep: 0
};

export default Stepper;
