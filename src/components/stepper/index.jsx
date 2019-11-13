import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Stepper = ({ title, startingStep, steps }) => {
  const [currentStep, setCurrentStep] = useState(startingStep);

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
                <li
                  key={`stepper-${step.title}`}
                  className={index <= currentStep ? 'active' : ''}
                  onClick={() => setCurrentStep(index)}
                  role="presentation"
                >
                  {step.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">{steps[currentStep].content}</div>
        </div>
      </div>
    </div>
  );
};

Stepper.propTypes = {
  title: PropTypes.string.isRequired,
  startingStep: PropTypes.number,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node,
    })
  ).isRequired,
};

Stepper.defaultProps = {
  startingStep: 0,
};

export default Stepper;
